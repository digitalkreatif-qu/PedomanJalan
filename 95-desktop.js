/* Tata letak desktop (layar >= 1200 px): menu kiri dipasang permanen, sisi kanan langsung menampilkan halaman.
   Beranda (daftar bab yang sama dengan menu) tidak ditampilkan lagi; halaman terakhir dibaca (atau halaman pertama) dibuka langsung.
   HP/tablet tidak berubah. Hanya tampilan; logika pembaca tidak diubah. */
(()=>{
const d=document,B=d.body,g=id=>d.getElementById(id);
const dr=g('dr'),nv=g('nv');
if(!dr||!nv||typeof render!=='function'||typeof home!=='function')return;
/* Semua modul tambahan digabung dalam satu lingkup, sehingga nama seperti cur/D/st/esc bisa tertimpa modul lain.
   Variabel milik pembaca (reader.js) karena itu dibaca lewat eval global, bukan lewat nama langsung. */
const G=s=>(0,eval)(s);

const css=d.createElement('style');
css.textContent=`
:root{--sw:clamp(300px,22vw,360px)}
@media(min-width:1200px){
  body.dk{padding-left:var(--sw)}
  html body.dk #dr{position:fixed;inset:0 auto 0 0;width:var(--sw);z-index:100001}
  body.dk .ov{display:none}
  html body.dk #nv{position:absolute;inset:0;width:auto;max-width:none;box-shadow:none;border-right:1px solid var(--line);-webkit-backdrop-filter:none;backdrop-filter:none}
  body.dk #hb,body.dk #nvx,html body.dk #bk[hidden]{display:none}
  html body.dk .fab{left:calc(var(--sw) + (100% - var(--sw))/2)!important}
  html body.dk.pnl .fab{left:calc(var(--sw) + (100% - var(--sw) - var(--pw))/2)!important}
  html body.dk #rp{left:calc(var(--sw) + (100% - var(--sw))/2)}
  html body.dk.pnl #rp{left:calc(var(--sw) + (100% - var(--sw) - var(--pw))/2)}
  #dkbm{margin:0 0 12px;padding:6px 6px 4px;border:1px solid var(--line);border-radius:16px;background:var(--card)}
  #dkbm[hidden]{display:none}
  #dkbm p{margin:4px 8px 2px;font:700 11.5px var(--sans,system-ui);letter-spacing:.04em;color:var(--mut)}
  #dkbm .s{border-top:0;padding:8px;border-radius:10px;font-size:13.5px;line-height:1.35}
  #dkbm .s:hover{background:var(--chip)}
}
@media print{#dr{display:none!important}body.dk{padding-left:0!important}}
`;
d.head.appendChild(css);

const mq=matchMedia('(min-width:1200px)'),desk=()=>mq.matches;

/* beranda -> langsung halaman (terakhir dibaca / halaman pertama) */
const _home=window.home,_render=window.render;
window.home=function(){
  if(!desk())return _home();
  const l=G("LS.get('sun_last',null)"),Pg=G('P'),Dc=G('D');
  const p=l&&Pg[l.p]?l.p:Dc[0].secs[0].p;
  G('cur={k:"read",p:'+p+',t:'+p+'}');
  _render(G('cur'));
};

/* penanda: di desktop tidak ada beranda, jadi ditampilkan di atas menu kiri */
const bmBox=()=>{let b=g('dkbm');if(!b){b=d.createElement('div');b.id='dkbm';b.hidden=true;const t=nv.querySelector('.nvt');t?t.after(b):nv.prepend(b)}return b};
const dkbm=()=>{if(!desk()||!G('D')||!G('P'))return;
  const Pg=G('P'),esc=G('esc'),KK=G('KK'),l=G('bms()').filter(x=>Pg[x.p]),b=bmBox();b.hidden=!l.length;
  b.innerHTML=l.length?'<p>\u2605 PENANDA</p>'+l.map(x=>`<div class="s" tabindex="0" role="button" data-m="${x.p}"><span class="t">${esc(KK(x.k))} - ${esc(x.t)}</span></div>`).join(''):''};

window.render=function(s){
  _render(s);
  if(!desk())return;
  g('bk').hidden=!G('stack').length;  /* tombol Kembali hanya bila ada riwayat */
  try{G('markNv()')}catch(e){}        /* sorot seksi aktif di menu kiri */
  dkbm();
};
g('st').addEventListener('click',()=>setTimeout(dkbm,0));

/* menu kiri selalu terbuka di desktop */
let was=false;
const apply=()=>{
  const on=desk();B.classList.toggle('dk',on);
  if(on){if(dr.hidden)dr.hidden=false;
    if(G('D')){if(G('cur').k==='home')window.render(G('cur'));else{dkbm();try{G('markNv()')}catch(e){}}}}
  else if(was){dr.hidden=true}
  was=on};
new MutationObserver(()=>{if(desk()&&dr.hidden)dr.hidden=false}).observe(dr,{attributes:true,attributeFilter:['hidden']});
mq.addEventListener('change',apply);
apply();
})();
