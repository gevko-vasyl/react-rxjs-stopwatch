(this["webpackJsonpreact-rxjs-stopwatch"]=this["webpackJsonpreact-rxjs-stopwatch"]||[]).push([[0],{22:function(t,e,c){},24:function(t,e,c){},26:function(t,e,c){},27:function(t,e,c){"use strict";c.r(e);var n=c(4),s=c.n(n),i=c(17),r=c.n(i),o=c(15),j=c(32),a=c(31),b=c(30),u=(c(22),c(1));function l(t){var e=t.start,c=t.stop,n=t.reset,s=t.wait,i=t.status;return Object(u.jsxs)("div",{className:"ControllButtons__container",children:[0===i?Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:e,children:"Start"}),Object(u.jsx)("button",{disabled:!0,children:"Wait"}),Object(u.jsx)("button",{disabled:!0,children:"Reset"})]}):"",1===i?Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:c,children:"Stop"}),Object(u.jsx)("button",{onClick:function(t){var e;clearTimeout(e),e=setTimeout(s,299,t.detail)},children:"Wait"}),Object(u.jsx)("button",{onClick:n,children:"Reset"})]}):"",2===i?Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:e,children:"Start"}),Object(u.jsx)("button",{disabled:!0,children:"Wait"}),Object(u.jsx)("button",{disabled:!0,children:"Reset"})]}):"",3===i?Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:e,children:"Continue"}),Object(u.jsx)("button",{disabled:!0,children:"Wait"}),Object(u.jsx)("button",{onClick:n,children:"Reset"})]}):""]})}c(24);function d(t){var e=t.time;return Object(u.jsx)("div",{className:"Timer__container",children:Object(u.jsx)("span",{className:"Timer__text",children:new Date(1e3*e).toISOString().substr(11,8)})})}function O(){var t=Object(n.useState)(0),e=Object(o.a)(t,2),c=e[0],s=e[1],i=Object(n.useState)(!1),r=Object(o.a)(i,2),O=r[0],x=r[1],h=Object(n.useState)(0),f=Object(o.a)(h,2),p=f[0],m=f[1];Object(n.useEffect)((function(){var t=new j.a;return Object(a.a)(1e3).pipe(Object(b.a)(t)).subscribe((function(){O&&s((function(t){return t+1}))})),function(){t.next(),t.complete()}}),[O]);return Object(u.jsxs)("div",{className:"Stopwatch",children:[Object(u.jsx)(d,{time:c}),Object(u.jsx)(l,{start:function(){x(!0),m(1)},stop:function(){x(!1),s(0),m(2)},reset:function(){s(0),x(!0),m(1)},wait:function(t){console.log(t),2===t&&(x(!1),m(3))},status:p})]})}c(25),c(26);r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.6a705bd9.chunk.js.map