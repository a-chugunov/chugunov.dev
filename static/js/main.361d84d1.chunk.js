(this["webpackJsonpa-chugunov.github.io"]=this["webpackJsonpa-chugunov.github.io"]||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(17),a=c.n(i),r=(c(50),c(18)),j=c(82),l=c(41),o=c(83),d=(c(51),c(78)),b=c(85),h=c(79),u=c(80),x=c(84),O=c(81),m=c(76),v=c(2),f=Object(m.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(1),marginLeft:e.spacing(1)},title:{alignItems:"center"},myToolbar:{justifyContent:"space-between"}}})),p=function(){var e=f(),t=Object(d.a)({disableHysteresis:!0,threshold:0});return Object(v.jsxs)("div",{className:e.root,children:[Object(v.jsx)(b.a,{elevation:t?4:0,children:Object(v.jsxs)(h.a,{className:e.myToolbar,children:[Object(v.jsx)(u.a,{variant:"h6",color:"inherit",className:e.title,children:"chugunov.dev"}),Object(v.jsxs)("div",{children:[Object(v.jsx)(x.a,{className:e.menuButton,color:"inherit",component:r.b,to:"/",children:"Home"}),Object(v.jsx)(x.a,{className:e.menuButton,color:"inherit",component:r.b,to:"/cv",children:"CV"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)(x.a,{color:"inherit",target:"_blank",href:"https://github.com/a-chugunov/",children:Object(v.jsx)(O.a,{className:"fab fa-github"})}),Object(v.jsx)(x.a,{color:"inherit",target:"_blank",href:"https://www.linkedin.com/in/alexeychugunov/",children:Object(v.jsx)(O.a,{className:"fab fa-linkedin-in"})})]})]})}),Object(v.jsx)(h.a,{className:e.myToolbar})]})},g=c(5),N=c(42),y=c(40),k=function(e){var t=e.name,c=e.contacts,n=(c=void 0===c?{}:c).phone,s=c.email;return Object(v.jsxs)("div",{id:"contact-info",className:"vcard",children:[Object(v.jsx)("h1",{className:"fn",children:t}),Object(v.jsxs)("p",{children:["Cell: ",Object(v.jsx)("span",{className:"tel",children:n}),Object(v.jsx)("br",{}),"Email:"," ",Object(v.jsx)("a",{className:"email",href:"mailto:".concat(s),children:s})]})]})},w=function(e){var t=e.summary;return Object(v.jsx)("div",{id:"objective",children:Object(v.jsx)("p",{children:t})})},C=function(e){var t=e.work,c=(void 0===t?[]:t).map((function(e){var t=e.company,c=e.years,n=e.location,s=e.position,i=e.summary,a=e.highlights;return Object(v.jsxs)("dd",{children:[Object(v.jsxs)("h2",{children:[t,Object(v.jsx)("span",{children:c})]}),Object(v.jsxs)("h2",{children:[s,Object(v.jsx)("span",{children:n})]}),Object(v.jsxs)("p",{children:[i,Object(v.jsx)("br",{}),Object(v.jsx)("ul",{children:a.map((function(e){return Object(v.jsx)("li",{children:e},e)}))})]})]},t)}));return Object(v.jsxs)("div",{children:[Object(v.jsx)("dt",{children:"Experience"}),c]})},T=function(e){var t=e.education,c=(void 0===t?[]:t).map((function(e){var t=e.institution,c=e.degree,n=e.years,s=e.highlights;return Object(v.jsxs)("dd",{children:[Object(v.jsxs)("h2",{children:[t," - ",n]}),Object(v.jsxs)("p",{children:[c,Object(v.jsx)("br",{}),s]})]},t)}));return Object(v.jsxs)("div",{children:[Object(v.jsx)("dt",{children:"Education"}),c]})},B=function(e){var t=e.skills,c=(void 0===t?[]:t).map((function(e){var t=e.category,c=e.skill;return Object(v.jsxs)("dd",{children:[Object(v.jsx)("h2",{children:t}),Object(v.jsx)("p",{children:Object(v.jsx)("ul",{children:c.map((function(e){return Object(v.jsx)("li",{children:e},e)}))})})]},t)}));return Object(v.jsxs)("div",{children:[Object(v.jsx)("dt",{children:"Skills"}),c]})},E=(c(58),function(){var e=Object(n.useState)({}),t=Object(N.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("/data/CV.yaml").then((function(e){return e.text()})).then((function(e){var t=y.a.loadAll(e);s(t[0])}))}),[]),Object(v.jsx)("div",{children:Object(v.jsxs)("div",{id:"page-wrap",children:[Object(v.jsx)("div",{className:"clear"}),Object(v.jsx)(k,{name:c.name,contacts:c.contacts}),Object(v.jsx)("div",{className:"clear"}),Object(v.jsx)(w,{summary:c.summary}),Object(v.jsx)("div",{className:"clear"}),Object(v.jsxs)("dl",{children:[Object(v.jsx)(C,{work:c.work}),Object(v.jsx)("div",{className:"clear"}),Object(v.jsx)(T,{education:c.education}),Object(v.jsx)("div",{className:"clear"}),Object(v.jsx)(B,{skills:c.skills}),Object(v.jsx)("div",{className:"clear"})]})]})})}),F=function(){return Object(v.jsx)(E,{})},S=function(){return Object(v.jsx)("div",{children:Object(v.jsx)("div",{children:" NoPageFound "})})};function I(){return Object(v.jsxs)(g.c,{children:[Object(v.jsx)(g.a,{exact:!0,path:"/",component:F}),Object(v.jsx)(g.a,{path:"/cv",component:E}),Object(v.jsx)(g.a,{component:S})]})}var L=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(p,{}),Object(v.jsx)(I,{})]})},P=Object(l.a)({palette:{primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}});var A=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(j.a,{}),Object(v.jsx)(o.a,{theme:P,children:Object(v.jsx)(r.a,{children:Object(v.jsx)(L,{})})})]})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,86)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(A,{})}),document.getElementById("root")),H()}},[[59,1,2]]]);
//# sourceMappingURL=main.361d84d1.chunk.js.map