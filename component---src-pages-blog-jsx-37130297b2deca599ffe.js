(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{STHm:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l);const r="block pt-12 md:flex",m="pb-6 md:w-full md:max-w-150 md:p-0",s="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase",c="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20";t.a=e=>{let{title:t,children:a}=e;return n.a.createElement("div",{className:r},n.a.createElement("div",{className:m},n.a.createElement("h2",{className:s},t)),n.a.createElement("div",{className:c},a))}},hbLQ:function(e,t,a){"use strict";var l=a("Wbzz"),n=a("q1tI"),r=a.n(n);const m="flex flex-row",s="mb-6",c="font-semibold text-gray-900 pb-1",i="text-md text-gray-600 font-light",o="w-max items-center overflow-hidden",d="w-0 md:w-10 rounded-full md:my-1 md:mr-3 md:p-1 md:self-center ";t.a=e=>{let t,a,{name:n,description:u,link:f=!1,img:E=!1,internal:p=!1}=e;return t=p?r.a.createElement(l.Link,{to:f},n):r.a.createElement("a",{href:f},n),E&&(a=r.a.createElement("img",{src:E,alt:n,className:d})),r.a.createElement("div",{className:m},r.a.createElement("div",{className:o},a),r.a.createElement("div",{className:s},r.a.createElement("h3",{className:`${c} ${f?"hover:underline hover:text-black":""}`},f?t:n),u.split("\n").map((e,t,a)=>t+1===a.length?r.a.createElement("p",{className:i},e):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:i},e),r.a.createElement("br",null)))))}},pssB:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),m=a("6uTu"),s=a("ivnd");const c="text-lg font-bold",i="underline";t.default=()=>n.a.createElement(m.a,null,n.a.createElement(s.a,{title:"Not found"}),n.a.createElement("h1",{className:c},"404: Not Found"),n.a.createElement("p",null,"You just hit a route that doesn't exist."," ",n.a.createElement(r.Link,{className:i,to:"/"},"Return to safety"),"."))},"xGn/":function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("STHm"),m=a("hbLQ");var s=e=>{let{posts:t}=e;return n.a.createElement(r.a,{title:"All Blog Posts"},t.map(e=>n.a.createElement(m.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0})))},c=a("eNIv"),i=a("6uTu"),o=a("ivnd"),d=a("pssB");t.default=e=>{let{data:t}=e;const a=t.allMarkdownRemark.edges,l=!a||!a.length;return a&&a.length?n.a.createElement(i.a,null,n.a.createElement(o.a,{title:"Blog"}),n.a.createElement(c.a,{metadata:t.site.siteMetadata}),!l&&n.a.createElement(s,{posts:a})):n.a.createElement(d.default,null)}}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-37130297b2deca599ffe.js.map