(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{STHm:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r="block pt-12 md:flex",m="pb-6 md:w-full md:max-w-150 md:p-0",s="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase",c="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20";t.a=function(e){var t=e.title,a=e.children;return l.a.createElement("div",{className:r},l.a.createElement("div",{className:m},l.a.createElement("h2",{className:s},t)),l.a.createElement("div",{className:c},a))}},hbLQ:function(e,t,a){"use strict";var n=a("Wbzz"),l=a("q1tI"),r=a.n(l),m="flex flex-row",s="mb-6",c="font-semibold text-gray-900 pb-1",i="text-md text-gray-600 font-light",o="w-max items-center overflow-hidden",d="w-0 md:w-10 rounded-full md:my-1 md:mr-3 md:p-1 md:self-center ";t.a=function(e){var t,a,l=e.name,u=e.description,f=e.link,E=void 0!==f&&f,p=e.img,v=void 0!==p&&p,g=e.internal;return t=void 0!==g&&g?r.a.createElement(n.Link,{to:E},l):r.a.createElement("a",{href:E},l),v&&(a=r.a.createElement("img",{src:v,alt:l,className:d})),r.a.createElement("div",{className:m},r.a.createElement("div",{className:o},a),r.a.createElement("div",{className:s},r.a.createElement("h3",{className:c+" "+(E?"hover:underline hover:text-black":"")},E?t:l),u.split("\n").map((function(e,t,a){return t+1===a.length?r.a.createElement("p",{className:i},e):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:i},e),r.a.createElement("br",null))}))))}},pssB:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),m=a("6uTu"),s=a("ivnd"),c="text-lg font-bold",i="underline";t.default=function(){return l.a.createElement(m.a,null,l.a.createElement(s.a,{title:"Not found"}),l.a.createElement("h1",{className:c},"404: Not Found"),l.a.createElement("p",null,"You just hit a route that doesn't exist."," ",l.a.createElement(r.Link,{className:i,to:"/"},"Return to safety"),"."))}},"xGn/":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("STHm"),m=a("hbLQ"),s=function(e){var t=e.posts;return l.a.createElement(r.a,{title:"All Blog Posts"},t.map((function(e){return l.a.createElement(m.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0})})))},c=a("eNIv"),i=a("6uTu"),o=a("ivnd"),d=a("pssB");t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,n=!a||!a.length;return a&&a.length?l.a.createElement(i.a,null,l.a.createElement(o.a,{title:"Blog"}),l.a.createElement(c.a,{metadata:t.site.siteMetadata}),!n&&l.a.createElement(s,{posts:a})):l.a.createElement(d.default,null)}}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-1c9bf95af27a677c4bcf.js.map