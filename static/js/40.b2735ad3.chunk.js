(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[40],{754:function(e,n,t){!function(e){"use strict";var n={},t=/[^\s\u00a0]/,i=e.Pos,l=e.cmpPos;function o(e){var n=e.search(t);return-1==n?0:n}function a(e,n,t){return/\bstring\b/.test(e.getTokenTypeAt(i(n.line,0)))&&!/^[\'\"\`]/.test(t)}function r(e,n){var t=e.getMode();return!1!==t.useInnerComments&&t.innerMode?e.getModeAt(n):t}e.commands.toggleComment=function(e){e.toggleComment()},e.defineExtension("toggleComment",(function(e){e||(e=n);for(var t=this,l=1/0,o=this.listSelections(),a=null,r=o.length-1;r>=0;r--){var m=o[r].from(),c=o[r].to();m.line>=l||(c.line>=l&&(c=i(l,0)),l=m.line,null==a?t.uncomment(m,c,e)?a="un":(t.lineComment(m,c,e),a="line"):"un"==a?t.uncomment(m,c,e):t.lineComment(m,c,e))}})),e.defineExtension("lineComment",(function(e,l,m){m||(m=n);var c=this,s=r(c,e),g=c.getLine(e.line);if(null!=g&&!a(c,e,g)){var f=m.lineComment||s.lineComment;if(f){var u=Math.min(0!=l.ch||l.line==e.line?l.line+1:l.line,c.lastLine()+1),h=null==m.padding?" ":m.padding,d=m.commentBlankLines||e.line==l.line;c.operation((function(){if(m.indent){for(var n=null,l=e.line;l<u;++l){var a=(r=c.getLine(l)).slice(0,o(r));(null==n||n.length>a.length)&&(n=a)}for(l=e.line;l<u;++l){var r=c.getLine(l),s=n.length;(d||t.test(r))&&(r.slice(0,s)!=n&&(s=o(r)),c.replaceRange(n+f+h,i(l,0),i(l,s)))}}else for(l=e.line;l<u;++l)(d||t.test(c.getLine(l)))&&c.replaceRange(f+h,i(l,0))}))}else(m.blockCommentStart||s.blockCommentStart)&&(m.fullLines=!0,c.blockComment(e,l,m))}})),e.defineExtension("blockComment",(function(e,o,a){a||(a=n);var m=this,c=r(m,e),s=a.blockCommentStart||c.blockCommentStart,g=a.blockCommentEnd||c.blockCommentEnd;if(s&&g){if(!/\bcomment\b/.test(m.getTokenTypeAt(i(e.line,0)))){var f=Math.min(o.line,m.lastLine());f!=e.line&&0==o.ch&&t.test(m.getLine(f))&&--f;var u=null==a.padding?" ":a.padding;e.line>f||m.operation((function(){if(0!=a.fullLines){var n=t.test(m.getLine(f));m.replaceRange(u+g,i(f)),m.replaceRange(s+u,i(e.line,0));var r=a.blockCommentLead||c.blockCommentLead;if(null!=r)for(var h=e.line+1;h<=f;++h)(h!=f||n)&&m.replaceRange(r+u,i(h,0))}else{var d=0==l(m.getCursor("to"),o),p=!m.somethingSelected();m.replaceRange(g,o),d&&m.setSelection(p?o:m.getCursor("from"),o),m.replaceRange(s,e)}}))}}else(a.lineComment||c.lineComment)&&0!=a.fullLines&&m.lineComment(e,o,a)})),e.defineExtension("uncomment",(function(e,l,o){o||(o=n);var a,m=this,c=r(m,e),s=Math.min(0!=l.ch||l.line==e.line?l.line:l.line-1,m.lastLine()),g=Math.min(e.line,s),f=o.lineComment||c.lineComment,u=[],h=null==o.padding?" ":o.padding;e:if(f){for(var d=g;d<=s;++d){var p=m.getLine(d),v=p.indexOf(f);if(v>-1&&!/comment/.test(m.getTokenTypeAt(i(d,v+1)))&&(v=-1),-1==v&&t.test(p))break e;if(v>-1&&t.test(p.slice(0,v)))break e;u.push(p)}if(m.operation((function(){for(var e=g;e<=s;++e){var n=u[e-g],t=n.indexOf(f),l=t+f.length;t<0||(n.slice(l,l+h.length)==h&&(l+=h.length),a=!0,m.replaceRange("",i(e,t),i(e,l)))}})),a)return!0}var C=o.blockCommentStart||c.blockCommentStart,k=o.blockCommentEnd||c.blockCommentEnd;if(!C||!k)return!1;var b=o.blockCommentLead||c.blockCommentLead,L=m.getLine(g),x=L.indexOf(C);if(-1==x)return!1;var R=s==g?L:m.getLine(s),O=R.indexOf(k,s==g?x+C.length:0),T=i(g,x+1),S=i(s,O+1);if(-1==O||!/comment/.test(m.getTokenTypeAt(T))||!/comment/.test(m.getTokenTypeAt(S))||m.getRange(T,S,"\n").indexOf(k)>-1)return!1;var E=L.lastIndexOf(C,e.ch),M=-1==E?-1:L.slice(0,e.ch).indexOf(k,E+C.length);if(-1!=E&&-1!=M&&M+k.length!=e.ch)return!1;M=R.indexOf(k,l.ch);var A=R.slice(l.ch).lastIndexOf(C,M-l.ch);return E=-1==M||-1==A?-1:l.ch+A,(-1==M||-1==E||E==l.ch)&&(m.operation((function(){m.replaceRange("",i(s,O-(h&&R.slice(O-h.length,O)==h?h.length:0)),i(s,O+k.length));var e=x+C.length;if(h&&L.slice(e,e+h.length)==h&&(e+=h.length),m.replaceRange("",i(g,x),i(g,e)),b)for(var n=g+1;n<=s;++n){var l=m.getLine(n),o=l.indexOf(b);if(-1!=o&&!t.test(l.slice(0,o))){var a=o+b.length;h&&l.slice(a,a+h.length)==h&&(a+=h.length),m.replaceRange("",i(n,o),i(n,a))}}})),!0)}))}(t(129))}}]);