(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[192],{1010:function(e,t,a){"use strict";a.r(t);var r=a(1),n=(a(0),a(1169)),i=a(1163),c=a(1164),s=a(1185),o=["id","namespace","name","authorized","client","callback_resolver","parameters_signer","parameters","template_parameters","metadata"];t.default={title:"Callback Authorization",icon:Object(r.jsx)(n.a,{}),actions:{index:{fields:["namespace","name","authorized","client","updated_at"],viewport:"{id namespace name authorized client {id provider {namespace name} name} updated_at}"},new:{fields:Object(c.a)(o,"id","authorized")},edit:{fields:o,viewport:"{id namespace name authorized client {id provider {namespace name} name}callback_resolver parameters_signer parameters template_parameters metadata}"}},fields:{authorized:{control:i.a},client:{controlProps:{additionalViewportProps:["namespace","provider"]}},callback_resolver:{selector:s.b},parameters_signer:{selector:s.b}}}},1163:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(1),n=a(8),i=a(0),c=a(14),s=a(52),o=a(64),d=a(471),u=a(3),l=Object(s.a)((function(e){return{root:{border:"solid 1px ".concat(e.palette.background.default)},title:{minHeight:e.spacing(7),background:e.palette.background.default,borderTopLeftRadius:e.spacing(.5),borderTopRightRadius:e.spacing(.5),alignItems:"center",padding:e.spacing(0,2)},content:{padding:e.spacing(2)}}}));function p(e){var t=e.title,a=e.value,s=e.property,p=e.config,m=Object(c.a)(),b=Object(n.a)(m,2),f=b[0],j=b[1],v=l();Object(i.useEffect)((function(){var e=a.parent.changed().subscribe((function(e){return j({item:e})}));return function(){return e.unsubscribe()}}),[a]);var h=f.item,g=p.viewer||Object(d.a)(s);return Object(r.jsxs)("div",{className:v.root,children:[Object(r.jsx)("div",{className:Object(u.default)("flex",v.title),children:Object(r.jsx)(o.a,{variant:"subtitle2",children:t})}),Object(r.jsx)("div",{className:Object(u.default)("flex justify-content-center",v.content),children:Object(r.jsx)(g,{prop:s,value:a.get(),item:h})})]})}},1164:function(e,t,a){"use strict";function r(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];return e.filter((function(e){return!a.includes(e)}))}a.d(t,"a",(function(){return r}))},1169:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(4),n=a(1),i=(a(0),a(78));function c(e){return Object(n.jsxs)(i.a,Object(r.a)(Object(r.a)({},e),{},{children:[Object(n.jsx)("rect",{x:"7.81",y:"2.84",width:"8.39",height:"5.68",rx:"1.42"}),Object(n.jsx)("path",{d:"M20.28,5.15H17.7v1.9a3,3,0,0,1-2.95,3H9.25a3,3,0,0,1-2.95-3V5.15H3.72A3.73,3.73,0,0,0,0,8.87V18a3.73,3.73,0,0,0,3.72,3.72H20.28A3.73,3.73,0,0,0,24,18V8.87A3.73,3.73,0,0,0,20.28,5.15Z"})]}))}},1185:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n})),a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return c}));var r={parameters_size:1},n={parameters_size:{$gte:1}},i={$or:[{parameters_size:1},{parameters_size:2}]},c={parameters_size:2}}}]);