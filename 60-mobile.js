/* Gaya mobile + tombol Tutup (bawah) + ikon Keluar (header) */
const mst=document.createElement('style');
mst.textContent=`.fab button{display:flex;align-items:center;gap:6px}.fab button i{font-style:normal}
@media(max-width:560px){
.fab{left:0;right:0;bottom:0;width:100%;max-width:none;gap:0;justify-content:space-around;flex-wrap:nowrap;background:var(--pkbg);color:var(--pkfg);border-top:1px solid #8884;padding:6px 4px calc(6px + env(safe-area-inset-bottom,0px))}
.fab button{flex:1;min-width:0;flex-direction:column;gap:2px;border:0;box-shadow:none;background:none;border-radius:10px;padding:4px 2px;font-size:11px;font-weight:600}
.fab button i{font-size:20px;line-height:1.1}.fab button span{max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
body{padding-bottom:calc(66px + env(safe-area-inset-bottom,0px))}
#ai,#np,#pk{left:8px;right:8px;width:auto;bottom:calc(68px + env(safe-area-inset-bottom,0px))}
#ai,#pk{height:min(74vh,600px)}
#rp{left:8px;right:8px;max-width:none;justify-content:space-between;bottom:calc(74px + env(safe-area-inset-bottom,0px));border-radius:14px}#rp span{flex:1;max-width:none}}`;
document.head.appendChild(mst);
/* Tombol bawah: Tutup (TIDAK logout, sesi/login tetap tersimpan) */
let tcT=null;
const tcSay=t=>{if(!tcT){tcT=document.createElement('div');tcT.setAttribute('role','status');tcT.style.cssText='position:fixed;left:50%;transform:translateX(-50%);bottom:calc(var(--dk,64px) + 24px + env(safe-area-inset-bottom,0px));z-index:100001;background:var(--pkbg);color:var(--pkfg);border:1px solid #8886;border-radius:10px;padding:8px 14px;font:13px system-ui,sans-serif;box-shadow:0 4px 18px #0004;max-width:calc(100% - 28px);text-align:center';document.body.appendChild(tcT)}
  tcT.textContent=t;tcT.hidden=false;clearTimeout(tcT._t);tcT._t=setTimeout(()=>{tcT.hidden=true},4000)};
function tutup(){
  ['ai','np','pk'].forEach(id=>{const e=document.getElementById(id);if(e)e.hidden=true});
  {const dr=document.getElementById('dr'),x=document.getElementById('nvx');if(dr&&!dr.hidden&&x)x.click()}
  try{window.close()}catch(e){}
  setTimeout(()=>{if(!window.closed)tcSay('Tab tidak bisa ditutup otomatis oleh browser. Silakan tutup manual. Login Anda tetap tersimpan.')},250);
}
document.body.appendChild(fab);
/* Menu samping: Cetak (admin) dan Tutup dipindah dari dok bawah agar dok ringkas */
(function(){
  const nvEl=document.getElementById('nv');if(!nvEl)return;
  const ic=d=>'<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+d+'</svg>';
  const PR=ic('<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 14h10v7H7z"/>'),CL=ic('<path d="M18 6 6 18M6 6l12 12"/>');
  const SH=ic('<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>');
  const add=()=>{const f=nvEl.querySelector('.nvf');if(!f||f.querySelector('.nvx2'))return;
    const s=document.createElement('div');s.className='seg nvx2';
    {const b=document.createElement('button');b.type='button';b.className='nvsh';b.title='Bagikan aplikasi';b.innerHTML=SH+'<span>Bagikan</span>';b.onclick=()=>{const x=document.getElementById('sh');if(x)x.click()};s.appendChild(b)}
    if(A){const b=document.createElement('button');b.type='button';b.title='Cetak halaman';b.innerHTML=PR+'<span>Cetak</span>';b.onclick=()=>print();s.appendChild(b)}
    const c=document.createElement('button');c.type='button';c.title='Tutup aplikasi (login tetap tersimpan)';c.innerHTML=CL+'<span>Tutup</span>';c.onclick=tutup;s.appendChild(c);
    f.appendChild(s)};
  add();new MutationObserver(add).observe(nvEl,{childList:true});
})();
/* Tombol Keluar (logout) berupa ikon saja, di samping A+ pada header */
(function(){
  const row=document.querySelector('body>header .row'),fs=document.getElementById('fs');if(!row)return;
  const lo=document.createElement('button');lo.id='lo';lo.type='button';lo.title='Keluar (logout)';lo.setAttribute('aria-label','Keluar (logout)');
  lo.innerHTML='<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>';
  lo.onclick=()=>{if(confirm('Keluar dari akun? Anda harus login lagi untuk membuka dokumen.'))out()};
  const css=document.createElement('style');
  css.textContent='html body #lo,html body #sh{width:44px;height:44px;padding:0;display:grid;place-items:center;flex:none}@media(max-width:600px){html body #lo,html body #sh{width:40px;height:40px}}';
  document.head.appendChild(css);
  /* Tombol Bagikan (share) aplikasi, ikon saja */
  const sh=document.createElement('button');sh.id='sh';sh.type='button';sh.title='Bagikan aplikasi';sh.setAttribute('aria-label','Bagikan aplikasi');
  sh.innerHTML='<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>';
  sh.onclick=async()=>{
    const url=location.origin+'/',data={title:'Spesifikasi Umum 2025',text:'Spesifikasi Umum 2025 (aibook.my.id)',url};
    try{if(navigator.share){await navigator.share(data);return}}catch(e){if(e&&e.name==='AbortError')return}
    try{await navigator.clipboard.writeText(url);tcSay('Tautan aplikasi disalin: '+url)}
    catch(e){tcSay('Tautan aplikasi: '+url)}
  };
  row.insertBefore(lo,fs?fs.nextSibling:null);row.insertBefore(sh,lo);
})();
