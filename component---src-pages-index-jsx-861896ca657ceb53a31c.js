(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Dtc0:function(e,t,a){"use strict";a.r(t);var n=a("mwIZ"),l=a.n(n),r=a("q1tI"),i=a.n(r),m=a("eNIv"),c=a("6uTu"),s=a("STHm");var o=e=>{let{about:t}=e;return i.a.createElement(s.a,{title:"About Me"},i.a.createElement("div",{className:"mb-6"},t.split("\n").map((e,t,a)=>t+1===a.length?i.a.createElement("p",{key:t},e):i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,e),i.a.createElement("br",null)))))},d=a("Wbzz"),p=a("hbLQ");var u=e=>{let{posts:t}=e;return i.a.createElement(s.a,{title:"Latest Posts"},t.map(e=>i.a.createElement(p.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,img:e.img,internal:!0})),t.length>=5&&i.a.createElement(d.Link,{className:"text-gray-500 text-sm hover:text-black",to:"/blog"},"View all posts →"))};var E=e=>{let{experience:t}=e;return t.length?i.a.createElement(s.a,{title:"Experience"},t.map(e=>i.a.createElement(p.a,{key:e.name,name:e.name,description:e.description,link:e.link,img:e.img}))):null};var g=e=>{let{education:t}=e;return t.length?i.a.createElement(s.a,{title:"Education"},t.map(e=>i.a.createElement(p.a,{key:e.name,name:e.name,description:e.description,link:e.link,img:e.img}))):null};var k=e=>{let{projects:t}=e;return t.length?i.a.createElement(s.a,{title:"Projects"},t.map(e=>i.a.createElement(p.a,{key:e.name,name:e.name,description:e.description,link:e.link,img:e.img}))):null};var h=e=>{let{publications:t}=e;return t.length?i.a.createElement(s.a,{title:"Publications"},t.map(e=>i.a.createElement(p.a,{key:e.name,name:e.name,description:e.description,link:e.link,img:e.img}))):null};var b=e=>{let{skills:t}=e;return i.a.createElement(s.a,{title:"Skills"},t.map(e=>i.a.createElement(p.a,{key:e.name,name:e.name,description:e.description,img:e.img})))},f=a("ivnd");t.default=e=>{let{data:t}=e;const a=l()(t,"site.siteMetadata.about",!1),n=l()(t,"site.siteMetadata.projects",!1),r=l()(t,"site.siteMetadata.publications",!1),s=t.allMarkdownRemark.edges,d=l()(t,"site.siteMetadata.experience",!1),p=l()(t,"site.siteMetadata.education",!1),v=l()(t,"site.siteMetadata.skills",!1),x=!s||!s.length;return i.a.createElement(c.a,null,i.a.createElement(f.a,null),i.a.createElement(m.a,{metadata:t.site.siteMetadata,noBlog:x}),a&&i.a.createElement(o,{about:a}),d&&d.length&&i.a.createElement(E,{experience:d}),r&&r.length&&i.a.createElement(h,{publications:r}),p&&p.length&&i.a.createElement(g,{education:p}),n&&n.length&&i.a.createElement(k,{projects:n}),v&&v.length&&i.a.createElement(b,{skills:v}),!x&&i.a.createElement(u,{posts:s}))}},STHm:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n);const r="block pt-12 md:flex",i="pb-6 md:w-full md:max-w-150 md:p-0",m="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase",c="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20";t.a=e=>{let{title:t,children:a}=e;return l.a.createElement("div",{className:r},l.a.createElement("div",{className:i},l.a.createElement("h2",{className:m},t)),l.a.createElement("div",{className:c},a))}},hbLQ:function(e,t,a){"use strict";var n=a("Wbzz"),l=a("q1tI"),r=a.n(l);const i="flex flex-row",m="mb-6",c="font-semibold text-gray-900 pb-1",s="text-md text-gray-600 font-light",o="w-max items-center overflow-hidden",d="w-0 md:w-10 rounded-full md:my-1 md:mr-3 md:p-1 md:self-center ";t.a=e=>{let t,a,{name:l,description:p,link:u=!1,img:E=!1,internal:g=!1}=e;return t=g?r.a.createElement(n.Link,{to:u},l):r.a.createElement("a",{href:u},l),E&&(a=r.a.createElement("img",{src:E,alt:l,className:d})),r.a.createElement("div",{className:i},r.a.createElement("div",{className:o},a),r.a.createElement("div",{className:m},r.a.createElement("h3",{className:`${c} ${u?"hover:underline hover:text-black":""}`},u?t:l),p.split("\n").map((e,t,a)=>t+1===a.length?r.a.createElement("p",{className:s},e):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:s},e),r.a.createElement("br",null)))))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-861896ca657ceb53a31c.js.map