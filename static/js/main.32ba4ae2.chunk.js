(this["webpackJsonpunify-front"]=this["webpackJsonpunify-front"]||[]).push([[0],{68:function(e,t,r){},96:function(e,t,r){"use strict";r.r(t);var s=r(0),a=r.n(s),n=r(22),c=r.n(n),i=(r(68),r(59)),l=r(5),o=r(62),d=r(103),u=r(102),j=r(101),h=r(104),p=(r(61),{engineName:"unify",endpointBase:"https://enterprise-search-deployment-2e3053.ent.westeurope.azure.elastic-cloud.com",searchKey:"search-3xbbfde3hja59kpqsvjp6eh4",resultFields:["url","title","labels","id","date","image","description","rss_categories","source_logo","source_name","source_description","source_website","source_categories","source_regions"],sortFields:[],facets:[]});function b(){return p.engineName?p:"undefined"!==typeof window&&window.appConfig&&window.appConfig.engineName?window.appConfig:{}}var f=r(1);function m(e){return Object(f.jsxs)("div",{className:"article",children:[Object(f.jsxs)("div",{className:"article-image-wrapper",children:[Object(f.jsx)("a",{href:e.article.url.raw,target:"_blank",rel:"noreferrer",children:Object(f.jsx)("img",{src:e.article.image.raw,alt:""})}),Object(f.jsxs)("a",{className:"article-source-wrapper",href:e.article.source_website.raw,target:"_blank",rel:"noreferrer",children:[Object(f.jsx)("img",{src:e.article.source_logo.raw,alt:"logo publication"}),Object(f.jsx)("span",{className:"text-over-image",children:e.article.source_name.raw})]})]}),Object(f.jsx)("a",{href:e.article.url.raw,target:"_blank",rel:"noreferrer",children:Object(f.jsxs)("h3",{className:"title",children:[e.article.title.raw," ",Object(f.jsx)("span",{className:"material-icons material-icons-s",children:"open_in_new"})]})}),Object(f.jsx)("span",{className:"text-small grey",children:e.article.date.raw}),Object(f.jsx)("p",{className:"text",children:e.article.description.raw})]})}var g=b(),O=g.hostIdentifier,v=g.searchKey,x=g.endpointBase,w=g.engineName,y=new d.a({searchKey:v,engineName:w,hostIdentifier:O,endpointBase:x}),N={searchQuery:Object(o.a)({facets:(b().facets||[]).reduce((function(e,t){return(e=e||{})[t]={type:"value",size:100},e}),void 0)},function(){var e=b(),t=(e.searchFields||e.fields||[]).reduce((function(e,t){return(e=e||{})[t]={},e}),void 0),r=(e.resultFields||e.fields||[]).reduce((function(e,t){return(e=e||{})[t]={raw:{},snippet:{size:100,fallback:!0}},e}),void 0);e.urlField&&(r[e.urlField]={raw:{},snippet:{size:100,fallback:!0}}),e.titleField&&(r[e.titleField]={raw:{},snippet:{size:100,fallback:!0}});var s={};return s.result_fields=r,s.search_fields=t,s}()),autocompleteQuery:function(){var e=b().querySuggestFields;return e&&Array.isArray(e)&&0!==e.length?{suggestions:{types:{documents:{fields:b().querySuggestFields}}}}:{}}(),apiConnector:y,alwaysSearchOnInitialLoad:!1};function _(){return Object(f.jsx)(u.a,{config:N,children:Object(f.jsx)(j.a,{mapContextToProps:function(e){return{searchTerm:e.searchTerm,setSearchTerm:e.setSearchTerm,results:e.results,autocompletedResults:e.autocompletedResults}},children:function(e){var t=e.searchTerm,r=e.setSearchTerm,s=e.results,a=e.autocompletedResults;return Object(f.jsx)("div",{className:"grid",children:Object(f.jsxs)(h.a,{children:[Object(f.jsxs)("div",{className:"searchbar-wrapper body-padding grid",children:[Object(f.jsx)("p",{className:"text-small",children:"Lees over een specifiek onderwerp"}),Object(f.jsxs)("div",{className:"searchbar",children:[Object(f.jsx)("span",{class:"material-icons material-icons-m",children:"search"}),Object(f.jsx)("input",{value:t,onChange:function(e){return r(e.target.value)}})]})]}),s.length>0&&Object(f.jsx)("div",{className:"search-result-wrapper grid",children:s.map((function(e){var t;return Object(f.jsx)(m,{article:e},null===e||void 0===e||null===(t=e.id)||void 0===t?void 0:t.raw)}))}),a.map((function(e){return Object(f.jsx)("div",{children:e},e)}))]})})}})})}var k=r(39);r(17),r(28);function F(){var e=Object(s.useState)([]),t=Object(k.a)(e,2),r=t[0],a=t[1],n=Object(s.useState)([]),c=Object(k.a)(n,2),i=c[0],l=c[1],o=Date.now()-864e5;if(0===i.length&&fetch("".concat("https://enterprise-search-deployment-2e3053.ent.westeurope.azure.elastic-cloud.com","/api/as/v1/engines/unify/search"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat("search-3xbbfde3hja59kpqsvjp6eh4")},body:JSON.stringify({query:"",filters:{date:{from:new Date(o)}},facets:{labels:[{type:"value",name:"most_used_labels",sort:{count:"desc"},size:32}]}})}).then((function(e){return e.json()})).then((function(e){return l(e.facets.labels[0].data)})),i.length>0&&0===r.length){console.log("hey");var d=i.map((function(e){return{type:"value",value:e.value,factor:e.count}}));fetch("".concat("https://enterprise-search-deployment-2e3053.ent.westeurope.azure.elastic-cloud.com","/api/as/v1/engines/unify/search"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat("search-3xbbfde3hja59kpqsvjp6eh4")},body:JSON.stringify({query:"",filters:{date:{from:new Date(o)}},boosts:{labels:d}})}).then((function(e){return e.json()})).then((function(e){return a(e.results.map((function(e){var t;return Object(f.jsx)(m,{article:e},null===e||void 0===e||null===(t=e.id)||void 0===t?void 0:t.raw)})))}))}return Object(f.jsxs)("div",{className:"feed grid",children:[Object(f.jsxs)("div",{className:"feed-title",children:[Object(f.jsx)("span",{className:"feed-title-tab"}),Object(f.jsx)("h2",{className:"page-title",children:"Krantenkoppen vandaag".toUpperCase()})]}),Object(f.jsx)("div",{className:" search-result-wrapper grid",children:r})]})}var S=function(){return Object(f.jsxs)("div",{className:"grid",children:[Object(f.jsx)(_,{}),Object(f.jsx)(F,{})]})};function T(){return Object(f.jsx)("footer",{className:"grid body-padding",children:Object(f.jsx)("p",{children:"Deze website is deel van het Final Work van Axelle Vanden Eynde, aan de Erasmus Hogeschool brussel"})})}var C=r.p+"static/media/logo.6e502709.svg";function z(){return Object(f.jsxs)("div",{className:"desktop-nav",children:[Object(f.jsx)("img",{src:C}),Object(f.jsx)("nav",{})]})}function B(){return Object(f.jsx)(z,{})}var q=function(){return Object(f.jsx)(i.a,{children:Object(f.jsxs)("div",{className:"grid body-padding",children:[Object(f.jsx)(B,{}),Object(f.jsx)(l.c,{children:Object(f.jsx)(l.a,{path:"/",children:Object(f.jsx)(S,{})})}),Object(f.jsx)(T,{})]})})},A=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,105)).then((function(t){var r=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;r(e),s(e),a(e),n(e),c(e)}))},D=r(29),I=Object(D.b)({name:"feed",initialState:{articles:[],loading:!1},reducers:{}}),P=I.actions,J=(P.increment,P.decrement,P.incrementByAmount,I.reducer),K=Object(D.a)({reducer:{feed:J}}),L=r(60);c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(L.a,{store:K,children:Object(f.jsx)(q,{})})}),document.getElementById("root")),A()}},[[96,1,2]]]);
//# sourceMappingURL=main.32ba4ae2.chunk.js.map