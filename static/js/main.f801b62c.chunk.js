(this["webpackJsonplambda-bird-tech-task"]=this["webpackJsonplambda-bird-tech-task"]||[]).push([[0],[,,,,function(t){t.exports=JSON.parse('[{"name":"Eder Simon","country":"AUT","hits":392,"shots":420,"fireRate":23.5},{"name":"Schempp Simon","country":"GER","hits":28,"shots":30,"fireRate":26.5},{"name":"Tyshchenkp Artem","country":"UKR","hits":121,"shots":130,"fireRate":26.5},{"name":"Labastau Mikita","country":"BLR","hits":102,"shots":110,"fireRate":26.4},{"name":"Laegreid Sturla Holm","country":"NOR","hits":397,"shots":420,"fireRate":29.5},{"name":"Komatz David","country":"AUT","hits":308,"shots":340,"fireRate":30},{"name":"Fak Jakov","country":"SLO","hits":381,"shots":420,"fireRate":33},{"name":"Bakken Sivert","country":"NOR","hits":27,"shots":30,"fireRate":27.5},{"name":"Stegmayer Gabriel","country":"SWE","hits":45,"shots":50,"fireRate":29.2},{"name":"Eliseev Matvey","country":"RUS","hits":45,"shots":50,"fireRate":33},{"name":"Dovzan Miha","country":"SLO","hits":265,"shots":300,"fireRate":27.5},{"name":"Zemlicka Milan","country":"CZE","hits":392,"shots":420,"fireRate":27.5},{"name":"Flore Raul Antonio","country":"ROU","hits":71,"shots":80,"fireRate":27.5},{"name":"Buta George","country":"ROU","hits":96,"shots":110,"fireRate":27.5},{"name":"Kireyev Vladislav","country":"KAZ","hits":61,"shots":70,"fireRate":25.5},{"name":"Khalili Said","country":"RUS","hits":122,"shots":140,"fireRate":26},{"name":"Cisar Alex","country":"SLO","hits":70,"shots":80,"fireRate":28.5},{"name":"Okhotnykov Alexandr","country":"UKR","hits":1,"shots":30,"fireRate":50},{"name":"Gow Christian","country":"SWE","hits":366,"shots":420,"fireRate":32.5},{"name":"Zahkna Rene","country":"EST","hits":157,"shots":180,"fireRate":33.5},{"name":"Bjontegaard Erlend","country":"NOR","hits":123,"shots":140,"fireRate":25.6},{"name":"Pashchenkp Petr","country":"RUS","hits":34,"shots":40,"fireRate":29.5},{"name":"Jacquelin Emilienimon","country":"FRA","hits":367,"shots":420,"fireRate":33.5},{"name":"Rees Romar","country":"GER","hits":228,"shots":260,"fireRate":29.9},{"name":"Peifeer Rnd","country":"GER","hits":299,"shots":340,"fireRate":30.5},{"name":"Lesser Erik","country":"GER","hits":313,"shots":360,"fireRate":35.5}]')},,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s=a(2),r=a.n(s),n=a(7),i=a.n(n),c=(a(13),a(1)),o=a(8),h=a(5),l=(a(14),a(15),a(0));function u(t){return Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"table-info table-striped",children:[Object(l.jsx)("th",{title:"#",scope:"col",onClick:t.sortHandler,children:"#"}),Object(l.jsx)("th",{title:"name",scope:"col",onClick:t.sortHandler,children:" Name"}),Object(l.jsx)("th",{title:"Nat",scope:"col",children:"Nat"}),Object(l.jsx)("th",{title:"hitsPercent",scope:"col",onClick:t.sortHandler,children:"Hit%"}),Object(l.jsx)("th",{title:"Hits/Shots",scope:"col",children:"Hits/Shots"}),Object(l.jsx)("th",{title:"fireRate",scope:"col",onClick:t.sortHandler,children:"Fire Rate"})]})}),Object(l.jsx)("tbody",{children:t.statisticData.map((function(t){return Object(l.jsxs)("tr",{className:"table-info",children:[Object(l.jsx)("th",{scope:"row",children:t.place}),Object(l.jsx)("td",{children:t.name}),Object(l.jsx)("td",{children:t.country}),Object(l.jsx)("td",{children:t.hitsPercent}),Object(l.jsx)("td",{children:t.hits+"/"+t.shots}),Object(l.jsx)("td",{children:t.fireRate})]},t.place)}))})]})})}a(17);function j(t){return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{action:"",className:"search-bar",children:[Object(l.jsx)("input",{type:"search",name:"search",pattern:".*\\S.*",required:!0,onChange:t.searchHandle}),Object(l.jsx)("button",{className:"search-btn",type:"submit",onClick:t.searchSubmit,children:Object(l.jsx)("span",{children:"Search"})})]})})}var f=a(4);var b=function(){var t=Object(s.useState)(y()),e=Object(h.a)(t,2),a=e[0],r=e[1],n=Object(s.useState)(""),i=Object(h.a)(n,2),b=i[0],d=i[1],m=Object(s.useState)({name:!1,place:!1,hits:!1,fireRate:!1}),R=Object(h.a)(m,2),O=R[0],p=R[1];function y(){var t,e=[],a=Object(o.a)(f);try{for(a.s();!(t=a.n()).done;){var s=t.value;s.rating=100*s.hits/s.shots/s.fireRate,s.hitsPercent=(100*s.hits/s.shots).toFixed(1)}}catch(n){a.e(n)}finally{a.f()}e=f.sort((function(t,e){return e.rating-t.rating}));for(var r=0;r<e.length;r++)e[r].place=r+1;return e}function x(t,e,a){var s=a?function(e){return a(e[t])}:function(e){return e[t]};return e=e?-1:1,function(t,a){return t=s(t),a=s(a),e*((t>a)-(a>t))}}return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(j,{searchHandle:function(t){d(t.target.value)},searchSubmit:function(t){var e;t.preventDefault(),e=f.filter((function(t){return t.name.toLowerCase().includes(b)})),r(e),""===b&&r(y())}}),Object(l.jsx)(u,{statisticData:a,sortHandler:function(t){var e=[];"name"===t.target.title&&(e=a.slice(0).sort(x("name",O.name,(function(t){return t.toUpperCase()}))),p(Object(c.a)(Object(c.a)({},O),{},{name:!O.name}))),"hitsPercent"===t.target.title&&(e=a.slice(0).sort(x("hitsPercent",O.hits,parseInt)),p(Object(c.a)(Object(c.a)({},O),{},{hits:!O.hits}))),"fireRate"===t.target.title&&(e=a.slice(0).sort(x("fireRate",O.fireRate,parseInt)),p(Object(c.a)(Object(c.a)({},O),{},{fireRate:!O.fireRate}))),"fireRate"===t.target.title&&(e=a.slice(0).sort(x("fireRate",O.fireRate,parseInt)),p(Object(c.a)(Object(c.a)({},O),{},{fireRate:!O.fireRate}))),"#"===t.target.title&&(e=a.slice(0).sort(x("place",O.place,parseInt)),p(Object(c.a)(Object(c.a)({},O),{},{place:!O.place}))),r(e)}})]})})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.f801b62c.chunk.js.map