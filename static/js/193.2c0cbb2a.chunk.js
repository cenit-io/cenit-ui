(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[193],{1135:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(19),r=(n(0),n(4)),s=n(78);function c(e){return Object(i.jsx)(s.a,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("path",{d:"M20.78,15.78H18.64V14a2.35,2.35,0,0,0-2.35-2.35H12.75V8.26h2.13A1.22,1.22,0,0,0,16.1,7V1.28A1.22,1.22,0,0,0,14.88.06H9.12A1.22,1.22,0,0,0,7.9,1.28V7A1.22,1.22,0,0,0,9.12,8.26h2.13v3.4H7.71A2.35,2.35,0,0,0,5.36,14v1.77H3.22A1.22,1.22,0,0,0,2,17v5.78A1.22,1.22,0,0,0,3.22,24H9a1.22,1.22,0,0,0,1.22-1.22V17A1.22,1.22,0,0,0,9,15.78H6.86V14a.85.85,0,0,1,.85-.85h8.58a.85.85,0,0,1,.85.85v1.77H15A1.22,1.22,0,0,0,13.78,17v5.78A1.22,1.22,0,0,0,15,24h5.78A1.22,1.22,0,0,0,22,22.78V17A1.22,1.22,0,0,0,20.78,15.78Z"})}))}var o=n(1166),d=n(1168),l=n(1165),u=n(1164),b=["id","namespace","name","description","parameters","language","code","call_links"],p=Object(d.a)((function(e,t){var n,i="ruby"===e.language?"text/x-ruby":"text/javascript";if((null===(n=t.code)||void 0===n?void 0:n.mime)!==i)return{code:{mime:i}}}),l.a.apply(void 0,Object(a.a)(Object(u.a)(b,"code")))),f="{id ".concat(b.join(" ")," origin}");t.default={title:"Algorithm",icon:Object(i.jsx)(c,{}),actions:{index:{fields:["namespace","name","description","parameters_size","updated_at"]},new:{fields:["namespace","name","description","parameters","language","code"],seed:{language:"ruby"}},edit:{fields:b,viewport:f}},fields:{code:{control:o.a},call_links:{controlProps:{addDisabled:!0,deleteDisabled:!0,sortDisabled:!0}}},orchestrator:p}},1164:function(e,t,n){"use strict";function i(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return e.filter((function(e){return!n.includes(e)}))}n.d(t,"a",(function(){return i}))},1165:function(e,t,n){"use strict";var i=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return function(t,i,a,r){var s=r.readOnly,c={};if(n.forEach((function(n){var a,r=!s&&Boolean(e(t,n));r!==Boolean(null===(a=i[n])||void 0===a?void 0:a.disabled)&&(c[n]={disabled:r})})),Object.keys(c).length)return c}};t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.apply(void 0,[function(e){var t=e.origin;return t&&"default"!==t}].concat(t))}},1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var i=n(1),a=n(4),r=n(8),s=n(0),c=n(52),o=n(1159),d=n(53),l=n(289),u=n(14),b=n(239),p=n(29),f=n(16),h=n(290),j=Object(c.a)((function(e){return{box:{"& + &":{marginTop:e.spacing(2)}},chip:{margin:e.spacing(0,.5)}}}));function v(e){var t=e.origin;return t&&"default"!==t}function g(e){var t=Object(u.a)(),n=Object(r.a)(t,2),c=n[0],g=n[1],O=Object(d.b)(),x=O.rootId,_=O.rootDataType,m=j(),y=c.rootDataTypeTitle,w=c.snippetDataType,A=c.snippet,T=c.default_snippet,k=c.creator_access,N=c.snippet_ref_binding;Object(s.useEffect)((function(){if(x){var e=Object(p.a)(_.getTitle(),f.b.find({namespace:"Setup",name:"Snippet"}),_.get(x,{viewport:"{snippet {id namespace name origin} default_snippet {id namespace name origin} creator_access snippet_ref_binding {id}}"})).subscribe((function(e){var t=Object(r.a)(e,3),n=t[0],i=t[1],a=t[2],s=a.snippet,c=a.default_snippet,o=a.creator_access,d=a.snippet_ref_binding;return g({rootDataTypeTitle:n,snippetDataType:i,snippet:s,default_snippet:c,creator_access:o,snippet_ref_binding:d})}));return function(){return e.unsubscribe()}}}),[x,_]);var D,H,V=e.alertsOnly,E=e.value,B=e.readOnly,G=E.parent.get(),I=[];if(x)if(w){if(T){D=Object(i.jsx)(h.a,{refDataType:w,value:T,variant:"outlined",color:"primary",className:m.chip});var J=T.id===(null===A||void 0===A?void 0:A.id)?"and it's actually the current code.":"";I.push(Object(i.jsxs)(o.a,{severity:"info",className:m.box,children:["The ",Object(i.jsx)("b",{children:"default snippet"})," ref is pointing to",D,J]},"default_snippet_info")),v(G)&&(!v(T)||"shared"===G.origin&&"shared"!==T.origin)&&I.push(Object(i.jsxs)(o.a,{severity:"error",className:m.box,children:["This ",y," [",Object(i.jsx)("b",{children:G.origin||"default"}),"] and the default snippet [",Object(i.jsx)("b",{children:T.origin||"default"}),"] are not in the same sharing scope! To fix this go to ",D,"and cross it to the ",Object(i.jsx)("b",{children:G.origin||"default"})," scope."]},"default_snippet_not_same_origin"))}else I.push(Object(i.jsxs)(o.a,{severity:"error",className:m.box,children:["The default snippet ref is ",Object(i.jsx)("b",{children:"broken"})," or unreachable!"]},"default_snippet_ref_broken")),k&&I.push(Object(i.jsxs)(o.a,{severity:"info",className:m.box,children:["However you're the creator of this code, ",Object(i.jsx)("b",{children:"continue and save"})," to set this code as ",Object(i.jsx)("b",{children:"default"}),"."]},"default_snippet_ref_broken_creator_access"));if(A){var S=Object(i.jsx)(h.a,{refDataType:w,value:A,variant:"outlined",color:"primary",className:m.chip});T&&T.id!==A.id&&I.push(Object(i.jsx)(o.a,{severity:"info",className:m.box,children:"Go to the bindings configuration and delete the binding to use the default code."},"delete_binding_alert")),v(A)?B||I.push(Object(i.jsxs)(o.a,{severity:"warning",className:m.box,children:["You're seeing the code from ",D," which is shared and therefore not editable. If you continue and save ",Object(i.jsx)("b",{children:"a new snippet will be created"}),"."]},"shared_editing")):A.id!==(null===T||void 0===T?void 0:T.id)&&I.push(Object(i.jsxs)(o.a,{severity:B?"success":"warning",className:m.box,children:["This code is from ",S," ",B?"":" and is being edited now."]},"current_snippet_link"))}else(null===N||void 0===N?void 0:N.id)&&(I.push(Object(i.jsxs)(o.a,{severity:"warning",className:m.box,children:["There's a snippet ref binding and it's ",Object(i.jsx)("b",{children:"broken"}),"! The broken ref binding will be ",Object(i.jsx)("b",{children:"fixed when saved"}),"."]},"broken_snippet_ref_binding")),I.push(Object(i.jsx)(o.a,{severity:"info",className:m.box,children:"Go to the bindings configuration and delete the binding to use the default code."},"delete_broken_binding_alert")))}else I.push(Object(i.jsx)(b.a,{className:"full-width"},"loader"));else I.push(Object(i.jsx)(o.a,{severity:"info",className:m.box,children:"A new snippet will be created and set as default."},"new_snippet_info"));return V||(H=Object(i.jsx)("div",{className:m.box,children:Object(i.jsx)(l.a,Object(a.a)({},e))})),Object(i.jsxs)(i.Fragment,{children:[I,H]})}},1168:function(e,t,n){"use strict";var i=n(292),a=n(1152),r=n(92),s=n(91),c=n(162),o=n(29);t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,n,d,l){var u=[],b={},p=!1;return t.forEach((function(t){var i=t(e,n,d,l);i?(p=!0,Object(a.a)(i)?u.push(i):b=Object(c.b)(b,i)):b=Object(c.b)(n,b)})),u.length?o.a.apply(void 0,[Object(r.a)(b)].concat(u)).pipe(Object(s.a)((function(e){var t=Object(i.a)(e),n=t[0];return t.slice(1).forEach((function(e){return n=Object(c.b)(n,e)})),Object.keys(n).length?n:Object(r.a)(void 0)}))):p?b:void 0}}}}]);