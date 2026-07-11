/* ===== Pylon IPO Terminal — runtime =====
   Theme toggle, mobile nav, and home-table filtering. Content is static HTML. */

function toggleTheme(){
  var el=document.documentElement;
  var next=el.getAttribute("data-theme")==="light"?"dark":"light";
  el.setAttribute("data-theme",next);
  try{localStorage.setItem("theme",next);}catch(e){}
  syncThemeIcon();
}
function syncThemeIcon(){
  var b=document.getElementById("themeBtn");
  if(!b)return;
  b.innerHTML=document.documentElement.getAttribute("data-theme")==="light"?"☾":"☀";
}
function toggleNav(){
  var n=document.querySelector(".nav-links");
  if(n)n.classList.toggle("open");
}

/* Home page: filter rows by segment (all/listed/pipeline/CN/US) and search text. */
function initHomeFilters(){
  var rows=Array.prototype.slice.call(document.querySelectorAll("#rows tr"));
  if(!rows.length)return;
  var state={f:"all",q:""};
  function apply(){
    var q=state.q.trim().toLowerCase();
    var shown=0;
    rows.forEach(function(r){
      var okF=state.f==="all"
        ||(state.f==="listed"&&r.getAttribute("data-listed")==="1")
        ||(state.f==="pipeline"&&r.getAttribute("data-listed")==="0")
        ||(state.f==="CN"&&r.getAttribute("data-mkt")==="CN")
        ||(state.f==="US"&&r.getAttribute("data-mkt")==="US");
      var okQ=!q||r.getAttribute("data-search").indexOf(q)>-1;
      var vis=okF&&okQ;
      r.style.display=vis?"":"none";
      if(vis)shown++;
    });
    var e=document.getElementById("empty");
    if(e)e.style.display=shown?"none":"";
    var c=document.getElementById("shownCount");
    if(c)c.textContent=shown;
  }
  Array.prototype.forEach.call(document.querySelectorAll(".filter-pill"),function(b){
    b.addEventListener("click",function(){
      state.f=b.getAttribute("data-f");
      Array.prototype.forEach.call(document.querySelectorAll(".filter-pill"),function(x){
        x.classList.toggle("active",x===b);});
      apply();
    });
  });
  var s=document.getElementById("search");
  if(s)s.addEventListener("input",function(){state.q=s.value;apply();});
  apply();
}

(function(){
  syncThemeIcon();
  initHomeFilters();
})();
