(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[269],{1178:function(e,t,n){"use strict";var i=n(1),a=n(8),r=n(0),c=n(394),d=n(388),b=n(15),o=n(92),u=n(93),l=n(29),s=n(14),f=n(16);t.a=function(e){return function(t){var n=t.item,p=(t.prop,t.value),j=t.className,_=Object(s.a)(),v=Object(a.a)(_,2),O=v[0],y=v[1],h=O.title,m=O.dataType,w=O.empty;Object(r.useEffect)((function(){var t,i=null===(t=e(n))||void 0===t?void 0:t.id;if(i){var r=f.b.getById(i).pipe(Object(u.a)((function(e){return Object(l.a)(Object(o.a)(e),p&&e.titleFor(p)||Object(o.a)(null))}))).subscribe((function(e){var t=Object(a.a)(e,2),n=t[0],i=t[1];return y({dataType:n,title:i,empty:!1})}));return function(){return r.unsubscribe()}}y({empty:!0,dataType:null,title:null})}),[n]);return w||m?h?Object(i.jsx)(d.a,{label:h,onClick:function(){return b.e.next(b.d.for(m.id,p.id).key)},className:j}):Object(i.jsx)("span",{children:"-"}):Object(i.jsx)(c.a,{variant:"text"})}}},987:function(e,t,n){"use strict";n.r(t);var i=n(4),a=n(1),r=(n(0),n(9)),c=n(1178),d=n(103),b=n.n(d),o=n(162),u=[].concat(["flow_binder","connection_binder","webhook_binder","algorithm_binder","translator_binder","data_type_binder","validator_binder"],["authorization_bind","event_bind","connection_role_bind","snippet_bind"]),l={hidden:!0},s={hidden:!1};t.default={title:"Binding",icon:Object(a.jsx)(b.a,{component:"svg"}),actions:{index:{fields:["binder_data_type","binder","bind_data_type","bind","updated_at"]}},fields:Object(o.b)(Object(i.a)({},u.reduce((function(e,t){return(e[t]=l)&&e}),{})),{binder:{viewer:Object(c.a)((function(e){return null===e||void 0===e?void 0:e.binder_data_type}))},bind:{viewer:Object(c.a)((function(e){return null===e||void 0===e?void 0:e.bind_data_type}))}}),dynamicConfig:function(e,t){var n={};if(u.filter((function(t){return e.hasOwnProperty(t)})).forEach((function(e){t[e]||(n[e]=s)})),Object.keys(n).length)return Object(i.a)(Object(i.a)({},t),n)},crud:[r.b.read,r.b.delete]}}}]);