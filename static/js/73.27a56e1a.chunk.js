(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[73],{620:function(e,a,n){!function(e){"use strict";e.overlayMode=function(a,n,o){return{startState:function(){return{base:e.startState(a),overlay:e.startState(n),basePos:0,baseCur:null,overlayPos:0,overlayCur:null,streamSeen:null}},copyState:function(o){return{base:e.copyState(a,o.base),overlay:e.copyState(n,o.overlay),basePos:o.basePos,baseCur:null,overlayPos:o.overlayPos,overlayCur:null}},token:function(e,r){return(e!=r.streamSeen||Math.min(r.basePos,r.overlayPos)<e.start)&&(r.streamSeen=e,r.basePos=r.overlayPos=e.start),e.start==r.basePos&&(r.baseCur=a.token(e,r.base),r.basePos=e.pos),e.start==r.overlayPos&&(e.pos=e.start,r.overlayCur=n.token(e,r.overlay),r.overlayPos=e.pos),e.pos=Math.min(r.basePos,r.overlayPos),null==r.overlayCur?r.baseCur:null!=r.baseCur&&r.overlay.combineTokens||o&&null==r.overlay.combineTokens?r.baseCur+" "+r.overlayCur:r.overlayCur},indent:a.indent&&function(e,n,o){return a.indent(e.base,n,o)},electricChars:a.electricChars,innerMode:function(e){return{state:e.base,mode:a}},blankLine:function(e){var r,s;return a.blankLine&&(r=a.blankLine(e.base)),n.blankLine&&(s=n.blankLine(e.overlay)),null==s?r:o&&null!=r?r+" "+s:s}}}}(n(129))}}]);