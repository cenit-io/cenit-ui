(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[240,260],{1045:function(e,t,c){"use strict";c.r(t);var n=c(963),a=Object(n.default)("Submission");t.default=a},1163:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var n=c(1),a=c(8),i=c(0),r=c(14),s=c(52),u=c(64),d=c(471),o=c(3),b=Object(s.a)((function(e){return{root:{border:"solid 1px ".concat(e.palette.background.default)},title:{minHeight:e.spacing(7),background:e.palette.background.default,borderTopLeftRadius:e.spacing(.5),borderTopRightRadius:e.spacing(.5),alignItems:"center",padding:e.spacing(0,2)},content:{padding:e.spacing(2)}}}));function l(e){var t=e.title,c=e.value,s=e.property,l=e.config,f=Object(r.a)(),p=Object(a.a)(f,2),j=p[0],g=p[1],O=b();Object(i.useEffect)((function(){var e=c.parent.changed().subscribe((function(e){return g({item:e})}));return function(){return e.unsubscribe()}}),[c]);var v=j.item,m=l.viewer||Object(d.a)(s);return Object(n.jsxs)("div",{className:O.root,children:[Object(n.jsx)("div",{className:Object(o.default)("flex",O.title),children:Object(n.jsx)(u.a,{variant:"subtitle2",children:t})}),Object(n.jsx)("div",{className:Object(o.default)("flex justify-content-center",O.content),children:Object(n.jsx)(m,{prop:s,value:c.get(),item:v})})]})}},963:function(e,t,c){"use strict";c.r(t);var n=c(4),a=c(1),i=c(19),r=(c(0),c(9)),s=c(100),u=c(1163),d=["description","status","progress","scheduler","attempts","succeded","retries","updated_at"];t.default=function(e,t){t=t||{};var c=[].concat(Object(i.a)(Object.keys(t)),d);return{title:e,icon:Object(a.jsx)(s.TaskIcon,{}),actions:{index:{fields:c},new:{fields:c}},fields:Object(n.a)({status:{control:u.a,viewer:s.TaskStatusViewer}},t),crud:[r.b.read,r.b.delete]}}}}]);