/* Floating WhatsApp button (all pages). Number: WHATSAPP in products.js. FR/AR via <html lang>. */
(function(){
  if(typeof WHATSAPP==='undefined'||!WHATSAPP) return;
  var T={fr:{label:"Commander sur WhatsApp",hi:"Bonjour ALOURA, je souhaite passer commande.",hiP:"Bonjour ALOURA, je souhaite commander : "},
         ar:{label:"اطلب عبر واتساب",hi:"مرحبًا ALOURA، أرغب في تقديم طلب.",hiP:"مرحبًا ALOURA، أرغب في طلب: "}};
  var st=document.createElement('style');
  st.textContent='.wa-fab{position:fixed;z-index:35;inset-inline-end:16px;bottom:calc(env(safe-area-inset-bottom) + 18px);display:flex;align-items:center;gap:10px;height:54px;min-width:54px;padding:0 18px 0 15px;border-radius:27px;background:#25d366;color:#fff;font:600 14px/1 Manrope,Tajawal,system-ui,sans-serif;text-decoration:none;box-shadow:0 6px 22px rgba(0,0,0,.45);transition:transform .2s}.wa-fab:hover{transform:translateY(-2px)}.wa-fab svg{width:26px;height:26px;flex:none}@media(max-width:480px){.wa-fab{padding:0;width:54px;justify-content:center}.wa-fab span{display:none}}';
  document.head.appendChild(st);
  var a=document.createElement('a'); a.className='wa-fab'; a.target='_blank'; a.rel='noopener';
  a.innerHTML='<svg viewBox="0 0 32 32" fill="#fff" aria-hidden="true"><path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.3.6 4.4 1.7 6.3L3 29l7.4-2c1.8 1 3.8 1.5 5.9 1.500 6.900 0 12.500-5.600 12.500-12.500S22.900 3 16 3zm0 22.800c-1.900 0-3.700-.5-5.300-1.500l-.4-.2-4.400 1.200 1.200-4.300-.3-.4a10.200 10.200 0 0 1-1.600-5.500C5.200 9.400 10 4.700 16 4.700s10.800 4.700 10.800 10.800S21.900 25.800 16 25.800zm5.600-7.600c-.3-.2-1.800-.9-2.100-1s-.5-.2-.7.200-.8 1-1 1.200-.4.200-.7.100a8.300 8.300 0 0 1-4.100-3.600c-.3-.5.300-.5.900-1.600.1-.2 0-.4 0-.5l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400s-1 1-1 2.400 1 2.800 1.200 3c.1.200 2 3.100 4.900 4.300 1.800.8 2.500.8 3.400.7.600-.1 1.800-.7 2-1.400.3-.7.300-1.300.2-1.400-.1-.1-.3-.2-.6-.4z"/></svg><span></span>';
  document.body.appendChild(a);
  function sync(){
    var l=document.documentElement.lang==='ar'?'ar':'fr', msg=T[l].hi, parts=document.title.split(' — ');
    if(location.pathname.indexOf('/product/')===0&&parts.length>1) msg=T[l].hiP+parts[0]+' — '+location.href;
    a.href='https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(msg);
    a.setAttribute('aria-label',T[l].label); a.querySelector('span').textContent=T[l].label;
  }
  sync();
  new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  new MutationObserver(sync).observe(document.querySelector('title'),{childList:true});
})();
