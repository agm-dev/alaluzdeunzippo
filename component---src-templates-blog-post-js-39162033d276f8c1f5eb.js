(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return l});var n=a(0),r=a.n(n),i=a(157),o=a(155),l=(a(147),"2383718655");t.default=function(e){var t=e.data.markdownRemark,a=e.data.site.siteMetadata.siteUrl,n=t.frontmatter,l=n.title,c=n.description,s=n.date;return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:l,description:c,url:a,pathname:e.location.pathname}),r.a.createElement("div",null,r.a.createElement("h1",null,l),r.a.createElement("span",{className:"date"},s),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})))}},151:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(152);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},153:function(e){e.exports={data:{site:{siteMetadata:{title:"A la luz de un zippo"}}}}},154:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},155:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(158),s=a.n(c);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,c=e.image,d=e.url,u=e.pathname,m=n.data.site,p=t||m.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+m.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:l},{property:"og:description",content:p},{property:"og:image",content:c},{property:"og:url",content:u?d+u:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:m.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:p}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d},156:function(e){e.exports={data:{site:{siteMetadata:{title:"A la luz de un zippo",description:"Microrrelatos originales de Adrián Gonzalo, migrados desde el blog original en alaluzdeunzippo.blogspot.com.",author:"Adrián Gonzalo"}}}}},157:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(151),s=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"#444444",marginBottom:"1.45rem",textTransform:"uppercase"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};s.propTypes={siteTitle:l.a.string},s.defaultProps={siteTitle:""};var d=s,u=(a(144),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",{className:"footer"},"© 2011 - ",(new Date).getFullYear(),", Textos originales de"," ",i.a.createElement("a",{href:"https://github.com/agm-dev",className:"author",target:"_blank",rel:"noopener noreferrer"},"Adrián Gonzalo"),".")))},data:n})});u.propTypes={children:l.a.node.isRequired};t.a=u}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-39162033d276f8c1f5eb.js.map