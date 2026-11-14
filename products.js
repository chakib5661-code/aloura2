/* Shared product data: used by index.html (shelf) and product.html (/product/<slug> pages). */
// Each product takes one slot. Empty slots show "SOON". Add the photo in /img and fill in the details.
const PRODUCTS = [
  { id:1, slot:0, no:"N° 01", name:"Aloura Noir", gender:"m", notes:["bergamot","timur","akigala"],      sizes:{100:12000}, img:"img/aloura-noir.webp" },
  { id:2, slot:1, no:"N° 02", name:"Aloura Rouge", gender:"f", notes:["clementine","magnolia","vanilla"], sizes:{100:12000}, img:"img/aloura-rouge.webp" },
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
