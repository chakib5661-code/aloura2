/* Shared product data: used by index.html (shelf) and product.html (/product/<slug> pages). */
// Delivery price in DA, or null = "confirmed by phone". Per-wilaya prices: byWilaya, e.g. { "Alger": 500, "Oran": 700 }
const DELIVERY = { fee: null, byWilaya: {} };
const WILAYAS = ["Adrar","Chlef","Laghouat","Oum El Bouaghi","Batna","Béjaïa","Biskra","Béchar","Blida","Bouira","Tamanrasset","Tébessa","Tlemcen","Tiaret","Tizi Ouzou","Alger","Djelfa","Jijel","Sétif","Saïda","Skikda","Sidi Bel Abbès","Annaba","Guelma","Constantine","Médéa","Mostaganem","M'Sila","Mascara","Ouargla","Oran","El Bayadh","Illizi","Bordj Bou Arréridj","Boumerdès","El Tarf","Tindouf","Tissemsilt","El Oued","Khenchela","Souk Ahras","Tipaza","Mila","Aïn Defla","Naâma","Aïn Témouchent","Ghardaïa","Relizane","Timimoun","Bordj Badji Mokhtar","Ouled Djellal","Béni Abbès","In Salah","In Guezzam","Touggourt","Djanet","El M'Ghair","El Meniaa"];

// Each product takes one slot. Empty slots show "SOON". Add the photo in /img and fill in the details.
const PRODUCTS = [
  { id:1, slot:0, no:"N° 01", name:"Aloura Noir", gender:"m", notes:["bergamot","timur","akigala"],      sizes:{100:12000}, img:"img/aloura-noir.webp",
    gallery:["img/aloura-noir.webp"],   // add more photos here: ["img/aloura-noir.webp","img/aloura-noir-2.jpg",…]
    desc:{ fr:"Un parfum boisé et frais pour le soir. Bergamote lumineuse en tête, bois de Timur épicé au cœur, puis un fond sombre et profond de bois d'Akigala.", ar:"عطر خشبي منعش للمساء. برغموت مضيء في المقدمة، وخشب التيمور المتبّل في القلب، ثم قاعدة داكنة عميقة من خشب أكيغالا." } },
  { id:2, slot:1, no:"N° 02", name:"Aloura Rouge", gender:"f", notes:["clementine","magnolia","vanilla"], sizes:{100:12000}, img:"img/aloura-rouge.webp",
    gallery:["img/aloura-rouge.webp"],
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
