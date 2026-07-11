/* ===== Pylon IPO Terminal — Robotics edition · shared logic ===== */

var SUB_COLOR = {
  humanoid:"#7c3aed", embodied:"#c026d3", auto:"#2471a3", warehouse:"#0f766e",
  service:"#b45309", lidar:"#0369a1", defense:"#9f1239", industrial:"#4d7c0f",
  surgical:"#be123c", components:"#78716c", consumer:"#0891b2"
};
var POS="#1a7a3a", NEG="#c0392b", INK="#111", MUTE="#999", FAINT="#ddd";

/* ---------- helpers ---------- */
function esc(s){return (s==null?"":(""+s)).replace(/&(?!amp;|lt;|gt;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
function isListed(c){return c.status==="listed";}
function subTag(sub){return '<span class="tag '+sub+'">'+esc(SUB_LABEL[sub]||sub)+'</span>';}
function mktTag(mkt){return '<span class="mkt '+mkt.toLowerCase()+'">'+(mkt==="CN"?"China":"US")+'</span>';}
function perf(c){if(c.ipoNum==null||c.curNum==null)return null;return (c.curNum-c.ipoNum)/c.ipoNum*100;}
function fmtPct(p){
  if(p==null)return '<span class="dash">—</span>';
  var s=(p>=0?"+":"")+p.toFixed(1)+"%";
  return '<span class="chg '+(p>=0?"up":"down")+'">'+s+'</span>';
}
function dealCell(c){return (!c.deal||c.deal==="n/d")?'<span class="dash">n/d</span>':esc(c.deal);}
function capCell(c){return (!c.mcap||c.mcap==="n/d"||c.mcap.indexOf("n/d")===0)?'<span class="dash">n/d</span>':esc(c.mcap);}
function byDateDesc(a,b){return a.listDate<b.listDate?1:a.listDate>b.listDate?-1:0;}
function byDateAsc(a,b){return a.listDate<b.listDate?-1:a.listDate>b.listDate?1:0;}
function statHtml(l,v,s){return '<div class="ps-stat"><div class="ps-label">'+l+'</div><div class="ps-val">'+v+'</div><div class="ps-sub">'+s+'</div></div>';}
function money(bn){ // US$ billions -> friendly
  if(bn==null)return "n/d";
  if(bn>=1)return "$"+(bn>=100?bn.toFixed(0):bn.toFixed(1))+"bn";
  return "$"+Math.round(bn*1000)+"m";
}
function moneyM(m){
  if(m==null)return "n/d";
  if(Math.abs(m)>=1000)return (m<0?"-$":"$")+(Math.abs(m)/1000).toFixed(Math.abs(m)>=10000?0:2)+"bn";
  return (m<0?"-$":"$")+Math.abs(m).toFixed(Math.abs(m)<10?1:0)+"m";
}

/* ---------- status legend ---------- */
var STATUS_ORDER=[["reported","Reported / rumored"],["filed","Filed"],["approved","IPO approved"],["private","Private · IPO watch"],["listed","Listed"]];
function renderLegend(){
  var el=document.getElementById("legend");
  if(!el)return;
  el.innerHTML='<span class="lg-sub">Status</span>'+STATUS_ORDER.map(function(s){
    return '<span class="lg"><span class="status '+s[0]+'">'+s[1]+'</span></span>';
  }).join("");
}

/* ---------- shared chrome ---------- */
function renderNav(page){
  var links=[["index.html","Dashboard"],["china.html","China"],["us.html","United States"],["performance.html","Price Performance"]];
  var el=document.getElementById("nav");
  if(el) el.innerHTML=links.map(function(l){
    return '<a href="'+l[0]+'"'+(l[0]===page?' class="on"':'')+'>'+l[1]+'</a>';
  }).join("");
  var u=document.getElementById("updated");
  if(u) u.textContent="Compiled 11 Jul 2026 · exchange filings + press";
}
function initChrome(page){
  renderNav(page);
  renderLegend();
  var o=document.getElementById("overlay");
  if(o)o.addEventListener("click",closePanel);
  document.addEventListener("keydown",function(e){if(e.key==="Escape")closePanel();});
}

/* ---------- table builder ----------
   cols: company, mkt, sub, status, listing, cap, perf, source */
function buildTable(rows, cols){
  var heads={company:["Company","l"],mkt:["Market","l"],sub:["Subsector","l"],
    status:["Status","l"],listing:["Listing","l"],cap:["Cap / valuation",""],
    perf:["Since IPO",""],source:["",""]};
  var thead=cols.map(function(c){return '<th class="'+heads[c][1]+'">'+heads[c][0]+'</th>';}).join("");
  var body=rows.map(function(c){
    var tds=cols.map(function(col){
      if(col==="company")return '<td class="l"><span class="co-name">'+esc(c.co)+'</span>'+(c.cn?'<span class="co-cn">'+esc(c.cn)+'</span>':'')+'<br><span class="co-tick">'+esc(c.ticker)+'</span></td>';
      if(col==="mkt")return '<td class="l">'+mktTag(c.mkt)+'</td>';
      if(col==="sub")return '<td class="l">'+subTag(c.sub)+'</td>';
      if(col==="status")return '<td class="l"><span class="status '+c.status+'">'+esc(c.statusTxt)+'</span></td>';
      if(col==="listing")return '<td class="l">'+esc(c.listing)+'</td>';
      if(col==="cap")return '<td>'+capCell(c)+'</td>';
      if(col==="perf")return '<td>'+fmtPct(perf(c))+'</td>';
      if(col==="source")return '<td class="l"><span class="arrow">›</span></td>';
      return '<td></td>';
    }).join("");
    return '<tr data-id="'+c.id+'">'+tds+'</tr>';
  }).join("");
  return '<div class="tbl-wrap"><table class="ipo-tbl"><thead><tr>'+thead+'</tr></thead><tbody>'+body+'</tbody></table></div>';
}
function wireRows(container){
  Array.prototype.forEach.call(container.querySelectorAll("tbody tr"),function(tr){
    tr.addEventListener("click",function(){openPanel(tr.getAttribute("data-id"));});
  });
}

/* ---------- slide-out summary panel ---------- */
function openPanel(id){
  var c=companyById(id); if(!c)return;
  var p=perf(c);
  var head='<button class="panel-close" onclick="closePanel()">✕</button>'+
    '<div class="panel-co">'+esc(c.co)+(c.cn?' <span class="co-cn">'+esc(c.cn)+'</span>':'')+'</div>'+
    '<div class="panel-meta">'+mktTag(c.mkt)+subTag(c.sub)+
      '<span class="co-tick">'+esc(c.ticker)+'</span>'+
      '<span class="status '+c.status+'">'+esc(c.statusTxt)+'</span></div>';
  var body=
    '<div class="ov-text" style="margin:14px 0 4px;font-size:14px">'+esc(c.oneLiner)+'</div>'+
    '<a class="panel-cta" href="company.html?id='+c.id+'">Open full deep dive →</a>'+
    '<div class="kv"><div class="k">Exchange</div><div class="v">'+esc(c.exchange)+'</div></div>'+
    '<div class="kv"><div class="k">Listing</div><div class="v">'+esc(c.listing)+'</div></div>'+
    '<div class="kv"><div class="k">Deal size</div><div class="v">'+dealCell(c)+'</div></div>'+
    '<div class="kv"><div class="k">Cap / val.</div><div class="v">'+capCell(c)+(c.mcapAsOf?' <span class="px-asof">as of '+esc(c.mcapAsOf)+'</span>':'')+'</div></div>'+
    (isListed(c)&&c.ipoNum!=null?
      '<div class="kv"><div class="k">IPO price</div><div class="v">'+esc(c.ipoPx)+'</div></div>'+
      '<div class="kv"><div class="k">Current</div><div class="v">'+esc(c.curPx)+' &nbsp;'+fmtPct(p)+(c.pxAsOf?' <span class="px-asof">'+esc(c.pxAsOf)+'</span>':'')+'</div></div>'
    :'')+
    '<div class="ov-block"><div class="ov-label">Thesis</div><div class="ov-text">'+esc(c.thesis)+'</div></div>'+
    '<div class="ov-block"><div class="ov-label">Financials</div><div class="ov-text">'+esc(c.financials)+'</div></div>'+
    '<a class="panel-cta" href="company.html?id='+c.id+'" style="background:#fff;color:#111;border:1px solid #ddd">See financial analysis & sources →</a>';
  var el=document.getElementById("panel");
  el.innerHTML='<div class="panel-head">'+head+'</div><div class="panel-body">'+body+'</div>';
  el.classList.add("open");
  document.getElementById("overlay").classList.add("open");
}
function closePanel(){
  var p=document.getElementById("panel"); if(p)p.classList.remove("open");
  var o=document.getElementById("overlay"); if(o)o.classList.remove("open");
}

/* =========================================================
   FINANCIAL-ANALYSIS VISUALISATIONS (self-contained SVG)
   ========================================================= */

/* 1 — Price performance: IPO price -> current price, area + endpoints */
function svgPerf(c){
  if(!isListed(c)||c.ipoNum==null||c.curNum==null)return "";
  var p=perf(c), up=p>=0, col=up?POS:NEG;
  var W=440,H=150, padL=54,padR=64,padT=18,padB=30;
  var lo=Math.min(c.ipoNum,c.curNum), hi=Math.max(c.ipoNum,c.curNum);
  var span=hi-lo||hi||1; var y0=lo-span*0.5, y1=hi+span*0.35; var yr=y1-y0||1;
  function X(i){return padL+i*(W-padL-padR);}
  function Y(v){return padT+(1-(v-y0)/yr)*(H-padT-padB);}
  var x0=X(0),x1=X(1),ya=Y(c.ipoNum),yb=Y(c.curNum),base=H-padB;
  var area='M'+x0+','+ya+' L'+x1+','+yb+' L'+x1+','+base+' L'+x0+','+base+' Z';
  var line='M'+x0+','+ya+' L'+x1+','+yb;
  var pct=(up?"+":"")+p.toFixed(1)+"%";
  var svg='<svg viewBox="0 0 '+W+' '+H+'" width="100%" preserveAspectRatio="xMidYMid meet" role="img">';
  svg+='<defs><linearGradient id="pg_'+c.id+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+col+'" stop-opacity="0.18"/><stop offset="1" stop-color="'+col+'" stop-opacity="0"/></linearGradient></defs>';
  svg+='<line x1="'+padL+'" y1="'+base+'" x2="'+(W-padR)+'" y2="'+base+'" stroke="#eee"/>';
  svg+='<path d="'+area+'" fill="url(#pg_'+c.id+')"/>';
  svg+='<path d="'+line+'" fill="none" stroke="'+col+'" stroke-width="2.5"/>';
  // endpoints
  svg+='<circle cx="'+x0+'" cy="'+ya+'" r="4" fill="#fff" stroke="'+INK+'" stroke-width="1.5"/>';
  svg+='<circle cx="'+x1+'" cy="'+yb+'" r="4.5" fill="'+col+'"/>';
  // labels
  svg+='<text x="'+x0+'" y="'+(base+18)+'" font-size="10" fill="#999" text-anchor="middle" font-family="Arial">IPO</text>';
  svg+='<text x="'+x1+'" y="'+(base+18)+'" font-size="10" fill="#999" text-anchor="middle" font-family="Arial">Now</text>';
  svg+='<text x="'+x0+'" y="'+(ya-9)+'" font-size="11" fill="#555" text-anchor="middle" font-family="Arial" font-weight="700">'+esc(c.ipoPx)+'</text>';
  svg+='<text x="'+x1+'" y="'+(yb-9)+'" font-size="11" fill="'+col+'" text-anchor="middle" font-family="Arial" font-weight="700">'+esc(c.curPx)+'</text>';
  svg+='<text x="'+((x0+x1)/2)+'" y="'+(padT+9)+'" font-size="15" fill="'+col+'" text-anchor="middle" font-family="Arial" font-weight="800">'+pct+'</text>';
  svg+='</svg>';
  return '<div class="cd-sec"><h2>Share price since IPO</h2>'+svg+
    '<p style="font-size:11px;color:#999;margin-top:8px">'+esc(c.ipoPx)+' at IPO ('+esc(c.listing)+') → '+esc(c.curPx)+(c.pxAsOf?' ('+esc(c.pxAsOf)+')':'')+'. Two-point return; not a continuous price series.</p></div>';
}

/* 2 — Valuation within subsector: horizontal bars vs peers */
function svgValuationPeers(c){
  var peers=COMPANIES.filter(function(x){return x.sub===c.sub && finOf(x.id).capUsd!=null;});
  peers.sort(function(a,b){return finOf(b.id).capUsd-finOf(a.id).capUsd;});
  if(peers.length<2)return "";
  if(peers.length>7)peers=peers.slice(0,7);
  if(peers.indexOf(c)<0 && finOf(c.id).capUsd!=null){peers[peers.length-1]=c;peers.sort(function(a,b){return finOf(b.id).capUsd-finOf(a.id).capUsd;});}
  var max=finOf(peers[0].id).capUsd;
  var rowH=30, top=8, W=440, labelW=150, barMax=W-labelW-58;
  var H=top*2+peers.length*rowH;
  var svg='<svg viewBox="0 0 '+W+' '+H+'" width="100%" preserveAspectRatio="xMidYMid meet" role="img" font-family="Arial">';
  peers.forEach(function(x,i){
    var v=finOf(x.id).capUsd, w=Math.max(2,v/max*barMax), y=top+i*rowH;
    var me=x.id===c.id, col=me?SUB_COLOR[c.sub]:"#d8d8d8";
    svg+='<text x="0" y="'+(y+16)+'" font-size="11" fill="'+(me?INK:"#777")+'" font-weight="'+(me?"700":"500")+'">'+esc(x.co.length>20?x.co.slice(0,19)+"…":x.co)+'</text>';
    svg+='<rect x="'+labelW+'" y="'+(y+4)+'" width="'+w+'" height="16" rx="2" fill="'+col+'"/>';
    svg+='<text x="'+(labelW+w+6)+'" y="'+(y+16)+'" font-size="11" fill="'+(me?INK:"#999")+'" font-weight="'+(me?"700":"600")+'">'+money(v)+'</text>';
  });
  svg+='</svg>';
  return '<div class="cd-sec"><h2>Valuation vs '+esc(SUB_LABEL[c.sub])+' peers</h2>'+svg+
    '<p style="font-size:11px;color:#999;margin-top:8px">Market cap (listed) or latest private valuation, US$bn, indicative. China &amp; US names shown together.</p></div>';
}

/* 3 — Revenue & profitability: zero-baseline bars */
function svgRevenue(c){
  var f=finOf(c.id);
  if(f.revUsd==null && f.niUsd==null)return "";
  var items=[];
  if(f.revUsd!=null)items.push({l:"Revenue",v:f.revUsd,pos:true});
  if(f.niUsd!=null)items.push({l:"Net income",v:f.niUsd,pos:f.niUsd>=0});
  var maxAbs=0;items.forEach(function(it){maxAbs=Math.max(maxAbs,Math.abs(it.v));});
  maxAbs=maxAbs||1;
  var W=440,H=170, padL=90,padR=70,padT=14,padB=14;
  var plot=W-padL-padR, hasNeg=items.some(function(it){return it.v<0;});
  var zeroX=hasNeg?padL+plot*0.34:padL; var posW=W-padR-zeroX; var negW=zeroX-padL;
  var rowH=(H-padT-padB)/items.length;
  var svg='<svg viewBox="0 0 '+W+' '+H+'" width="100%" preserveAspectRatio="xMidYMid meet" role="img" font-family="Arial">';
  svg+='<line x1="'+zeroX+'" y1="'+padT+'" x2="'+zeroX+'" y2="'+(H-padB)+'" stroke="#e6e6e6"/>';
  items.forEach(function(it,i){
    var y=padT+i*rowH+rowH*0.22, bh=rowH*0.56;
    var col=it.pos?(it.l==="Revenue"?"#2f6b4f":POS):NEG;
    var w=Math.abs(it.v)/maxAbs*(it.v>=0?posW:negW);
    var x=it.v>=0?zeroX:zeroX-w;
    svg+='<text x="'+(padL-10)+'" y="'+(y+bh/2+4)+'" font-size="11" fill="#555" text-anchor="end">'+it.l+'</text>';
    svg+='<rect x="'+x+'" y="'+y+'" width="'+Math.max(2,w)+'" height="'+bh+'" rx="2" fill="'+col+'"/>';
    var lx=it.v>=0?(x+w+6):(x-6), anc=it.v>=0?"start":"end";
    svg+='<text x="'+lx+'" y="'+(y+bh/2+4)+'" font-size="11.5" fill="'+col+'" text-anchor="'+anc+'" font-weight="700">'+moneyM(it.v)+'</text>';
  });
  svg+='</svg>';
  var note=f.niUsd==null&&f.revUsd!=null?"Net income n/d or GAAP figure distorted by non-cash items (see financials).":"Latest reported annual / run-rate figures, indicative US$.";
  return '<div class="cd-sec"><h2>Revenue &amp; profitability</h2>'+svg+
    '<p style="font-size:11px;color:#999;margin-top:8px">'+note+'</p></div>';
}

/* combine the three into a financial-analysis block */
function financialViz(c){
  var parts=svgPerf(c)+svgValuationPeers(c)+svgRevenue(c);
  if(!parts)parts='<div class="cd-sec"><p style="color:#999">Quantitative financials not disclosed for this private company; see funding history in the sidebar.</p></div>';
  return parts;
}

/* =========================================================
   COMPANY DEEP-DIVE PAGE
   ========================================================= */
function renderCompanyPage(){
  var id=(location.search.match(/[?&]id=([^&]+)/)||[])[1];
  id=id?decodeURIComponent(id):"";
  var c=companyById(id);
  var root=document.getElementById("company");
  if(!c){root.innerHTML='<div class="empty" style="margin-top:40px">Company not found. <a href="index.html">Back to the dashboard</a>.</div>';return;}
  document.title=c.co+" — Pylon IPO Terminal";
  var p=perf(c), f=finOf(c.id);

  // hero grid cells
  var cells=[
    ["Exchange", esc(c.exchange), esc(c.ticker)],
    ["Status", '<span class="status '+c.status+'" style="font-size:11px">'+esc(c.statusTxt)+'</span>', esc(c.listing)],
    ["Cap / valuation", capCell(c), c.mcapAsOf?"as of "+esc(c.mcapAsOf):"&nbsp;"],
    (isListed(c)&&p!=null
      ? ["Since IPO", '<span style="color:'+(p>=0?POS:NEG)+'">'+(p>=0?"+":"")+p.toFixed(1)+'%</span>', esc(c.ipoPx)+" → "+esc(c.curPx)]
      : ["Deal size", dealCell(c), esc(c.listing)])
  ];
  var grid='<div class="cd-grid">'+cells.map(function(cl){
    return '<div class="cd-cell"><div class="cd-cell-l">'+cl[0]+'</div><div class="cd-cell-v">'+cl[1]+'</div><div class="cd-cell-s">'+cl[2]+'</div></div>';
  }).join("")+'</div>';

  var hero='<div class="cd-hero">'+
    '<a class="cd-back" href="index.html">‹ Pylon IPO Terminal · Robotics</a>'+
    '<div class="cd-title">'+esc(c.co)+(c.cn?' <span class="cd-cn">'+esc(c.cn)+'</span>':'')+'</div>'+
    '<div class="cd-meta">'+mktTag(c.mkt)+subTag(c.sub)+'<span class="status '+c.status+'">'+esc(c.statusTxt)+'</span></div>'+
    '<div class="cd-oneliner">'+esc(c.oneLiner)+'</div>'+
    grid+'</div>';

  // main column
  var main='<div class="cd-main">'+
    sec("Investment thesis", '<p>'+esc(c.thesis)+'</p>')+
    '<div class="cd-sec"><h2>Financial analysis</h2></div>'+
    financialViz(c)+
    sec("The business", '<p>'+esc(c.business)+'</p>')+
    sec("Financials", '<p>'+esc(c.financials)+'</p>')+
    (c.risks&&c.risks.length?'<div class="cd-sec"><h2>Key risks</h2><ul class="cd-list risk">'+c.risks.map(function(r){return '<li>'+esc(r)+'</li>';}).join("")+'</ul></div>':'')+
    (c.catalysts&&c.catalysts.length?'<div class="cd-sec"><h2>Catalysts to watch</h2><ul class="cd-list cat">'+c.catalysts.map(function(r){return '<li>'+esc(r)+'</li>';}).join("")+'</ul></div>':'')+
  '</div>';

  // side column
  var kvs=[
    ["Market", c.mkt==="CN"?"China":"United States"],
    ["Subsector", SUB_LABEL[c.sub]],
    ["Exchange", c.exchange],
    ["Ticker", c.ticker],
    ["Listing", c.listing],
    ["Deal size", (c.deal&&c.deal!=="n/d")?c.deal:"n/d"],
    ["Cap / val.", (c.mcap&&c.mcap.indexOf("n/d")!==0)?c.mcap:"n/d"]
  ];
  if(isListed(c)&&c.ipoNum!=null){kvs.push(["IPO price",c.ipoPx]);kvs.push(["Current",c.curPx]);}
  var snapshot='<div class="cd-sec"><h2>Snapshot</h2>'+kvs.map(function(k){
    return '<div class="cd-kv"><span class="k">'+esc(k[0])+'</span><span class="v">'+esc(k[1])+'</span></div>';
  }).join("")+'</div>';

  var founder='<div class="cd-sec"><h2>Founder</h2><div class="cd-kv" style="border:none"><span class="v" style="text-align:left;font-weight:700">'+esc(c.founder)+'</span></div><p style="font-size:12px;color:#555;line-height:1.55;margin:2px 0 0">'+esc(c.founderBg)+'</p></div>';

  var peers='';
  if(c.peers&&c.peers.length){
    peers='<div class="cd-sec"><h2>Comparables</h2><div class="cd-peers">'+c.peers.map(function(nm){
      var pc=COMPANIES.filter(function(x){
        return x.co===nm || x.co.split(" (")[0]===nm || x.co.indexOf(nm)===0;
      })[0];
      return pc?'<a href="company.html?id='+pc.id+'">'+esc(nm)+' ›</a>':'<span class="flat">'+esc(nm)+'</span>';
    }).join("")+'</div></div>';
  }

  var sources='<div class="cd-sec"><h2>Sources</h2><div class="cd-src">'+c.sources.map(function(s){
    return '<a href="'+s[1]+'" target="_blank" rel="noopener">'+esc(s[0])+' ↗</a>';
  }).join("")+'</div></div>';

  var side='<div class="cd-side">'+snapshot+founder+peers+sources+'</div>';

  root.innerHTML=hero+'<div class="wrap" style="padding-top:0"><div class="cd-cols">'+main+side+'</div>'+
    '<div class="disclaimer">Compiled 11 Jul 2026 from exchange filings, company disclosures and press reporting. Prices, market caps and private valuations are indicative and carry the as-of dates noted; financial-analysis visualisations use approximate USD conversions for comparison only. Not investment advice.</div></div>';

  function sec(title,inner){return '<div class="cd-sec"><h2>'+esc(title)+'</h2>'+inner+'</div>';}
}
