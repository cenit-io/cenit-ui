(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[275],{1026:function(e,t,a){"use strict";a.r(t);var n=a(1),i=(a(0),a(9)),r=a(1178),c=a(103),u=a.n(c),d=["key","value","description","metadata"];t.default={title:"Parameter",icon:Object(n.jsx)(u.a,{component:"svg"}),actions:{index:{fields:["parent_data_type","parent","location","key","value","description","updated_at"]},new:{fields:d,seed:{metadata:{}}},edit:{fields:d}},fields:{parent:{viewer:Object(r.a)((function(e){return null===e||void 0===e?void 0:e.parent_data_type}))}},crud:[i.b.read,i.b.delete]}},1178:function(e,t,a){"use strict";var n=a(1),i=a(8),r=a(0),c=a(394),u=a(388),d=a(15),s=a(92),l=a(93),o=a(29),p=a(14),b=a(16);t.a=function(e){return function(t){var a=t.item,f=(t.prop,t.value),j=t.className,v=Object(p.a)(),O=Object(i.a)(v,2),m=O[0],y=O[1],x=m.title,k=m.dataType,_=m.empty;Object(r.useEffect)((function(){var t,n=null===(t=e(a))||void 0===t?void 0:t.id;if(n){var r=b.b.getById(n).pipe(Object(l.a)((function(e){return Object(o.a)(Object(s.a)(e),f&&e.titleFor(f)||Object(s.a)(null))}))).subscribe((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];return y({dataType:a,title:n,empty:!1})}));return function(){return r.unsubscribe()}}y({empty:!0,dataType:null,title:null})}),[a]);return _||k?x?Object(n.jsx)(u.a,{label:x,onClick:function(){return d.e.next(d.d.for(k.id,f.id).key)},className:j}):Object(n.jsx)("span",{children:"-"}):Object(n.jsx)(c.a,{variant:"text"})}}}}]);