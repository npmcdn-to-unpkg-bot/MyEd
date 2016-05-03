/*! build date  2013-12-17 */
/*!
 * cuSel -- stylized replacement for standard select
 * 
 * https://github.com/fetis/cusel
 *   
 * @version 3.0 alpha
 *
 * @requires jQuery 1.7+     
 * @requires jScrollPane.js
 * @requires jquery.mousewheel.js
 * 
 * Originally based on cuSel 2.5 by Evgeniy Ryzhkov, Alexey Choporov & Roman Omelkovitch
 *  
 */
function cuSel(a){function b(d,e,f){var g=d.outerWidth();if(0>=g){if(j>=f)return window.setTimeout(function(){b(d,e,f+1)},h),void 0;g=200}var k=d.prop("class"),l=d[0].id?d[0].id:"cuSel-"+Date.now()+"-"+e,m=d.prop("name"),n=d.val(),o=d.find("option[value='"+n+"']").eq(0),p=o.attr("addTags")?o.attr("addTags"):"",q=o.data("setclass")?o.data("setclass"):"",r=(o.text(),d.prop("disabled")),s=a.scrollArrows,t=d.prop("onchange"),u=d.prop("tabindex");r?(classDisCuselText="classDisCuselLabel",classDisCusel="classDisCusel"):(classDisCuselText="",classDisCusel=""),s&&(classDisCusel+=" cuselScrollArrows"),d.find("option").addClass("cuselItem"),o.addClass("cuselActive");var v=d.html(),w=v.replace(/option/gi,"span").replace(/value=/gi,"val=");if($.browser.msie&&parseInt($.browser.version)<9){var x=/(val=)(.*?)(>)/g;w=w.replace(x,"$1'$2'$3")}var y='<div class="cusel '+k+" "+classDisCusel+'"'+" id=cuselFrame-"+l+' style="width:'+g+'px"'+' tabindex="'+u+'"'+">"+'<div class="cuselFrameRight"></div>'+'<div data-class="'+q+'" class="cuselText '+q+'">'+p+"<label>"+o.text()+"</label></div>"+'<div class="cusel-scroll-wrap"><div class="cusel-scroll-pane" id="cusel-scroll-'+l+'">'+w+"</div></div>"+'<input type="hidden" id="'+l+'" name="'+m+'" value="'+n+'" />'+"</div>";d.replaceWith(y),t&&$("#"+l).bind("change",t);var z,A=$("#cuselFrame-"+l),B=A.find("span.cuselItem");B.wrapInner("<label/>"),B.eq(0).find("label").text()?z=B.eq(0).innerHeight():(z=B.eq(1).innerHeight(),B.eq(0).css("height",B.eq(1).height())),B.length>a.visRows?A.find(".cusel-scroll-wrap").eq(0).css({height:z*a.visRows+"px",display:"none",visibility:"visible"}).children(".cusel-scroll-pane").css("height",z*a.visRows+"px"):A.find(".cusel-scroll-wrap").eq(0).css({display:"none",visibility:"visible"});var C=$("#cusel-scroll-"+l).find("span[addTags]"),D=C.length;for(i=0;D>i;i++)C.eq(i).prepend(C.eq(i).attr("addTags")).removeAttr("addTags");c()}function c(){var a=g();$("html").off("click.cusel"),$("html").on("click.cusel",function(b){var c=$(b.target);if(c.attr("id"),c.prop("class"),(c.hasClass("cuselText")||c.hasClass("cuselFrameRight")||c.parents(".cuselText:first").length)&&!c.parents(".cusel:first").hasClass("classDisCusel")){var f=c.parents(".cusel:first").find(".cusel-scroll-wrap").eq(0);e(f)}else if(c.hasClass("cusel")&&!c.hasClass("classDisCusel")&&c.is("div")){var f=c.find(".cusel-scroll-wrap").eq(0);e(f)}else if(c.parents(".cuselItem:first").length&&!c.parents(".cuselItem:first").hasClass("cuselActive")||c.is(".cuselItem")&&!c.hasClass("cuselActive")){var g=c.is(".cuselItem")?c:c.parents(".cuselItem:first"),h=c.parents(".cusel:first").length?c.parents(".cusel:first"):$(a.data("cusel-select")),i=g.index();if(!h.length)return;h.removeClass("cuselOpen").find(".cuselActive").removeClass("cuselActive").end().find(".cuselItem").eq(i).addClass("cuselActive"),d(h,g),a.hide(),h.focus()}else{if(c.parents(".cusel-scroll-wrap").is("div"))return;a.is(":visible")&&(a.hide(),$(".cuselOpen").removeClass("cuselOpen"))}}),$(".cusel").off("keydown.cusel"),$(".cusel").on("keydown.cusel",function(a){var b,c=$(this),d=c.is(".cuselOpen")?!0:!1,e=$("#cuselBox");if(window.event?b=window.event.keyCode:a&&(b=a.which),null==b||0==b||9==b)return!0;if(-1!=c.prop("class").indexOf("classDisCusel"))return!1;switch(b){case 32:return d||c.trigger("click"),!1;case 40:case 39:if(d){var g=e.find(".cuselOptHover").eq(0).length?e.find(".cuselOptHover").eq(0):e.find(".cuselActive").eq(0),h=g.next();h.is(".cuselItem")&&(g.removeClass("cuselOptHover"),h.addClass("cuselOptHover"),f(e.find(".cusel-scroll-wrap").eq(0)))}else{var g=c.find(".cuselOptHover").eq(0).length?c.find(".cuselOptHover").eq(0):c.find(".cuselActive").eq(0),h=g.next();h.is(".cuselItem")&&h.trigger("click")}return!1;case 37:case 38:if(d){var g=e.find(".cuselOptHover").eq(0).length?e.find(".cuselOptHover").eq(0):e.find(".cuselActive").eq(0),i=g.prev();i.is(".cuselItem")&&(g.removeClass("cuselOptHover"),i.addClass("cuselOptHover"),f(e.find(".cusel-scroll-wrap").eq(0)))}else{var g=c.find(".cuselOptHover").eq(0).length?c.find(".cuselOptHover").eq(0):c.find(".cuselActive").eq(0),i=g.prev();i.is(".cuselItem")&&i.trigger("click")}return!1;case 27:d?(c.removeClass("cuselOpen"),e.hide()):c.blur();break;case 13:return d&&e.find(".cuselOptHover").eq(0).trigger("click").removeClass("cuselOptHover"),!1}});var b=[];$(".cusel").keypress(function(a){function c(){var a=[];for(var c in b)window.event?a[c]=b[c].keyCode:b[c]&&(a[c]=b[c].which),a[c]=String.fromCharCode(a[c]).toUpperCase();var d,e,g=h.find(".cuselItem label"),i=g.length;for(d=0;i>d;d++){var j=!0;for(var k in b)e=g.eq(d).text().charAt(k).toUpperCase(),e!=a[k]&&(j=!1);if(j){h.find(".cuselOptHover").removeClass("cuselOptHover").end().find(".cuselItem").eq(d).addClass("cuselOptHover"),f(h.find(".cusel-scroll-wrap").eq(0)),b=b.splice,b=[];break}}b=b.splice,b=[]}var d=$(this),e=d.is(".cuselOpen")?!0:!1;if(e){var g,h=$("#cuselBox");if(window.event?g=window.event.keyCode:a&&(g=a.which),null==g||0==g||9==g)return!0;if(-1!=$(this).prop("class").indexOf("classDisCusel"))return!1;b.push(a),clearTimeout($.data(this,"timer"));var i=setTimeout(function(){c()},500);if(d.data("timer",i),$.browser.opera&&9!=window.event.keyCode)return!1}})}function d(a,b){var c=b.data("setclass")?b.data("setclass"):"",d=a.find(".cuselText").data("class")?a.find(".cuselText").data("class"):"",e=b.attr("val");"undefined"==typeof e&&(e=b.find("label").text()),a.find(".cuselText").removeClass(d).data("class",c).addClass(c).html(b.html()).end().find("input").val(e).change()}function e(a){var b=a.parent(".cusel"),c=g();if($(".cuselOpen").removeClass("cuselOpen"),c.is(":hidden")){if(c.empty(),a.clone(!0).appendTo(c).show(),c.show().data("cusel-select",b[0]),$.ui)c.position({my:"left top",at:"left bottom",of:b});else{var d=b.offset();c.offset({left:d.left,top:d.top+b.outerHeight()})}c.css("min-width",b.outerWidth()+"px"),b.addClass("cuselOpen");var e=b.hasClass("cuselScrollArrows");c.find(".cusel-scroll-pane").jScrollPaneCusel({showArrows:e}),f(c.find(".cusel-scroll-wrap"))}else c.hide().removeData("cusel-select")}function f(a){var b=a.find(".cuselOptHover:first").length?a.find(".cuselOptHover:first"):a.find(".cuselActive:first");if(a.find(".jScrollPaneTrack:first").length&&b.length){var c=b.position();a.find(".cusel-scroll-pane:first")[0].id,a.find(".cusel-scroll-pane")[0].scrollTo(c.top)}}function g(){var a=$("#cuselBox");return a.length||(a=$('<div id="cuselBox">').hide().appendTo("body")),a}var h=250,j=20;$(a.changedEl).each(function(a){var c=$(this);c.is("select")&&!c.prop("multiple")&&b(c,a,1)})}function cuSelRefresh(a){var b,c=a.refreshEl.split(","),d=c.length;for(b=0;d>b;b++){var e=$(c[b]).parents(".cusel").find(".cusel-scroll-wrap").eq(0);e.find(".cusel-scroll-pane").jScrollPaneRemoveCusel(),e.css({visibility:"hidden",display:"block"});var f=e.find(".cuselItem"),g=f.eq(0).outerHeight();f.length>a.visRows?e.css({height:g*a.visRows+"px",display:"none",visibility:"visible"}).children(".cusel-scroll-pane").css("height",g*a.visRows+"px"):e.css({display:"none",visibility:"visible"})}}function cuselSetValue(a,b){var c=$(a).closest(".cusel"),d=c.find(".cuselItem[val="+b+"]").first();return d.length?(d.click(),void 0):!1}!function(a){a.jScrollPaneCusel={active:[]},a.fn.jScrollPaneCusel=function(b){b=a.extend({},a.fn.jScrollPaneCusel.defaults,b);var c=function(){return!1};return this.each(function(){function d(){var a=(_-K)/b.animateStep;a>1||-1>a?R(K+a):(R(_),bb())}var e=a(this),f=this.parentNode.offsetWidth;e.css("overflow","hidden");var g=this;if(a(this).parent().is(".jScrollPaneContainer")){var h=b.maintainPosition?e.position().top:0,i=a(this).parent(),j=f,k=i.outerHeight(),l=k;a(">.jScrollPaneTrack, >.jScrollArrowUp, >.jScrollArrowDown",i).remove(),e.css({top:0})}else{var h=0;this.originalPadding=e.css("paddingTop")+" "+e.css("paddingRight")+" "+e.css("paddingBottom")+" "+e.css("paddingLeft"),this.originalSidePaddingTotal=(parseInt(e.css("paddingLeft"))||0)+(parseInt(e.css("paddingRight"))||0);var j=f,k=e.innerHeight(),l=k;if(e.wrap("<div class='jScrollPaneContainer'></div>").parent().css({height:k+"px",width:j+"px"}),!window.navigator.userProfile){var m=parseInt(a(this).parent().css("border-left-width"))+parseInt(a(this).parent().css("border-right-width"));j-=m,a(this).css("width",j+"px").parent().css("width",j+"px")}a(document).bind("emchange",function(){e.jScrollPaneCusel(b)})}if(b.reinitialiseOnImageLoad){var n=a.data(g,"jScrollPaneImagesToLoad")||a("img",e),o=[];n.length&&n.each(function(c,d){a(this).bind("load",function(){-1==a.inArray(c,o)&&(o.push(d),n=a.grep(n,function(a){return a!=d}),a.data(g,"jScrollPaneImagesToLoad",n),b.reinitialiseOnImageLoad=!1,e.jScrollPaneCusel(b))}).each(function(){(this.complete||void 0===this.complete)&&(this.src=this.src)})})}var p=this.originalSidePaddingTotal,q={height:"auto",width:j-b.scrollbarWidth-b.scrollbarMargin-p+"px"};b.scrollbarOnLeft?q.paddingLeft=b.scrollbarMargin+b.scrollbarWidth+"px":q.paddingRight=b.scrollbarMargin+"px",e.css(q);var r=e.outerHeight(),s=k/r;if(.99>s){var t=e.parent();t.append(a('<div class="jScrollPaneTrack"></div>').css({width:b.scrollbarWidth+"px"}).append(a('<div class="jScrollPaneDrag"></div>').css({width:b.scrollbarWidth+"px"}).append(a('<div class="jScrollPaneDragTop"></div>').css({width:b.scrollbarWidth+"px"}),a('<div class="jScrollPaneDragBottom"></div>').css({width:b.scrollbarWidth+"px"}))));var u=a(">.jScrollPaneTrack",t),v=a(">.jScrollPaneTrack .jScrollPaneDrag",t);if(b.showArrows){var w,x,y,z,A=function(){(z>4||0==z%4)&&R(K+x*I),z++},B=function(){a("html").unbind("mouseup",B),w.removeClass("jScrollActiveArrowButton"),clearInterval(y)},C=function(){a("html").bind("mouseup",B),w.addClass("jScrollActiveArrowButton"),z=0,A(),y=setInterval(A,100)};t.append(a("<div></div>").attr({"class":"jScrollArrowUp"}).css({width:b.scrollbarWidth+"px"}).bind("mousedown",function(){return w=a(this),x=-1,C(),this.blur(),!1}).bind("click",c),a("<div></div>").attr({"class":"jScrollArrowDown"}).css({width:b.scrollbarWidth+"px"}).bind("mousedown",function(){return w=a(this),x=1,C(),this.blur(),!1}).bind("click",c));var D=a(">.jScrollArrowUp",t),E=a(">.jScrollArrowDown",t);if(b.arrowSize)l=k-b.arrowSize-b.arrowSize,u.css({height:l+"px",top:b.arrowSize+"px"});else{var F=D.height();b.arrowSize=F,l=k-F-E.height(),u.css({height:l+"px",top:F+"px"})}}var G,H,I,J=a(this).css({position:"absolute",overflow:"visible"}),K=0,L=s*k/2,M=function(a,b){var c="X"==b?"Left":"Top";return a["page"+b]||a["client"+b]+(document.documentElement["scroll"+c]||document.body["scroll"+c])||0},N=function(){return!1},O=function(){bb(),G=v.offset(),G.top-=K,H=l-v[0].offsetHeight,I=2*b.wheelSpeed*H/r},P=function(b){return O(),L=M(b,"Y")-K-G.top,a("html").bind("mouseup",Q).bind("mousemove",S),a.browser.msie&&a("html").bind("dragstart",N).bind("selectstart",N),!1},Q=function(){a("html").unbind("mouseup",Q).unbind("mousemove",S),L=s*k/2,a.browser.msie&&a("html").unbind("dragstart",N).unbind("selectstart",N)},R=function(a){a=0>a?0:a>H?H:a,K=a,v.css({top:a+"px"});var c=a/H;J.css({top:(k-r)*c+"px"}),e.trigger("scroll"),b.showArrows&&(D[0==a?"addClass":"removeClass"]("disabled"),E[a==H?"addClass":"removeClass"]("disabled"))},S=function(a){R(M(a,"Y")-G.top-L)},T=Math.max(Math.min(s*(k-2*b.arrowSize),b.dragMaxHeight),b.dragMinHeight);v.css({height:T+"px"}).bind("mousedown",P);var U,V,W,X=function(){(V>8||0==V%4)&&R(K-(K-W)/2),V++},Y=function(){clearInterval(U),a("html").unbind("mouseup",Y).unbind("mousemove",Z)},Z=function(a){W=M(a,"Y")-G.top-L},$=function(b){O(),Z(b),V=0,a("html").bind("mouseup",Y).bind("mousemove",Z),U=setInterval(X,100),X()};u.bind("mousedown",$),t.bind("mousewheel",function(a,b){return O(),bb(),R(K-b*I),!1});var _,ab,bb=function(){ab&&(clearInterval(ab),delete _)},cb=function(c,f){if("string"==typeof c){if($e=a(c,e),!$e.length)return;c=$e.offset().top-e.offset().top}t.scrollTop(0),bb();var g=-c/(k-r)*H;f||!b.animateTo?R(g):(_=g,ab=setInterval(d,b.animateInterval))};e[0].scrollTo=cb,e[0].scrollBy=function(a){var b=-parseInt(J.css("top"))||0;cb(b+a)},O(),cb(-h,!0),a("*",this).bind("focus",function(){for(var c=a(this),d=0;c[0]!=e[0];)d+=c.position().top,c=c.offsetParent();var f=-parseInt(J.css("top"))||0,g=f+k,h=d>f&&g>d;if(!h){var i=d-b.scrollbarMargin;d>f&&(i+=a(this).height()+15+b.scrollbarMargin-k),cb(i)}}),location.hash&&cb(location.hash),a(document).bind("click",function(b){if($target=a(b.target),$target.is("a")){var c=$target.attr("href");"#"==c.substr(0,1)&&cb(c)}}),a.jScrollPaneCusel.active.push(e[0])}else e.css({height:k+"px",width:j-this.originalSidePaddingTotal+"px",padding:this.originalPadding}),e.parent().unbind("mousewheel")})},a.fn.jScrollPaneRemoveCusel=function(){a(this).each(function(){$this=a(this);var b=$this.parent();b.is(".jScrollPaneContainer")&&($this.css({top:"",height:"",width:"",padding:"",overflow:"",position:""}),$this.attr("style",$this.data("originalStyleTag")),b.after($this).remove())})},a.fn.jScrollPaneCusel.defaults={scrollbarWidth:10,scrollbarMargin:5,wheelSpeed:18,showArrows:!1,arrowSize:0,animateTo:!1,dragMinHeight:1,dragMaxHeight:99999,animateInterval:100,animateStep:3,maintainPosition:!0,scrollbarOnLeft:!1,reinitialiseOnImageLoad:!1},a(window).bind("unload",function(){for(var b=a.jScrollPaneCusel.active,c=0;c<b.length;c++)b[c].scrollTo=b[c].scrollBy=null})}(jQuery),/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
function(a){function b(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=0,g=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),g=e,void 0!==c.axis&&c.axis===c.HORIZONTAL_AXIS&&(g=0,f=-1*e),void 0!==c.wheelDeltaY&&(g=c.wheelDeltaY/120),void 0!==c.wheelDeltaX&&(f=-1*c.wheelDeltaX/120),d.unshift(b,e,f,g),(a.event.dispatch||a.event.handle).apply(this,d)}var c=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var d=c.length;d;)a.event.fixHooks[c[--d]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=c.length;a;)this.addEventListener(c[--a],b,!1);else this.onmousewheel=b},teardown:function(){if(this.removeEventListener)for(var a=c.length;a;)this.removeEventListener(c[--a],b,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})}(jQuery);