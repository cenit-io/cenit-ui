(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[258],{1003:function(t,e,n){"use strict";n.r(e);n(0);var a=n(291),c=n(1163);e.default={title:"Execution",actions:{index:{fields:["created_at","started_at","time_span","status","attachment","task"]}},fields:{attachment:{viewer:a.a,control:c.a}}}},1163:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var a=n(1),c=n(8),i=n(0),r=n(14),s=n(52),u=n(64),d=n(471),o=n(3),l=Object(s.a)((function(t){return{root:{border:"solid 1px ".concat(t.palette.background.default)},title:{minHeight:t.spacing(7),background:t.palette.background.default,borderTopLeftRadius:t.spacing(.5),borderTopRightRadius:t.spacing(.5),alignItems:"center",padding:t.spacing(0,2)},content:{padding:t.spacing(2)}}}));function b(t){var e=t.title,n=t.value,s=t.property,b=t.config,p=Object(r.a)(),f=Object(c.a)(p,2),j=f[0],g=f[1],m=l();Object(i.useEffect)((function(){var t=n.parent.changed().subscribe((function(t){return g({item:t})}));return function(){return t.unsubscribe()}}),[n]);var v=j.item,h=b.viewer||Object(d.a)(s);return Object(a.jsxs)("div",{className:m.root,children:[Object(a.jsx)("div",{className:Object(o.default)("flex",m.title),children:Object(a.jsx)(u.a,{variant:"subtitle2",children:e})}),Object(a.jsx)("div",{className:Object(o.default)("flex justify-content-center",m.content),children:Object(a.jsx)(h,{prop:s,value:n.get(),item:v})})]})}}}]);