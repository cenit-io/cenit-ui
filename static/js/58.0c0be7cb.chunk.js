(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[58],{772:function(e,t,n){!function(e){"use strict";var t=/[\w$]+/,n=500;e.registerHelper("hint","anyword",(function(r,i){for(var s=i&&i.word||t,o=i&&i.range||n,a=r.getCursor(),c=r.getLine(a.line),l=a.ch,p=l;p&&s.test(c.charAt(p-1));)--p;for(var f=p!=l&&c.slice(p,l),h=i&&i.list||[],u={},g=new RegExp(s.source,"g"),w=-1;w<=1;w+=2)for(var d=a.line,m=Math.min(Math.max(d+w*o,r.firstLine()),r.lastLine())+w;d!=m;d+=w)for(var v,x=r.getLine(d);v=g.exec(x);)d==a.line&&v[0]===f||f&&0!=v[0].lastIndexOf(f,0)||Object.prototype.hasOwnProperty.call(u,v[0])||(u[v[0]]=!0,h.push(v[0]));return{list:h,from:e.Pos(a.line,p),to:e.Pos(a.line,l)}}))}(n(129))}}]);