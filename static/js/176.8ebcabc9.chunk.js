(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[176],{750:function(e,t,n){!function(e){"use strict";e.defineMode("xquery",(function(){var e=function(){function e(e){return{type:e,style:"keyword"}}for(var t=e("operator"),n={type:"atom",style:"atom"},r={type:"axis_specifier",style:"qualifier"},a={",":{type:"punctuation",style:null}},i=["after","all","allowing","ancestor","ancestor-or-self","any","array","as","ascending","at","attribute","base-uri","before","boundary-space","by","case","cast","castable","catch","child","collation","comment","construction","contains","content","context","copy","copy-namespaces","count","decimal-format","declare","default","delete","descendant","descendant-or-self","descending","diacritics","different","distance","document","document-node","element","else","empty","empty-sequence","encoding","end","entire","every","exactly","except","external","first","following","following-sibling","for","from","ftand","ftnot","ft-option","ftor","function","fuzzy","greatest","group","if","import","in","inherit","insensitive","insert","instance","intersect","into","invoke","is","item","language","last","lax","least","let","levels","lowercase","map","modify","module","most","namespace","next","no","node","nodes","no-inherit","no-preserve","not","occurs","of","only","option","order","ordered","ordering","paragraph","paragraphs","parent","phrase","preceding","preceding-sibling","preserve","previous","processing-instruction","relationship","rename","replace","return","revalidation","same","satisfies","schema","schema-attribute","schema-element","score","self","sensitive","sentence","sentences","sequence","skip","sliding","some","stable","start","stemming","stop","strict","strip","switch","text","then","thesaurus","times","to","transform","treat","try","tumbling","type","typeswitch","union","unordered","update","updating","uppercase","using","validate","value","variable","version","weight","when","where","wildcards","window","with","without","word","words","xquery"],s=0,o=i.length;s<o;s++)a[i[s]]=e(i[s]);var c=["xs:anyAtomicType","xs:anySimpleType","xs:anyType","xs:anyURI","xs:base64Binary","xs:boolean","xs:byte","xs:date","xs:dateTime","xs:dateTimeStamp","xs:dayTimeDuration","xs:decimal","xs:double","xs:duration","xs:ENTITIES","xs:ENTITY","xs:float","xs:gDay","xs:gMonth","xs:gMonthDay","xs:gYear","xs:gYearMonth","xs:hexBinary","xs:ID","xs:IDREF","xs:IDREFS","xs:int","xs:integer","xs:item","xs:java","xs:language","xs:long","xs:Name","xs:NCName","xs:negativeInteger","xs:NMTOKEN","xs:NMTOKENS","xs:nonNegativeInteger","xs:nonPositiveInteger","xs:normalizedString","xs:NOTATION","xs:numeric","xs:positiveInteger","xs:precisionDecimal","xs:QName","xs:short","xs:string","xs:time","xs:token","xs:unsignedByte","xs:unsignedInt","xs:unsignedLong","xs:unsignedShort","xs:untyped","xs:untypedAtomic","xs:yearMonthDuration"];for(s=0,o=c.length;s<o;s++)a[c[s]]=n;var u=["eq","ne","lt","le","gt","ge",":=","=",">",">=","<","<=",".","|","?","and","or","div","idiv","mod","*","/","+","-"];for(s=0,o=u.length;s<o;s++)a[u[s]]=t;var l=["self::","attribute::","child::","descendant::","descendant-or-self::","parent::","ancestor::","ancestor-or-self::","following::","preceding::","following-sibling::","preceding-sibling::"];for(s=0,o=l.length;s<o;s++)a[l[s]]=r;return a}();function t(e,t,n){return t.tokenize=n,n(e,t)}function n(n,o){var m=n.next(),d=!1,g=x(n);if("<"==m){if(n.match("!--",!0))return t(n,o,c);if(n.match("![CDATA",!1))return o.tokenize=u,"tag";if(n.match("?",!1))return t(n,o,l);var k=n.eat("/");n.eatSpace();for(var v,b="";v=n.eat(/[^\s\u00a0=<>\"\'\/?]/);)b+=v;return t(n,o,s(b,k))}if("{"==m)return y(o,{type:"codeblock"}),null;if("}"==m)return h(o),null;if(f(o))return">"==m?"tag":"/"==m&&n.eat(">")?(h(o),"tag"):"variable";if(/\d/.test(m))return n.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/),"atom";if("("===m&&n.eat(":"))return y(o,{type:"comment"}),t(n,o,r);if(g||'"'!==m&&"'"!==m){if("$"===m)return t(n,o,i);if(":"===m&&n.eat("="))return"keyword";if("("===m)return y(o,{type:"paren"}),null;if(")"===m)return h(o),null;if("["===m)return y(o,{type:"bracket"}),null;if("]"===m)return h(o),null;var z=e.propertyIsEnumerable(m)&&e[m];if(g&&'"'===m)for(;'"'!==n.next(););if(g&&"'"===m)for(;"'"!==n.next(););z||n.eatWhile(/[\w\$_-]/);var w=n.eat(":");!n.eat(":")&&w&&n.eatWhile(/[\w\$_-]/),n.match(/^[ \t]*\(/,!1)&&(d=!0);var I=n.current();return z=e.propertyIsEnumerable(I)&&e[I],d&&!z&&(z={type:"function_call",style:"variable def"}),p(o)?(h(o),"variable"):("element"!=I&&"attribute"!=I&&"axis_specifier"!=z.type||y(o,{type:"xmlconstructor"}),z?z.style:"variable")}return t(n,o,a(m))}function r(e,t){for(var n,r=!1,a=!1,i=0;n=e.next();){if(")"==n&&r){if(!(i>0)){h(t);break}i--}else":"==n&&a&&i++;r=":"==n,a="("==n}return"comment"}function a(e,t){return function(r,i){var s;if(d(i)&&r.current()==e)return h(i),t&&(i.tokenize=t),"string";if(y(i,{type:"string",name:e,tokenize:a(e,t)}),r.match("{",!1)&&m(i))return i.tokenize=n,"string";for(;s=r.next();){if(s==e){h(i),t&&(i.tokenize=t);break}if(r.match("{",!1)&&m(i))return i.tokenize=n,"string"}return"string"}}function i(e,t){var r=/[\w\$_-]/;if(e.eat('"')){for(;'"'!==e.next(););e.eat(":")}else e.eatWhile(r),e.match(":=",!1)||e.eat(":");return e.eatWhile(r),t.tokenize=n,"variable"}function s(e,t){return function(r,a){return r.eatSpace(),t&&r.eat(">")?(h(a),a.tokenize=n,"tag"):(r.eat("/")||y(a,{type:"tag",name:e,tokenize:n}),r.eat(">")?(a.tokenize=n,"tag"):(a.tokenize=o,"tag"))}}function o(e,r){var i=e.next();return"/"==i&&e.eat(">")?(m(r)&&h(r),f(r)&&h(r),"tag"):">"==i?(m(r)&&h(r),"tag"):"="==i?null:'"'==i||"'"==i?t(e,r,a(i,o)):(m(r)||y(r,{type:"attribute",tokenize:o}),e.eat(/[a-zA-Z_:]/),e.eatWhile(/[-a-zA-Z0-9_:.]/),e.eatSpace(),(e.match(">",!1)||e.match("/",!1))&&(h(r),r.tokenize=n),"attribute")}function c(e,t){for(var r;r=e.next();)if("-"==r&&e.match("->",!0))return t.tokenize=n,"comment"}function u(e,t){for(var r;r=e.next();)if("]"==r&&e.match("]",!0))return t.tokenize=n,"comment"}function l(e,t){for(var r;r=e.next();)if("?"==r&&e.match(">",!0))return t.tokenize=n,"comment meta"}function f(e){return g(e,"tag")}function m(e){return g(e,"attribute")}function p(e){return g(e,"xmlconstructor")}function d(e){return g(e,"string")}function x(e){return'"'===e.current()?e.match(/^[^\"]+\"\:/,!1):"'"===e.current()&&e.match(/^[^\"]+\'\:/,!1)}function g(e,t){return e.stack.length&&e.stack[e.stack.length-1].type==t}function y(e,t){e.stack.push(t)}function h(e){e.stack.pop();var t=e.stack.length&&e.stack[e.stack.length-1].tokenize;e.tokenize=t||n}return{startState:function(){return{tokenize:n,cc:[],stack:[]}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},blockCommentStart:"(:",blockCommentEnd:":)"}})),e.defineMIME("application/xquery","xquery")}(n(129))}}]);