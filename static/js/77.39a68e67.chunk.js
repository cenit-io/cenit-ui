(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[77],{627:function(t,e,i){!function(t){"use strict";function e(t,e){function i(t){clearTimeout(n.doRedraw),n.doRedraw=setTimeout((function(){n.redraw()}),t)}this.cm=t,this.options=e,this.buttonHeight=e.scrollButtonHeight||t.getOption("scrollButtonHeight"),this.annotations=[],this.doRedraw=this.doUpdate=null,this.div=t.getWrapperElement().appendChild(document.createElement("div")),this.div.style.cssText="position: absolute; right: 0; top: 0; z-index: 7; pointer-events: none",this.computeScale();var n=this;t.on("refresh",this.resizeHandler=function(){clearTimeout(n.doUpdate),n.doUpdate=setTimeout((function(){n.computeScale()&&i(20)}),100)}),t.on("markerAdded",this.resizeHandler),t.on("markerCleared",this.resizeHandler),!1!==e.listenForChanges&&t.on("changes",this.changeHandler=function(){i(250)})}t.defineExtension("annotateScrollbar",(function(t){return"string"==typeof t&&(t={className:t}),new e(this,t)})),t.defineOption("scrollButtonHeight",0),e.prototype.computeScale=function(){var t=this.cm,e=(t.getWrapperElement().clientHeight-t.display.barHeight-2*this.buttonHeight)/t.getScrollerElement().scrollHeight;if(e!=this.hScale)return this.hScale=e,!0},e.prototype.update=function(t){this.annotations=t,this.redraw()},e.prototype.redraw=function(t){!1!==t&&this.computeScale();var e=this.cm,i=this.hScale,n=document.createDocumentFragment(),o=this.annotations,a=e.getOption("lineWrapping"),s=a&&1.5*e.defaultTextHeight(),r=null,h=null;function l(t,i){if(r!=t.line){r=t.line,h=e.getLineHandle(t.line);var n=e.getLineHandleVisualStart(h);n!=h&&(r=e.getLineNumber(n),h=n)}return h.widgets&&h.widgets.length||a&&h.height>s?e.charCoords(t,"local")[i?"top":"bottom"]:e.heightAtLine(h,"local")+(i?0:h.height)}var d=e.lastLine();if(e.display.barWidth)for(var c,p=0;p<o.length;p++){var u=o[p];if(!(u.to.line>d)){for(var m=c||l(u.from,!0)*i,g=l(u.to,!1)*i;p<o.length-1&&!(o[p+1].to.line>d)&&!((c=l(o[p+1].from,!0)*i)>g+.9);)g=l((u=o[++p]).to,!1)*i;if(g!=m){var f=Math.max(g-m,3),H=n.appendChild(document.createElement("div"));H.style.cssText="position: absolute; right: 0px; width: "+Math.max(e.display.barWidth-1,2)+"px; top: "+(m+this.buttonHeight)+"px; height: "+f+"px",H.className=this.options.className,u.id&&H.setAttribute("annotation-id",u.id)}}}this.div.textContent="",this.div.appendChild(n)},e.prototype.clear=function(){this.cm.off("refresh",this.resizeHandler),this.cm.off("markerAdded",this.resizeHandler),this.cm.off("markerCleared",this.resizeHandler),this.changeHandler&&this.cm.off("changes",this.changeHandler),this.div.parentNode.removeChild(this.div)}}(i(129))}}]);