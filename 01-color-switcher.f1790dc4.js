const t={body:document.body,btnStart:document.getElementById("data-start"),btnStop:document.getElementById("data-stop")};let n=null;t.btnStart.addEventListener("click",(function(){n=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.btnStart.disabled=!0})),t.btnStop.addEventListener("click",(function(){clearInterval(n),t.btnStart.disabled=!1}));
//# sourceMappingURL=01-color-switcher.f1790dc4.js.map
