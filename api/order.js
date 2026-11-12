// Vercel serverless function: receives an order from the site and sends it to Telegram.
// Secrets live in Vercel → Project → Settings → Environment Variables (never in the repo):
//   TELEGRAM_BOT_TOKEN   token from @BotFather
//   TELEGRAM_CHAT_ID     your chat id (or a group id)

const hits = new Map(); // best-effort rate limit per instance: 5 orders / 10 min / IP

const clip = (v, n) => String(v == null ? '' : v).replace(/[\u0000-\u001f]+/g, ' ').trim().slice(0, n);
const money = n => Number(n).toLocaleString('fr-FR').replace(/[  ]/g, ' ') + ' DA';

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' });

  const token = process.env.TELEGRAM_BOT_TOKEN, chat = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chat) return res.status(500).json({ ok: false, error: 'not_configured' });

  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch (_) { b = null; } }
  if (!b || typeof b !== 'object') return res.status(400).json({ ok: false, error: 'bad_request' });

  if (b.hp) return res.status(200).json({ ok: true, id: 'AL-0000' }); // honeypot: pretend success to bots

  const ip = clip(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'ip', 60).split(',')[0];
  const now = Date.now(), recent = (hits.get(ip) || []).filter(t => now - t < 600000);
  if (recent.length >= 5) return res.status(429).json({ ok: false, error: 'too_many' });
  hits.set(ip, [...recent, now]);

  const c = b.customer || {};
  const name = clip(c.name, 80), phone = clip(c.phone, 20), wilaya = clip(c.wilaya, 40), addr = clip(c.addr, 200), note = clip(c.note, 200);
  if (name.length < 2 || !/^0[567]\d{8}$/.test(phone) || !wilaya || addr.length < 5)
    return res.status(400).json({ ok: false, error: 'invalid_customer' });

  const items = Array.isArray(b.items) ? b.items.slice(0, 20) : [];
  if (!items.length) return res.status(400).json({ ok: false, error: 'empty_order' });
  let sub = 0;
  const lines = [];
  for (const it of items) {
    const qty = Math.round(Number(it.qty)), unit = Number(it.unitPrice), size = clip(it.size, 6);
    if (!(qty >= 1 && qty <= 20) || !(unit >= 0 && unit < 10000000)) return res.status(400).json({ ok: false, error: 'invalid_item' });
    sub += qty * unit;
    lines.push(`• ${qty} × ${clip(it.product, 60)} ${size}ml — ${money(qty * unit)}`);
  }
  const fee = b.delivery == null ? null : Number(b.delivery);
  const id = 'AL-' + Date.now().toString(36).toUpperCase().slice(-6);

  const head = [`🛍 New order ${id} — cash on delivery`, `👤 ${name}`, `📞 ${phone}`, `📍 ${wilaya} — ${addr}`, note ? `📝 ${note}` : null].filter(Boolean);
  const text = [
    ...head, '', ...lines, '',
    `Subtotal: ${money(sub)}`,
    `Delivery: ${fee == null || isNaN(fee) ? 'to be confirmed' : money(fee)}`,
    `Total: ${money(sub + (fee && !isNaN(fee) ? fee : 0))}${fee == null ? ' + delivery' : ''}`
  ].join('\n');

  try {
    const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chat, text, disable_web_page_preview: true })
    });
    if (!r.ok) return res.status(502).json({ ok: false, error: 'telegram_failed' });
  } catch (_) { return res.status(502).json({ ok: false, error: 'telegram_unreachable' }); }

  return res.status(200).json({ ok: true, id });
};
