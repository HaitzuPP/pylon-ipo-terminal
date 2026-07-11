/* ===== Pylon IPO Terminal · runtime =====
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

/* Home page: click a column header to sort the table. */
function initHomeSort(){
  var tbody=document.getElementById("rows");
  if(!tbody)return;
  var ths=Array.prototype.slice.call(document.querySelectorAll("th.sortable"));
  function sortBy(th){
    var key=th.getAttribute("data-key");
    var dir=th.getAttribute("data-dir")==="asc"?"desc":"asc";
    ths.forEach(function(h){
      h.removeAttribute("data-dir");
      var c=h.querySelector(".caret"); if(c)c.textContent="";
    });
    th.setAttribute("data-dir",dir);
    var caret=th.querySelector(".caret"); if(caret)caret.textContent=dir==="asc"?"▲":"▼";
    var attr=key==="status"?"listed":(key==="market"?"mkt":key);
    var numeric=key==="val"||key==="status";
    var rows=Array.prototype.slice.call(tbody.querySelectorAll("tr"));
    rows.sort(function(a,b){
      var av=a.getAttribute("data-"+attr),bv=b.getAttribute("data-"+attr),r;
      if(numeric){r=parseFloat(av)-parseFloat(bv);}
      else{r=av<bv?-1:(av>bv?1:0);}
      return dir==="asc"?r:-r;
    });
    rows.forEach(function(r){tbody.appendChild(r);});
  }
  ths.forEach(function(th){th.addEventListener("click",function(){sortBy(th);});});
  // Default: rows ship grouped listed-first, chronological within each group.
  var s=document.querySelector('th.sortable[data-key="status"]');
  if(s){s.setAttribute("data-dir","desc");var c=s.querySelector(".caret");if(c)c.textContent="▼";}
}

(function(){
  syncThemeIcon();
  initHomeFilters();
  initHomeSort();
})();
