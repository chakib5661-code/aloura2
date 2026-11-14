# ALOURA

One-page perfume storefront (cash on delivery, prices in DA).

- `index.html` — the whole site. Edit `CONFIG` and `PRODUCTS` at the top of the script. All text is in the `I18N` table (French by default, Arabic via the header switch).
- `vercel.json` — makes `/product/aloura01`, `/product/aloura02`… open the page with that bottle zoomed (slug = `aloura` + product id, 2 digits; a new product in `PRODUCTS` gets its page automatically).
- `api/order.js` — Vercel function: sends each order to Telegram.
- `img/` — bottles, velvet covers, background.

## Go live (Vercel)

1. vercel.com → **Add New → Project** → import this GitHub repo → Deploy (no build settings needed).
2. **Telegram orders**
   - In Telegram, talk to **@BotFather** → `/newbot` → copy the bot token.
   - Open your new bot and press **Start**, then open `https://api.telegram.org/bot<TOKEN>/getUpdates` and copy `chat.id` from the result.
   - Vercel → Project → **Settings → Environment Variables**: add `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` → **Redeploy**.
3. **Vercel Analytics** — Project → **Analytics → Enable**. (Custom events such as `add_to_bag` need a paid plan; page views are free.)
4. **Meta Pixel** — put your Pixel ID in `CONFIG.metaPixelId` in `index.html`, commit, push. Events sent: PageView, ViewContent, AddToCart, InitiateCheckout, Purchase (only when the order reached Telegram).

Never put the bot token in `index.html` or commit it to the repo.
