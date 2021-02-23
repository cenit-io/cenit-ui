(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[187],{1053:function(e,t,n){"use strict";n.r(t);var i=n(1),a=(n(0),n(1167)),r=n(472),s=n(1177),c=n(1164),o=n(1166),d=["namespace","name","source_data_type","mime_type","file_extension","code"],l=Object(s.a)(Object(c.a)(d,"code"),"application/xml",["application/xml","text/html","text/plain"]);t.default={title:"XSLT Template",icon:Object(i.jsx)(a.a,{}),actions:{index:{fields:["namespace","name","source_data_type","mime_type","file_extension","updated_at"]},new:{fields:d},edit:{viewportFields:[].concat(d,["origin"])}},fields:{mime_type:{control:r.a},file_extension:{control:r.a},code:{control:o.a}},orchestrator:l}},1164:function(e,t,n){"use strict";function i(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return e.filter((function(e){return!n.includes(e)}))}n.d(t,"a",(function(){return i}))},1165:function(e,t,n){"use strict";var i=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return function(t,i,a,r){var s=r.readOnly,c={};if(n.forEach((function(n){var a,r=!s&&Boolean(e(t,n));r!==Boolean(null===(a=i[n])||void 0===a?void 0:a.disabled)&&(c[n]={disabled:r})})),Object.keys(c).length)return c}};t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.apply(void 0,[function(e){var t=e.origin;return t&&"default"!==t}].concat(t))}},1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var i=n(1),a=n(4),r=n(8),s=n(0),c=n(52),o=n(1159),d=n(53),l=n(289),u=n(14),p=n(239),b=n(29),f=n(16),h=n(290),j=Object(c.a)((function(e){return{box:{"& + &":{marginTop:e.spacing(2)}},chip:{margin:e.spacing(0,.5)}}}));function x(e){var t=e.origin;return t&&"default"!==t}function v(e){var t=Object(u.a)(),n=Object(r.a)(t,2),c=n[0],v=n[1],O=Object(d.b)(),_=O.rootId,m=O.rootDataType,g=j(),y=c.rootDataTypeTitle,w=c.snippetDataType,T=c.snippet,k=c.default_snippet,N=c.creator_access,D=c.snippet_ref_binding;Object(s.useEffect)((function(){if(_){var e=Object(b.a)(m.getTitle(),f.b.find({namespace:"Setup",name:"Snippet"}),m.get(_,{viewport:"{snippet {id namespace name origin} default_snippet {id namespace name origin} creator_access snippet_ref_binding {id}}"})).subscribe((function(e){var t=Object(r.a)(e,3),n=t[0],i=t[1],a=t[2],s=a.snippet,c=a.default_snippet,o=a.creator_access,d=a.snippet_ref_binding;return v({rootDataTypeTitle:n,snippetDataType:i,snippet:s,default_snippet:c,creator_access:o,snippet_ref_binding:d})}));return function(){return e.unsubscribe()}}}),[_,m]);var E,A,S=e.alertsOnly,B=e.value,F=e.readOnly,G=B.parent.get(),I=[];if(_)if(w){if(k){E=Object(i.jsx)(h.a,{refDataType:w,value:k,variant:"outlined",color:"primary",className:g.chip});var J=k.id===(null===T||void 0===T?void 0:T.id)?"and it's actually the current code.":"";I.push(Object(i.jsxs)(o.a,{severity:"info",className:g.box,children:["The ",Object(i.jsx)("b",{children:"default snippet"})," ref is pointing to",E,J]},"default_snippet_info")),x(G)&&(!x(k)||"shared"===G.origin&&"shared"!==k.origin)&&I.push(Object(i.jsxs)(o.a,{severity:"error",className:g.box,children:["This ",y," [",Object(i.jsx)("b",{children:G.origin||"default"}),"] and the default snippet [",Object(i.jsx)("b",{children:k.origin||"default"}),"] are not in the same sharing scope! To fix this go to ",E,"and cross it to the ",Object(i.jsx)("b",{children:G.origin||"default"})," scope."]},"default_snippet_not_same_origin"))}else I.push(Object(i.jsxs)(o.a,{severity:"error",className:g.box,children:["The default snippet ref is ",Object(i.jsx)("b",{children:"broken"})," or unreachable!"]},"default_snippet_ref_broken")),N&&I.push(Object(i.jsxs)(o.a,{severity:"info",className:g.box,children:["However you're the creator of this code, ",Object(i.jsx)("b",{children:"continue and save"})," to set this code as ",Object(i.jsx)("b",{children:"default"}),"."]},"default_snippet_ref_broken_creator_access"));if(T){var H=Object(i.jsx)(h.a,{refDataType:w,value:T,variant:"outlined",color:"primary",className:g.chip});k&&k.id!==T.id&&I.push(Object(i.jsx)(o.a,{severity:"info",className:g.box,children:"Go to the bindings configuration and delete the binding to use the default code."},"delete_binding_alert")),x(T)?F||I.push(Object(i.jsxs)(o.a,{severity:"warning",className:g.box,children:["You're seeing the code from ",E," which is shared and therefore not editable. If you continue and save ",Object(i.jsx)("b",{children:"a new snippet will be created"}),"."]},"shared_editing")):T.id!==(null===k||void 0===k?void 0:k.id)&&I.push(Object(i.jsxs)(o.a,{severity:F?"success":"warning",className:g.box,children:["This code is from ",H," ",F?"":" and is being edited now."]},"current_snippet_link"))}else(null===D||void 0===D?void 0:D.id)&&(I.push(Object(i.jsxs)(o.a,{severity:"warning",className:g.box,children:["There's a snippet ref binding and it's ",Object(i.jsx)("b",{children:"broken"}),"! The broken ref binding will be ",Object(i.jsx)("b",{children:"fixed when saved"}),"."]},"broken_snippet_ref_binding")),I.push(Object(i.jsx)(o.a,{severity:"info",className:g.box,children:"Go to the bindings configuration and delete the binding to use the default code."},"delete_broken_binding_alert")))}else I.push(Object(i.jsx)(p.a,{className:"full-width"},"loader"));else I.push(Object(i.jsx)(o.a,{severity:"info",className:g.box,children:"A new snippet will be created and set as default."},"new_snippet_info"));return S||(A=Object(i.jsx)("div",{className:g.box,children:Object(i.jsx)(l.a,Object(a.a)({},e))})),Object(i.jsxs)(i.Fragment,{children:[I,A]})}},1167:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(4),a=n(1),r=(n(0),n(78));function s(e){return Object(a.jsxs)(r.a,Object(i.a)(Object(i.a)({},e),{},{children:[Object(a.jsx)("rect",{width:"23.99",height:"9.37",rx:"1.74"}),Object(a.jsx)("rect",{y:"12.07",width:"13.26",height:"11.99",rx:"1.74"}),Object(a.jsx)("rect",{x:"15.96",y:"12.07",width:"8.04",height:"11.99",rx:"1.74"})]}))}},1168:function(e,t,n){"use strict";var i=n(292),a=n(1152),r=n(92),s=n(91),c=n(162),o=n(29);t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,n,d,l){var u=[],p={},b=!1;return t.forEach((function(t){var i=t(e,n,d,l);i?(b=!0,Object(a.a)(i)?u.push(i):p=Object(c.b)(p,i)):p=Object(c.b)(n,p)})),u.length?o.a.apply(void 0,[Object(r.a)(p)].concat(u)).pipe(Object(s.a)((function(e){var t=Object(i.a)(e),n=t[0];return t.slice(1).forEach((function(e){return n=Object(c.b)(n,e)})),Object.keys(n).length?n:Object(r.a)(void 0)}))):b?p:void 0}}},1173:function(e,t,n){"use strict";var i=n(1182),a=n.n(i),r={"text/x-ruby":["rb"]};Object.keys(r).forEach((function(e){var t=a.a.extensions[e]||[];r[e].forEach((function(e){-1===t.indexOf(e)&&t.push(e)})),a.a.extensions[e]=t})),t.a=a.a},1177:function(e,t,n){"use strict";var i=n(19),a=n(1173),r=n(163),s=n(1168),c=n(1165);t.a=function(e,t,n){return Object(s.a)((function(e,i,s){var c,o,d,l,u=e.mime_type,p=e.file_extension;if((u||!(null===(c=i.mime_type)||void 0===c||null===(o=c.options)||void 0===o?void 0:o.length))&&(!(null===(d=i.mime_type)||void 0===d?void 0:d.options)||(null===(l=i.code)||void 0===l?void 0:l.mime)!==(t||u)||-1===i.mime_type.options.indexOf(u)||-1===a.a.extensions[u].indexOf(p))){var b=a.a.extensions[u],f=b&&b[0]||null;return Object(r.b)(f,p)||s.propertyValue("file_extension").set(f,!0),{mime_type:{options:n||Object.keys(a.a.extensions)},file_extension:{options:b},code:{mime:t||u}}}}),c.a.apply(void 0,Object(i.a)(e)))}}}]);