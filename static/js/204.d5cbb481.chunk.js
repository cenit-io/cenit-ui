(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[204],{1042:function(e,t,n){"use strict";n.r(t);var i=n(19),r=n(1),a=(n(0),n(1183)),o=n.n(a),d=n(1164),c=n(1184),u=n(162),s=["provider","authentication","user_name","from","password"];t.default={title:"SMTP Account",icon:Object(r.jsx)(o.a,{component:"svg"}),actions:{index:{fields:[].concat(Object(i.a)(Object(d.a)(s,"password")),["updated_at"])},new:{fields:s,seed:{authentication:"plain"}}},fields:{provider:c.a,user_name:{Hidden:c.a,autoComplete:"off"},password:{controlProps:{type:"password",autoComplete:"off"}},from:{title:"Send e-mail as"}},dynamicConfig:function(e,t,n,i){var r,a=e.id,o=i.errors;if((a||o)&&!1!==(null===(r=t.provider)||void 0===r?void 0:r.hidden))return Object(u.b)(t,{provider:c.b,authentication:c.b,user_name:c.b})}}},1164:function(e,t,n){"use strict";function i(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return e.filter((function(e){return!n.includes(e)}))}n.d(t,"a",(function(){return i}))},1183:function(e,t,n){"use strict";var i=n(22),r=n(23);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=(0,i(n(24)).default)(a.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),"Email");t.default=o},1184:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));var i={hidden:!0},r={hidden:!1}}}]);