(this["webpackJsonpcompound-calculator"]=this["webpackJsonpcompound-calculator"]||[]).push([[0],{12:function(e,a,t){e.exports=t(21)},17:function(e,a,t){},18:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),c=t.n(r),o=(t(17),t(18),t(3)),u=t(1),i=t(4),m=function(){return l.a.createElement("div",{className:"calculator-header"},l.a.createElement("h1",{className:"calculator-header__title"},"\ubcf5\ub9ac\uacc4\uc0b0\uae30"),l.a.createElement("p",{className:"calculator-header__description"}))};function s(){var e=Object(o.a)(["\n        display: flex;\n        flex-direction: column;\n        text-align: left;\n        padding-bottom: 16px;\n    "]);return s=function(){return e},e}function p(){var e=Object(o.a)(["\n        display: flex;\n        flex-direction: column;\n        margin: 0 auto;\n        padding: 12px;\n        max-width: 400px;\n        text-align: center;\n    "]);return p=function(){return e},e}var d=function(){var e=Object(n.useState)(1e6),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(1.2),o=Object(u.a)(c,2),d=o[0],E=o[1],v=Object(n.useState)(12),f=Object(u.a)(v,2),b=f[0],h=f[1],g=Object(n.useState)(2),w=Object(u.a)(g,2),_=w[0],N=w[1],x=i.a.div(p()),O=i.a.div(s());function j(){var e=12/b;return t*Math.pow(1+d/100/e,_*e)}function y(e){return Math.round(100*(e+Number.EPSILON))/100}return l.a.createElement(x,null,l.a.createElement(m,null),l.a.createElement(O,null,l.a.createElement("label",{className:"calculator-row__label",htmlFor:"principal"},"\ud22c\uc790 \uc6d0\uae08"),l.a.createElement("input",{className:"calculator-row__input",name:"principal",type:"number",value:t,onChange:function(e){return r(e.target.value)}})),l.a.createElement(O,null,l.a.createElement("label",{className:"calculator-row__label",htmlFor:"annualInterestRate"},"\uc5f0 \uc774\uc790\uc728(%)"),l.a.createElement("input",{className:"calculator-row__input",name:"annualInterestRate",type:"number",value:d,onChange:function(e){return E(e.target.value)}})),l.a.createElement(O,null,l.a.createElement("label",{className:"calculator-row__label",htmlFor:"frequency"},"\ubcf5\ub9ac\uacc4\uc0b0\ube48\ub3c4"),l.a.createElement("select",{className:"calculator-row__input",name:"frequency",value:b,onChange:function(e){return h(e.target.value)}},l.a.createElement("option",{value:"12"},"\uc5f0 \ubcf5\ub9ac"),l.a.createElement("option",{value:"6"},"6\uac1c\uc6d4 \ubc18\uae30\ubcf5\ub9ac"),l.a.createElement("option",{value:"3"},"3\uac1c\uc6d4 \ubd84\uae30\ubcf5\ub9ac"),l.a.createElement("option",{value:"1"},"\uc6d4 \ubcf5\ub9ac"))),l.a.createElement(O,null,l.a.createElement("label",{className:"calculator-row__label",htmlFor:"period"},"\uae30\uac04(\ub144)"),l.a.createElement("input",{className:"calculator-row__input",name:"period",type:"number",value:_,onChange:function(e){return N(e.target.value)}})),l.a.createElement(O,null,l.a.createElement("div",{className:"calculator-result-row"},"\ub9cc\uae30\uc9c0\uae09\uae08\uc561 : ",l.a.createElement("strong",null,y(j()).toLocaleString())," \uc6d0"),l.a.createElement("div",{className:"calculator-result-row"},"\uc6d0\uae08 : ",t.toLocaleString()," \uc6d0"),l.a.createElement("div",{className:"calculator-result-row"},"\uc774\uc790 : ",y(j()-t).toLocaleString()," \uc6d0")))},E=function(){return l.a.createElement(d,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.a1ec0c58.chunk.js.map