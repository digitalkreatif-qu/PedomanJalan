/* Dok bawah: ikon garis (SVG), tampilan ringkas & elegan. Isi dok: Catatan, Baca, Asisten, Pustaka, Tutup.
   Cetak (admin) dipindah ke menu samping (lihat 60-mobile.js). */
(function(){
  const sv=d=>'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">'+d+'</svg>';
  const IC={
    Catatan:sv('<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>'),
    Baca:sv('<path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z"/>'),
    Asisten:sv('<path d="M11 3l1.9 5.1L18 10l-5.1 1.9L11 17l-1.9-5.1L4 10l5.1-1.9z"/><path d="M19 15l.7 1.8 1.8.7-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7z"/>'),
    Tutup:sv('<path d="M18 6 6 18M6 6l12 12"/>'),
    Pustaka:sv('<path d="M3 4h4v16H3z"/><path d="M9 4h4v16H9z"/><path d="M15.3 5.6l3.9 1-3.4 13.8-3.9-1z"/>')
  };
  const TT={Catatan:'Catatan pribadi',Baca:'Bacakan dokumen',Asisten:'Asisten dokumen',Pustaka:'Pustaka & lampiran',Tutup:'Tutup aplikasi (login tetap tersimpan)'};
  const css=document.createElement('style');
  css.textContent=`
html body .fab{gap:2px!important;padding:6px!important;border-radius:24px!important;border:1px solid var(--line)!important;box-shadow:var(--sh),0 0 0 1px var(--glow)!important;-webkit-backdrop-filter:blur(22px) saturate(1.5);backdrop-filter:blur(22px) saturate(1.5);overflow:visible}
html body .fab button{position:relative;display:flex!important;flex-direction:column!important;align-items:center;justify-content:center;gap:4px!important;min-width:78px;height:54px;padding:6px 10px!important;border-radius:18px!important;color:var(--mut)!important;font:600 11px/1 "Space Grotesk",system-ui,sans-serif!important;letter-spacing:.02em;transition:background .18s,color .18s,transform .15s!important}
html body .fab button i{display:grid!important;place-items:center;width:24px;height:24px;font-size:0!important;line-height:0;transition:transform .2s}
html body .fab button i svg{width:22px;height:22px;stroke:currentColor;fill:none;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
html body .fab button:hover{background:var(--chip)!important;color:var(--ink)!important;transform:none!important}
html body .fab button:hover i{transform:translateY(-1px) scale(1.07)}
html body .fab button:active{transform:scale(.96)!important}
html body .fab button:focus-visible{outline:2px solid var(--acc);outline-offset:-2px}
html body .fab button[aria-pressed=true]{background:var(--chip)!important;color:var(--acc)!important}
html body .fab button[aria-pressed=true]::after{left:50%;right:auto;bottom:3px;width:14px;height:3px;margin-left:-7px;border-radius:3px;background:var(--acc)}
.nvx2 button{display:flex;align-items:center;justify-content:center;gap:6px}.nvx2 button svg{flex:none}
.nvx2 button{font-size:12.5px!important}.nvx2 .nvsh{display:none}
html body .fab button:last-child::before{content:"";position:absolute;left:-2px;top:15px;bottom:15px;width:1px;background:var(--line)}
@media(min-width:601px){.nvx2:not(:has(button:not(.nvsh))){display:none}}
@media(max-width:600px){
html body>header .row{gap:4px!important}
html body #hb,html body #bk,html body #st,html body #fs,html body #sb,html body #lo{width:36px!important;height:36px!important;flex:none}
html body #fs{font-size:13px}
html body #sh{display:none!important}.nvx2 .nvsh{display:flex}
html body>header h1#ti{white-space:normal!important;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;font-size:14.5px!important;line-height:1.2!important;min-width:0}
html body .fab{border-radius:20px 20px 0 0!important;border-width:1px 0 0!important;gap:0!important;padding:6px 8px calc(6px + env(safe-area-inset-bottom,0px))!important}
html body .fab button{min-width:0;flex:1 1 0!important;height:52px;padding:6px 2px!important}
}`;
  document.head.appendChild(css);
  const tune=()=>{
    fab.querySelectorAll('button').forEach(b=>{
      const sp=b.querySelector('span'),k=sp?sp.textContent.trim():'';
      if(k==='Cetak'){b.remove();return}   /* dipindah ke menu samping */
      const i=b.querySelector('i');
      if(IC[k]&&i&&!i.querySelector('svg')){i.innerHTML=IC[k];b.title=TT[k]||k}
    });
  };
  tune();
  new MutationObserver(tune).observe(fab,{childList:true});
})();
