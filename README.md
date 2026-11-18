# ALOURA

One-page perfume storefront (cash on delivery, prices in DA).

- `index.html` — the whole site. Edit `CONFIG` at the top of the script; the product list (`PRODUCTS`) now lives in `products.js`. All text is in the `I18N` table (French by default, Arabic via the header switch).
- `product.html` + `vercel.json` — one page per product at `/product/alouranoir`, `/product/alourarouge`… (slug = product name without spaces; `/product/aloura01` style also works). Each page has a button back to the shop. Each page is a landing page with a description, a photo gallery (`gallery:[…]` + `desc:{fr,ar}` per product in `products.js`) and a quick-order form (no cart) with delivery details that sends the order to Telegram like the main shop. Full-width images at the very bottom of a product page (under the delivery form): `more:[…]` on the product in `products.js`. Marketing copy (`pitch`) per product and the shared FAQ (`FAQ`) are in `products.js` too, in French and Arabic. Customer review screenshots: put the images in `img/reviews/` and list them in `REVIEWS` in `products.js` (shown under the gallery, tap to enlarge; hidden while the list is empty; a product can also have its own `reviews:[…]`). Delivery prices: `DELIVERY` in `products.js`. New products added to `products.js` get their page automatically.
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
