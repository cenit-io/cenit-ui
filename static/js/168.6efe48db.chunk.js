(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[168],{740:function(t,n,e){!function(t){"use strict";t.defineMode("turtle",(function(t){var n,e=t.indentUnit;function o(t){return new RegExp("^(?:"+t.join("|")+")$","i")}o([]);var r=o(["@prefix","@base","a"]),i=/[*+\-<>=&|]/;function c(t,e){var o=t.next();if(n=null,"<"!=o||t.match(/^[\s\u00a0=]/,!1)){if('"'==o||"'"==o)return e.tokenize=a(o),e.tokenize(t,e);if(/[{}\(\),\.;\[\]]/.test(o))return n=o,null;if("#"==o)return t.skipToEnd(),"comment";if(i.test(o))return t.eatWhile(i),null;if(":"==o)return"operator";if(t.eatWhile(/[_\w\d]/),":"==t.peek())return"variable-3";var c=t.current();return r.test(c)?"meta":o>="A"&&o<="Z"?"comment":"keyword"}return t.match(/^[^\s\u00a0>]*>?/),"atom"}function a(t){return function(n,e){for(var o,r=!1;null!=(o=n.next());){if(o==t&&!r){e.tokenize=c;break}r=!r&&"\\"==o}return"string"}}function u(t,n,e){t.context={prev:t.context,indent:t.indent,col:e,type:n}}function l(t){t.indent=t.context.indent,t.context=t.context.prev}return{startState:function(){return{tokenize:c,context:null,indent:0,col:0}},token:function(t,e){if(t.sol()&&(e.context&&null==e.context.align&&(e.context.align=!1),e.indent=t.indentation()),t.eatSpace())return null;var o=e.tokenize(t,e);if("comment"!=o&&e.context&&null==e.context.align&&"pattern"!=e.context.type&&(e.context.align=!0),"("==n)u(e,")",t.column());else if("["==n)u(e,"]",t.column());else if("{"==n)u(e,"}",t.column());else if(/[\]\}\)]/.test(n)){for(;e.context&&"pattern"==e.context.type;)l(e);e.context&&n==e.context.type&&l(e)}else"."==n&&e.context&&"pattern"==e.context.type?l(e):/atom|string|variable/.test(o)&&e.context&&(/[\}\]]/.test(e.context.type)?u(e,"pattern",t.column()):"pattern"!=e.context.type||e.context.align||(e.context.align=!0,e.context.col=t.column()));return o},indent:function(t,n){var o=n&&n.charAt(0),r=t.context;if(/[\]\}]/.test(o))for(;r&&"pattern"==r.type;)r=r.prev;var i=r&&o==r.type;return r?"pattern"==r.type?r.col:r.align?r.col+(i?0:1):r.indent+(i?0:e):0},lineComment:"#"}})),t.defineMIME("text/turtle","turtle")}(e(129))}}]);