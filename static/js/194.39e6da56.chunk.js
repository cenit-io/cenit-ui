(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[194],{1011:function(e,t,n){"use strict";n.r(t);var i=n(19),a=n(1),r=(n(0),n(1171)),s=n(1166),c=n(1165),o=n(1164),d=["namespace","name","source_data_type","target_data_type","discard_events","code"];t.default={title:"Handlebars Converter",icon:Object(a.jsx)(r.a,{}),actions:{index:{fields:["namespace","name","source_data_type","target_data_type","discard_events","updated_at"]},new:{fields:d},edit:{viewportFields:[].concat(d,["origin"])}},fields:{code:{control:s.a}},orchestrator:c.a.apply(void 0,Object(i.a)(Object(o.a)(d,"code")))}},1164:function(e,t,n){"use strict";function i(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return e.filter((function(e){return!n.includes(e)}))}n.d(t,"a",(function(){return i}))},1165:function(e,t,n){"use strict";var i=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return function(t,i,a,r){var s=r.readOnly,c={};if(n.forEach((function(n){var a,r=!s&&Boolean(e(t,n));r!==Boolean(null===(a=i[n])||void 0===a?void 0:a.disabled)&&(c[n]={disabled:r})})),Object.keys(c).length)return c}};t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.apply(void 0,[function(e){var t=e.origin;return t&&"default"!==t}].concat(t))}},1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var i=n(1),a=n(4),r=n(8),s=n(0),c=n(52),o=n(1159),d=n(53),l=n(289),p=n(14),u=n(239),b=n(29),f=n(16),h=n(290),j=Object(c.a)((function(e){return{box:{"& + &":{marginTop:e.spacing(2)}},chip:{margin:e.spacing(0,.5)}}}));function _(e){var t=e.origin;return t&&"default"!==t}function v(e){var t=Object(p.a)(),n=Object(r.a)(t,2),c=n[0],v=n[1],g=Object(d.b)(),O=g.rootId,x=g.rootDataType,m=j(),y=c.rootDataTypeTitle,w=c.snippetDataType,T=c.snippet,N=c.default_snippet,k=c.creator_access,A=c.snippet_ref_binding;Object(s.useEffect)((function(){if(O){var e=Object(b.a)(x.getTitle(),f.b.find({namespace:"Setup",name:"Snippet"}),x.get(O,{viewport:"{snippet {id namespace name origin} default_snippet {id namespace name origin} creator_access snippet_ref_binding {id}}"})).subscribe((function(e){var t=Object(r.a)(e,3),n=t[0],i=t[1],a=t[2],s=a.snippet,c=a.default_snippet,o=a.creator_access,d=a.snippet_ref_binding;return v({rootDataTypeTitle:n,snippetDataType:i,snippet:s,default_snippet:c,creator_access:o,snippet_ref_binding:d})}));return function(){return e.unsubscribe()}}}),[O,x]);var D,H,B=e.alertsOnly,E=e.value,F=e.readOnly,G=E.parent.get(),I=[];if(O)if(w){if(N){D=Object(i.jsx)(h.a,{refDataType:w,value:N,variant:"outlined",color:"primary",className:m.chip});var J=N.id===(null===T||void 0===T?void 0:T.id)?"and it's actually the current code.":"";I.push(Object(i.jsxs)(o.a,{severity:"info",className:m.box,children:["The ",Object(i.jsx)("b",{children:"default snippet"})," ref is pointing to",D,J]},"default_snippet_info")),_(G)&&(!_(N)||"shared"===G.origin&&"shared"!==N.origin)&&I.push(Object(i.jsxs)(o.a,{severity:"error",className:m.box,children:["This ",y," [",Object(i.jsx)("b",{children:G.origin||"default"}),"] and the default snippet [",Object(i.jsx)("b",{children:N.origin||"default"}),"] are not in the same sharing scope! To fix this go to ",D,"and cross it to the ",Object(i.jsx)("b",{children:G.origin||"default"})," scope."]},"default_snippet_not_same_origin"))}else I.push(Object(i.jsxs)(o.a,{severity:"error",className:m.box,children:["The default snippet ref is ",Object(i.jsx)("b",{children:"broken"})," or unreachable!"]},"default_snippet_ref_broken")),k&&I.push(Object(i.jsxs)(o.a,{severity:"info",className:m.box,children:["However you're the creator of this code, ",Object(i.jsx)("b",{children:"continue and save"})," to set this code as ",Object(i.jsx)("b",{children:"default"}),"."]},"default_snippet_ref_broken_creator_access"));if(T){var M=Object(i.jsx)(h.a,{refDataType:w,value:T,variant:"outlined",color:"primary",className:m.chip});N&&N.id!==T.id&&I.push(Object(i.jsx)(o.a,{severity:"info",className:m.box,children:"Go to the bindings configuration and delete the binding to use the default code."},"delete_binding_alert")),_(T)?F||I.push(Object(i.jsxs)(o.a,{severity:"warning",className:m.box,children:["You're seeing the code from ",D," which is shared and therefore not editable. If you continue and save ",Object(i.jsx)("b",{children:"a new snippet will be created"}),"."]},"shared_editing")):T.id!==(null===N||void 0===N?void 0:N.id)&&I.push(Object(i.jsxs)(o.a,{severity:F?"success":"warning",className:m.box,children:["This code is from ",M," ",F?"":" and is being edited now."]},"current_snippet_link"))}else(null===A||void 0===A?void 0:A.id)&&(I.push(Object(i.jsxs)(o.a,{severity:"warning",className:m.box,children:["There's a snippet ref binding and it's ",Object(i.jsx)("b",{children:"broken"}),"! The broken ref binding will be ",Object(i.jsx)("b",{children:"fixed when saved"}),"."]},"broken_snippet_ref_binding")),I.push(Object(i.jsx)(o.a,{severity:"info",className:m.box,children:"Go to the bindings configuration and delete the binding to use the default code."},"delete_broken_binding_alert")))}else I.push(Object(i.jsx)(u.a,{className:"full-width"},"loader"));else I.push(Object(i.jsx)(o.a,{severity:"info",className:m.box,children:"A new snippet will be created and set as default."},"new_snippet_info"));return B||(H=Object(i.jsx)("div",{className:m.box,children:Object(i.jsx)(l.a,Object(a.a)({},e))})),Object(i.jsxs)(i.Fragment,{children:[I,H]})}},1171:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(4),a=n(1),r=(n(0),n(78));function s(e){return Object(a.jsxs)(r.a,Object(i.a)(Object(i.a)({},e),{},{children:[Object(a.jsx)("path",{d:"M18.58,0H5.42A5.42,5.42,0,0,0,0,5.42V17.66A6.34,6.34,0,0,0,6.34,24h4.8a8.33,8.33,0,1,1,1.72,0h5.72A5.42,5.42,0,0,0,24,18.58V5.42A5.42,5.42,0,0,0,18.58,0Z"}),Object(a.jsx)("path",{d:"M12,8.88a6.83,6.83,0,1,0,6.83,6.83A6.84,6.84,0,0,0,12,8.88Z"})]}))}}}]);