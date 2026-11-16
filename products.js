/* Shared product data: used by index.html (shelf) and product.html (/product/<slug> pages). */
// Delivery price in DA, or null = "confirmed by phone". Per-wilaya prices: byWilaya, e.g. { "Alger": 500, "Oran": 700 }
const DELIVERY = { fee: null, byWilaya: {} };
const WILAYAS = ["Adrar","Chlef","Laghouat","Oum El Bouaghi","Batna","Béjaïa","Biskra","Béchar","Blida","Bouira","Tamanrasset","Tébessa","Tlemcen","Tiaret","Tizi Ouzou","Alger","Djelfa","Jijel","Sétif","Saïda","Skikda","Sidi Bel Abbès","Annaba","Guelma","Constantine","Médéa","Mostaganem","M'Sila","Mascara","Ouargla","Oran","El Bayadh","Illizi","Bordj Bou Arréridj","Boumerdès","El Tarf","Tindouf","Tissemsilt","El Oued","Khenchela","Souk Ahras","Tipaza","Mila","Aïn Defla","Naâma","Aïn Témouchent","Ghardaïa","Relizane","Timimoun","Bordj Badji Mokhtar","Ouled Djellal","Béni Abbès","In Salah","In Guezzam","Touggourt","Djanet","El M'Ghair","El Meniaa"];

// Customer review screenshots (from social media), shown under the photo gallery of every product page.
// Drop the images in img/reviews/ and list them here, e.g. ["img/reviews/1.webp","img/reviews/2.webp"].
// A single product can also have its own: add  reviews:["img/reviews/noir-1.webp"]  to its entry. Empty = section hidden.
const REVIEWS = [];

// Most asked questions, shown at the bottom of every product page. Edit freely.
const FAQ = {
  fr: [
    { q:"Comment payer ?", a:"Uniquement à la livraison, en espèces, à la réception de votre commande. Il n'y a aucun paiement en ligne." },
    { q:"Combien coûte la livraison ?", a:"Les frais de livraison vous sont confirmés par téléphone, selon votre wilaya." },
    { q:"Livrez-vous dans toute l'Algérie ?", a:"Oui, vous pouvez choisir votre wilaya parmi les 58 wilayas dans le formulaire de commande." },
    { q:"Comment ma commande est-elle confirmée ?", a:"Nous vous appelons au numéro indiqué pour confirmer la commande et la livraison. Vérifiez bien votre numéro avant de valider." },
    { q:"Quelle est la contenance du flacon ?", a:"Le flacon contient 100 ml d'eau de parfum." },
    { q:"Puis-je commander plusieurs flacons ?", a:"Oui, choisissez la quantité souhaitée juste au-dessus du formulaire de commande." }
  ],
  ar: [
    { q:"كيف أدفع؟", a:"الدفع عند الاستلام نقدًا فقط، عند وصول طلبك. لا يوجد دفع عبر الإنترنت." },
    { q:"كم تبلغ تكلفة التوصيل؟", a:"نؤكد لك تكلفة التوصيل عبر الهاتف حسب ولايتك." },
    { q:"هل تقومون بالتوصيل إلى كامل الجزائر؟", a:"نعم، يمكنك اختيار ولايتك من بين 58 ولاية في نموذج الطلب." },
    { q:"كيف يُؤكَّد طلبي؟", a:"نتصل بك على الرقم الذي أدخلته لتأكيد الطلب والتوصيل. تأكد من صحة رقمك قبل إرسال الطلب." },
    { q:"ما هي سعة الزجاجة؟", a:"تحتوي الزجاجة على 100 مل من ماء العطر." },
    { q:"هل يمكنني طلب أكثر من زجاجة؟", a:"نعم، اختر الكمية التي تريدها أعلى نموذج الطلب." }
  ]
};

// Each product takes one slot. Empty slots show "SOON". Add the photo in /img and fill in the details.
const PRODUCTS = [
  { id:1, slot:0, no:"N° 01", name:"Aloura Noir", gender:"m", notes:["bergamot","timur","akigala"],      sizes:{100:4900}, img:"img/aloura-noir.webp",
    gallery:["img/aloura-noir.webp","img/aloura-noir-g1.webp","img/aloura-noir-g2.webp"],
    more:["img/aloura-noir-3.webp","img/aloura-noir-4.webp"],   // full-width images at the bottom of the page, under the delivery form   // add more photos by listing them here
    pitch:{ fr:[
      { t:"Un sillage pensé pour le soir", d:"Bergamote lumineuse, bois de Timur et bois d'Akigala : une signature chaude et élégante qui se remarque sans en faire trop." },
      { t:"Un flacon qui a du caractère", d:"Verre transparent, étiquette noire bordée d'or et bouchon noir : un flacon sobre et raffiné, beau à offrir comme à garder." },
      { t:"Le parfum de ceux qui aiment l'allure", d:"Pour l'homme qui soigne les détails, du costume du soir à la sortie entre amis." },
      { t:"Commandez en toute confiance", d:"Aucun paiement en ligne : vous payez en espèces à la livraison, après notre appel de confirmation." }
    ], ar:[
      { t:"أثر صُمّم للمساء", d:"برغموت مضيء وخشب التيمور وخشب أكيغالا: توقيع دافئ وأنيق يلفت الانتباه دون مبالغة." },
      { t:"زجاجة لها شخصيتها", d:"زجاج شفاف وملصق أسود بحواف ذهبية وغطاء أسود: زجاجة راقية وبسيطة، جميلة للإهداء وللاقتناء." },
      { t:"عطر من يهتم بالتفاصيل", d:"للرجل الذي يعتني بإطلالته، من سهرات المساء إلى اللقاءات مع الأصدقاء." },
      { t:"اطلب بكل ثقة", d:"لا يوجد دفع عبر الإنترنت: تدفع نقدًا عند الاستلام بعد مكالمة التأكيد." }
    ] },
    desc:{ fr:"Un parfum boisé et frais pour le soir. Bergamote lumineuse en tête, bois de Timur épicé au cœur, puis un fond sombre et profond de bois d'Akigala.", ar:"عطر خشبي منعش للمساء. برغموت مضيء في المقدمة، وخشب التيمور المتبّل في القلب، ثم قاعدة داكنة عميقة من خشب أكيغالا." } },
  { id:2, slot:1, no:"N° 02", name:"Aloura Rouge", gender:"f", notes:["clementine","magnolia","vanilla"], sizes:{100:4900}, img:"img/aloura-rouge.webp",
    gallery:["img/aloura-rouge-g1.webp","img/aloura-rouge-g2.webp"],
    more:["img/aloura-rouge-4.webp","img/aloura-rouge-3.webp"],   // full-width images at the bottom of the page, under the delivery form
    pitch:{ fr:[
      { t:"Douce, fruitée, irrésistible", d:"Clémentine pétillante, magnolia crémeux et fond de vanille : un parfum qui enveloppe et laisse un souvenir doux." },
      { t:"Un flacon qui a du caractère", d:"Verre transparent, étiquette bordeaux bordée d'or et bouchon noir : un flacon élégant, beau à offrir comme à garder." },
      { t:"Le parfum de celles qui aiment briller", d:"Pour la femme qui soigne les détails, de la sortie du soir aux grandes occasions." },
      { t:"Commandez en toute confiance", d:"Aucun paiement en ligne : vous payez en espèces à la livraison, après notre appel de confirmation." }
    ], ar:[
      { t:"ناعم، فاكهي، لا يُقاوَم", d:"كليمنتين منعش وماغنوليا كريمي وقاعدة فانيلا: عطر يحتضنك ويترك ذكرى لطيفة." },
      { t:"زجاجة لها شخصيتها", d:"زجاج شفاف وملصق بوردو بحواف ذهبية وغطاء أسود: زجاجة أنيقة، جميلة للإهداء وللاقتناء." },
      { t:"عطر من تحب أن تتألق", d:"للمرأة التي تهتم بالتفاصيل، من سهرات المساء إلى المناسبات الكبيرة." },
      { t:"اطلبي بكل ثقة", d:"لا يوجد دفع عبر الإنترنت: تدفعين نقدًا عند الاستلام بعد مكالمة التأكيد." }
    ] },
    desc:{ fr:"Un parfum fruité et floral, doux et enveloppant. Clémentine pétillante, magnolia crémeux, et un fond vanillé chaleureux qui reste sur la peau.", ar:"عطر فاكهي وزهري ناعم ودافئ. كليمنتين منعش، وماغنوليا كريمي، وقاعدة فانيلا دافئة تدوم على البشرة." } },
  // Covered bottles = coming soon. To reveal one: replace the line with real product data (name, notes, sizes, img).
  { id:3, slot:2, soon:true },
  { id:4, slot:3, soon:true },
  { id:5, slot:4, soon:true }
];

const NOTES = {
  oud:{fr:"Oud",ar:"عود"}, amber:{fr:"Ambre",ar:"عنبر"}, vanilla:{fr:"Vanilla",ar:"فانيلا"},
  rose:{fr:"Rose",ar:"ورد"}, saffron:{fr:"Safran",ar:"زعفران"}, musk:{fr:"Musc",ar:"مسك"},
  bergamot:{fr:"Bergamot",ar:"برغموت"}, timur:{fr:"Timur",ar:"تيمور"}, akigala:{fr:"Bois d'Akigala",ar:"خشب أكيغالا"},
  clementine:{fr:"Clementine",ar:"كليمنتين"}, magnolia:{fr:"Magnolia",ar:"ماغنوليا"}
};
