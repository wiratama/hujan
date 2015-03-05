/*
*** Place any jQuery/helper plugins in here, instead of separate, slower script files. ***

Table of Contents:
==================
1. ScrollTo						- v1.4.2
	- http://flesler.blogspot.com/2007/10/jqueryscrollto.html
2. Easing						- v1.3
	- http://gsgd.co.uk/sandbox/jquery/easing/
3. HoverScroll					- v0.2.4
	- http://rascarlito.free.fr/hoverscroll/
4. Supersized					- v3.2.1
	- http://buildinternet.com/project/supersized/
5. Supersized Theme: Shutter	- v1.1
	- http://buildinternet.com/project/supersized/

JS Debug

Compressor - http://www.refresh-sf.com/yui/
*/





// 1. ScrollTo
/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);





// 2. Easing
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright å© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright å© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */





// 3. HoverScroll
/**
 * HoverScroll jQuery Plugin
 *
 * Make an unordered list scrollable by hovering the mouse over it
 *
 * @author RasCarlito <carl.ogren@gmail.com>
 * @version 0.2.4
 * @revision 21
 *
 * 
 *
 * FREE BEER LICENSE VERSION 1.02
 *
 * The free beer license is a license to give free software to you and free
 * beer (in)to the author(s).
 * 
 *
 * Released: 09-12-2010 11:31pm
 *
 * Changelog
 * ----------------------------------------------------
 *
 * 0.2.4    - Added "Right to Left" option, only works with horizontal lists
 *          - Optimization of arrows opacity control (Thanks to Josef Körner)
 *
 * 0.2.3    - Added fixed arrows option
 *          - Binded startMoving and stopMoving functions to the HoverScrolls HTML object for external access
 *
 * 0.2.2    Bug fixes
 *          - Backward compatibility with jQuery 1.1.x
 *          - Added test file to the archive
 *          - Bug fix: The right arrow appeared when it wasn't necessary (thanks to <admin at unix dot am>)
 *        
 * 0.2.1    Bug fixes
 *          - Backward compatibility with jQuery 1.2.x (thanks to Andy Mull for compatibility with jQuery >= 1.2.4)
 *          - Added information to the debug log
 * 
 * 0.2.0    Added some new features
 *          - Direction indicator arrows
 *          - Permanent override of default parameters
 * 
 * 0.1.1    Minor bug fix
 *          - Hover zones did not cover the complete container
 *
 *          note: The css file has not changed therefore it is still versioned 0.1.0
 *
 * 0.1.0    First release of the plugin. Supports:
 *          - Horizontal and vertical lists
 *          - Width and height control
 *          - Debug log (doesn't show useful information for the moment)
 */
 /**
 * @method hoverscroll
 * @param	params {Object}  Parameter list
 * 	params = {
 * 		vertical {Boolean},	// Vertical list or not ?
 * 		width {Integer},	// Width of list container
 * 		height {Integer},	// Height of list container
 *  	arrows {Boolean},	// Show direction indicators or not
 *  	arrowsOpacity {Float},	// Arrows maximum opacity
 *  	fixedArrows {Boolean},  // Display arrows permenantly, this overrides arrowsOpacity option
 * 		debug {Boolean}		// Debug output in firebug console
 * 	};
 */
(function(a){a.fn.hoverscroll=function(b){if(!b){b={}}b=a.extend({},a.fn.hoverscroll.params,b);this.each(function(){function q(){if(e[0].isChanging==false){return}n();var a;if(!b.vertical){a="scrollLeft"}else{a="scrollTop"}d[0][a]+=e[0].direction*e[0].speed;e[0].timer=setTimeout(function(){q()},50)}function p(){if(e[0].isChanging){if(b.debug){a.log("[HoverScroll] Stoped moving")}e[0].isChanging=false;e[0].direction=0;e[0].speed=1;clearTimeout(e[0].timer)}}function o(c,d){if(e[0].direction!=c){if(b.debug){a.log("[HoverScroll] Starting to move. direction: "+c+", speed: "+d)}p();e[0].direction=c;e[0].isChanging=true;q()}if(e[0].speed!=d){if(b.debug){a.log("[HoverScroll] Changed speed: "+d)}e[0].speed=d}}function n(){if(!b.arrows||b.fixedArrows){return}var c;var f;if(!b.vertical){c=d[0].scrollWidth-d.width();f=d[0].scrollLeft}else{c=d[0].scrollHeight-d.height();f=d[0].scrollTop}var g=b.arrowsOpacity;var h=f/c*g;if(h>g){h=g}if(isNaN(h)){h=0}var i=false;if(h<=0){a("div.arrow.left, div.arrow.top",e).hide();if(c>0){a("div.arrow.right, div.arrow.bottom",e).show().css("opacity",g)}i=true}if(h>=g||c<=0){a("div.arrow.right, div.arrow.bottom",e).hide();i=true}if(!i){a("div.arrow.left, div.arrow.top",e).show().css("opacity",h);a("div.arrow.right, div.arrow.bottom",e).show().css("opacity",g-h)}}function m(a,c){a=a-e.offset().left;c=c-e.offset().top;var d;if(!b.vertical){d=a}else{d=c}for(i in l){if(d>=l[i].from&&d<l[i].to){if(l[i].action=="move"){o(l[i].direction,l[i].speed)}else{p()}}}}var c=a(this);if(b.debug){a.log("[HoverScroll] Trying to create hoverscroll on element "+this.tagName+"#"+this.id)}if(b.fixedArrows){c.wrap('<div class="fixed-listcontainer"></div>')}else{c.wrap('<div class="listcontainer"></div>')}c.addClass("list");var d=c.parent();d.wrap('<div class="ui-widget-content hoverscroll'+(b.rtl&&!b.vertical?" rtl":"")+'"></div>');var e=d.parent();var f,g,h,j;if(b.arrows){if(!b.vertical){if(b.fixedArrows){f='<div class="fixed-arrow left"></div>';g='<div class="fixed-arrow right"></div>';d.before(f).after(g)}else{f='<div class="arrow left"></div>';g='<div class="arrow right"></div>';d.append(f).append(g)}}else{if(b.fixedArrows){h='<div class="fixed-arrow top"></div>';j='<div class="fixed-arrow bottom"></div>';d.before(h).after(j)}else{h='<div class="arrow top"></div>';j='<div class="arrow bottom"></div>';d.append(h).append(j)}}}e.width(b.width).height(b.height);if(b.arrows&&b.fixedArrows){if(b.vertical){h=d.prev();j=d.next();d.width(b.width).height(b.height-(h.height()+j.height()))}else{f=d.prev();g=d.next();d.height(b.height).width(b.width-(f.width()+g.width()))}}else{d.width(b.width).height(b.height)}var k=0;if(!b.vertical){e.addClass("horizontal");c.children().each(function(){a(this).addClass("item");if(a(this).outerWidth){k+=a(this).outerWidth(true)}else{k+=a(this).width()+parseInt(a(this).css("padding-left"))+parseInt(a(this).css("padding-right"))+parseInt(a(this).css("margin-left"))+parseInt(a(this).css("margin-right"))}});c.width(k);if(b.debug){a.log("[HoverScroll] Computed content width : "+k+"px")}if(e.outerWidth){k=e.outerWidth()}else{k=e.width()+parseInt(e.css("padding-left"))+parseInt(e.css("padding-right"))+parseInt(e.css("margin-left"))+parseInt(e.css("margin-right"))}if(b.debug){a.log("[HoverScroll] Computed container width : "+k+"px")}}else{e.addClass("vertical");c.children().each(function(){a(this).addClass("item");if(a(this).outerHeight){k+=a(this).outerHeight(true)}else{k+=a(this).height()+parseInt(a(this).css("padding-top"))+parseInt(a(this).css("padding-bottom"))+parseInt(a(this).css("margin-bottom"))+parseInt(a(this).css("margin-bottom"))}});c.height(k);if(b.debug){a.log("[HoverScroll] Computed content height : "+k+"px")}if(e.outerHeight){k=e.outerHeight()}else{k=e.height()+parseInt(e.css("padding-top"))+parseInt(e.css("padding-bottom"))+parseInt(e.css("margin-top"))+parseInt(e.css("margin-bottom"))}if(b.debug){a.log("[HoverScroll] Computed container height : "+k+"px")}}var l={1:{action:"move",from:0,to:.06*k,direction:-1,speed:16},2:{action:"move",from:.06*k,to:.15*k,direction:-1,speed:8},3:{action:"move",from:.15*k,to:.25*k,direction:-1,speed:4},4:{action:"move",from:.25*k,to:.4*k,direction:-1,speed:2},5:{action:"stop",from:.4*k,to:.6*k},6:{action:"move",from:.6*k,to:.75*k,direction:1,speed:2},7:{action:"move",from:.75*k,to:.85*k,direction:1,speed:4},8:{action:"move",from:.85*k,to:.94*k,direction:1,speed:8},9:{action:"move",from:.94*k,to:k,direction:1,speed:16}};e[0].isChanging=false;e[0].direction=0;e[0].speed=1;if(b.rtl&&!b.vertical){d[0].scrollLeft=d[0].scrollWidth-d.width()}e.mousemove(function(a){m(a.pageX,a.pageY)}).bind("mouseleave",function(){p()});this.startMoving=o;this.stopMoving=p;if(b.arrows&&!b.fixedArrows){n()}else{a(".arrowleft, .arrowright, .arrowtop, .arrowbottom",e).hide()}});return this};if(!a.fn.offset){a.fn.offset=function(){this.left=this.top=0;if(this[0]&&this[0].offsetParent){var a=this[0];do{this.left+=a.offsetLeft;this.top+=a.offsetTop}while(a=a.offsetParent)}return this}}a.fn.hoverscroll.params={vertical:false,width:400,height:50,arrows:true,arrowsOpacity:.7,fixedArrows:false,rtl:false,debug:false};a.log=function(){try{console.log.apply(console,arguments)}catch(a){try{opera.postError.apply(opera,arguments)}catch(a){}}}})(jQuery);





// 4. Supersized
/*

	Supersized - Fullscreen Slideshow jQuery Plugin
	Version : 3.2.6
	Site	: www.buildinternet.com/project/supersized
	
	Author	: Sam Dunn
	Company : One Mighty Roar (www.onemightyroar.com)
	License : MIT License / GPL License
	
*/
(function(a){a(document).ready(function(){a("body").append('<div id="supersized-loader"></div><ul id="supersized"></ul>')});a.supersized=function(b){var c="#supersized",d=this;d.$el=a(c);d.el=c;vars=a.supersized.vars;d.$el.data("supersized",d);api=d.$el.data("supersized");d.init=function(){a.supersized.vars=a.extend(a.supersized.vars,a.supersized.themeVars);a.supersized.vars.options=a.extend({},a.supersized.defaultOptions,a.supersized.themeOptions,b);d.options=a.supersized.vars.options;d._build()};d._build=function(){var g=0,e="",j="",h,f="",i;while(g<=d.options.slides.length-1){switch(d.options.slide_links){case"num":h=g;break;case"name":h=d.options.slides[g].title;break;case"blank":h="";break}e=e+'<li class="slide-'+g+'"></li>';if(g==d.options.start_slide-1){if(d.options.slide_links){j=j+'<li class="slide-link-'+g+' current-slide"><a>'+h+"</a></li>"}if(d.options.thumb_links){d.options.slides[g].thumb?i=d.options.slides[g].thumb:i=d.options.slides[g].image;f=f+'<li class="thumb'+g+' current-thumb"><img src="'+i+'"/></li>'}}else{if(d.options.slide_links){j=j+'<li class="slide-link-'+g+'" ><a>'+h+"</a></li>"}if(d.options.thumb_links){d.options.slides[g].thumb?i=d.options.slides[g].thumb:i=d.options.slides[g].image;f=f+'<li class="thumb'+g+'"><img src="'+i+'"/></li>'}}g++}if(d.options.slide_links){a(vars.slide_list).html(j)}if(d.options.thumb_links&&vars.thumb_tray.length){a(vars.thumb_tray).append('<ul id="'+vars.thumb_list.replace("#","")+'">'+f+"</ul>")}a(d.el).append(e);if(d.options.thumbnail_navigation){vars.current_slide-1<0?prevThumb=d.options.slides.length-1:prevThumb=vars.current_slide-1;a(vars.prev_thumb).show().html(a("<img/>").attr("src",d.options.slides[prevThumb].image));vars.current_slide==d.options.slides.length-1?nextThumb=0:nextThumb=vars.current_slide+1;a(vars.next_thumb).show().html(a("<img/>").attr("src",d.options.slides[nextThumb].image))}d._start()};d._start=function(){if(d.options.start_slide){vars.current_slide=d.options.start_slide-1}else{vars.current_slide=Math.floor(Math.random()*d.options.slides.length)}var o=d.options.new_window?' target="_blank"':"";if(d.options.performance==3){d.$el.addClass("speed")}else{if((d.options.performance==1)||(d.options.performance==2)){d.$el.addClass("quality")}}if(d.options.random){arr=d.options.slides;for(var h,m,k=arr.length;k;h=parseInt(Math.random()*k),m=arr[--k],arr[k]=arr[h],arr[h]=m){}d.options.slides=arr}if(d.options.slides.length>1){if(d.options.slides.length>2){vars.current_slide-1<0?loadPrev=d.options.slides.length-1:loadPrev=vars.current_slide-1;var g=(d.options.slides[loadPrev].url)?"href='"+d.options.slides[loadPrev].url+"'":"";var q=a('<img src="'+d.options.slides[loadPrev].image+'"/>');var n=d.el+" li:eq("+loadPrev+")";q.appendTo(n).wrap("<a "+g+o+"></a>").parent().parent().addClass("image-loading prevslide");q.load(function(){a(this).data("origWidth",a(this).width()).data("origHeight",a(this).height());d.resizeNow()})}}else{d.options.slideshow=0}g=(api.getField("url"))?"href='"+api.getField("url")+"'":"";var l=a('<img src="'+api.getField("image")+'"/>');var f=d.el+" li:eq("+vars.current_slide+")";l.appendTo(f).wrap("<a "+g+o+"></a>").parent().parent().addClass("image-loading activeslide");l.load(function(){d._origDim(a(this));d.resizeNow();d.launch();if(typeof theme!="undefined"&&typeof theme._init=="function"){theme._init()}});if(d.options.slides.length>1){vars.current_slide==d.options.slides.length-1?loadNext=0:loadNext=vars.current_slide+1;g=(d.options.slides[loadNext].url)?"href='"+d.options.slides[loadNext].url+"'":"";var e=a('<img src="'+d.options.slides[loadNext].image+'"/>');var p=d.el+" li:eq("+loadNext+")";e.appendTo(p).wrap("<a "+g+o+"></a>").parent().parent().addClass("image-loading");e.load(function(){a(this).data("origWidth",a(this).width()).data("origHeight",a(this).height());d.resizeNow()})}d.$el.css("visibility","hidden");a(".load-item").hide()};d.launch=function(){d.$el.css("visibility","visible");a("#supersized-loader").remove();if(typeof theme!="undefined"&&typeof theme.beforeAnimation=="function"){theme.beforeAnimation("next")}a(".load-item").show();if(d.options.keyboard_nav){a(document.documentElement).keyup(function(e){if(vars.in_animation){return false}if((e.keyCode==37)||(e.keyCode==40)){clearInterval(vars.slideshow_interval);d.prevSlide()}else{if((e.keyCode==39)||(e.keyCode==38)){clearInterval(vars.slideshow_interval);d.nextSlide()}else{if(e.keyCode==32&&!vars.hover_pause){clearInterval(vars.slideshow_interval);d.playToggle()}}}})}if(d.options.slideshow&&d.options.pause_hover){a(d.el).hover(function(){if(vars.in_animation){return false}vars.hover_pause=true;if(!vars.is_paused){vars.hover_pause="resume";d.playToggle()}},function(){if(vars.hover_pause=="resume"){d.playToggle();vars.hover_pause=false}})}if(d.options.slide_links){a(vars.slide_list+"> li").click(function(){index=a(vars.slide_list+"> li").index(this);targetSlide=index+1;d.goTo(targetSlide);return false})}if(d.options.thumb_links){a(vars.thumb_list+"> li").click(function(){index=a(vars.thumb_list+"> li").index(this);targetSlide=index+1;api.goTo(targetSlide);return false})}if(d.options.slideshow&&d.options.slides.length>1){if(d.options.autoplay&&d.options.slides.length>1){vars.slideshow_interval=setInterval(d.nextSlide,d.options.slide_interval)}else{vars.is_paused=true}a(".load-item img").bind("contextmenu mousedown",function(){return false})}a(window).resize(function(){d.resizeNow()})};d.resizeNow=function(){return d.$el.each(function(){a("img",d.el).each(function(){thisSlide=a(this);var f=(thisSlide.data("origHeight")/thisSlide.data("origWidth")).toFixed(2);var e=d.$el.width(),h=d.$el.height(),i;if(d.options.fit_always){if((h/e)>f){g()}else{j()}}else{if((h<=d.options.min_height)&&(e<=d.options.min_width)){if((h/e)>f){d.options.fit_landscape&&f<1?g(true):j(true)}else{d.options.fit_portrait&&f>=1?j(true):g(true)}}else{if(e<=d.options.min_width){if((h/e)>f){d.options.fit_landscape&&f<1?g(true):j()}else{d.options.fit_portrait&&f>=1?j():g(true)}}else{if(h<=d.options.min_height){if((h/e)>f){d.options.fit_landscape&&f<1?g():j(true)}else{d.options.fit_portrait&&f>=1?j(true):g()}}else{if((h/e)>f){d.options.fit_landscape&&f<1?g():j()}else{d.options.fit_portrait&&f>=1?j():g()}}}}}function g(k){if(k){if(thisSlide.width()<e||thisSlide.width()<d.options.min_width){if(thisSlide.width()*f>=d.options.min_height){thisSlide.width(d.options.min_width);thisSlide.height(thisSlide.width()*f)}else{j()}}}else{if(d.options.min_height>=h&&!d.options.fit_landscape){if(e*f>=d.options.min_height||(e*f>=d.options.min_height&&f<=1)){thisSlide.width(e);thisSlide.height(e*f)}else{if(f>1){thisSlide.height(d.options.min_height);thisSlide.width(thisSlide.height()/f)}else{if(thisSlide.width()<e){thisSlide.width(e);thisSlide.height(thisSlide.width()*f)}}}}else{thisSlide.width(e);thisSlide.height(e*f)}}}function j(k){if(k){if(thisSlide.height()<h){if(thisSlide.height()/f>=d.options.min_width){thisSlide.height(d.options.min_height);thisSlide.width(thisSlide.height()/f)}else{g(true)}}}else{if(d.options.min_width>=e){if(h/f>=d.options.min_width||f>1){thisSlide.height(h);thisSlide.width(h/f)}else{if(f<=1){thisSlide.width(d.options.min_width);thisSlide.height(thisSlide.width()*f)}}}else{thisSlide.height(h);thisSlide.width(h/f)}}}if(thisSlide.parents("li").hasClass("image-loading")){a(".image-loading").removeClass("image-loading")}if(d.options.horizontal_center){a(this).css("left",(e-a(this).width())/2)}if(d.options.vertical_center){a(this).css("top",(h-a(this).height())/2)}});if(d.options.image_protect){a("img",d.el).bind("contextmenu mousedown",function(){return false})}return false})};d.nextSlide=function(){if(vars.in_animation||!api.options.slideshow){return false}else{vars.in_animation=true}clearInterval(vars.slideshow_interval);var h=d.options.slides,e=d.$el.find(".activeslide");a(".prevslide").removeClass("prevslide");e.removeClass("activeslide").addClass("prevslide");vars.current_slide+1==d.options.slides.length?vars.current_slide=0:vars.current_slide++;var g=a(d.el+" li:eq("+vars.current_slide+")"),i=d.$el.find(".prevslide");if(d.options.performance==1){d.$el.removeClass("quality").addClass("speed")}loadSlide=false;vars.current_slide==d.options.slides.length-1?loadSlide=0:loadSlide=vars.current_slide+1;var k=d.el+" li:eq("+loadSlide+")";if(!a(k).html()){var j=d.options.new_window?' target="_blank"':"";imageLink=(d.options.slides[loadSlide].url)?"href='"+d.options.slides[loadSlide].url+"'":"";var f=a('<img src="'+d.options.slides[loadSlide].image+'"/>');f.appendTo(k).wrap("<a "+imageLink+j+"></a>").parent().parent().addClass("image-loading").css("visibility","hidden");f.load(function(){d._origDim(a(this));d.resizeNow()})}if(d.options.thumbnail_navigation==1){vars.current_slide-1<0?prevThumb=d.options.slides.length-1:prevThumb=vars.current_slide-1;a(vars.prev_thumb).html(a("<img/>").attr("src",d.options.slides[prevThumb].image));nextThumb=loadSlide;a(vars.next_thumb).html(a("<img/>").attr("src",d.options.slides[nextThumb].image))}if(typeof theme!="undefined"&&typeof theme.beforeAnimation=="function"){theme.beforeAnimation("next")}if(d.options.slide_links){a(".current-slide").removeClass("current-slide");a(vars.slide_list+"> li").eq(vars.current_slide).addClass("current-slide")}g.css("visibility","hidden").addClass("activeslide");switch(d.options.transition){case 0:case"none":g.css("visibility","visible");vars.in_animation=false;break;case 1:case"fade":g.animate({opacity:0},0).css("visibility","visible").animate({opacity:1,avoidTransforms:false},d.options.transition_speed,function(){d.afterAnimation()});break;case 2:case"slideTop":g.animate({top:-d.$el.height()},0).css("visibility","visible").animate({top:0,avoidTransforms:false},d.options.transition_speed,function(){d.afterAnimation()});break;case 3:case"slideRight":g.animate({left:d.$el.width()},0).css("visibility","visible").animate({left:0,avoidTransforms:false},d.options.transition_speed,function(){d.afterAnimation()});break;case 4:case"slideBottom":g.animate({top:d.$el.height()},0).css("visibility","visible").animate({top:0,avoidTransforms:false},d.options.transition_speed,function(){d.afterAnimation()});break;case 5:case"slideLeft":g.animate({left:-d.$el.width()},0).css("visibility","visible").animate({left:0,avoidTransforms:false},d.options.transition_speed,function(){d.afterAnimation()});break;case 6:case"carouselRight":g.animate({left:d.$el.width()},0).css("visibility","visible").animate({left:0,avoidTransforms:false},d.options.transition_speed,function(){d.afterAnimation()});e.animate({left:-d.$el.width(),avoidTransforms:false},d.options.transition_speed);break;case 7:case"carouselLeft":g.animate({left:-d.$el.width()},0).css("visibility","visible").animate({left:0,avoidTransforms:false},d.options.transition_speed,function(){d.afterAnimation()});e.animate({left:d.$el.width(),avoidTransforms:false},d.options.transition_speed);break}return false};d.prevSlide=function(){if(vars.in_animation||!api.options.slideshow){return false}else{vars.in_animation=true}clearInterval(vars.slideshow_interval);var h=d.options.slides,e=d.$el.find(".activeslide");a(".prevslide").removeClass("prevslide");e.removeClass("activeslide").addClass("prevslide");vars.current_slide==0?vars.current_slide=d.options.slides.length-1:vars.current_slide--;var g=a(d.el+" li:eq("+vars.current_slide+")"),i=d.$el.find(".prevslide");if(d.options.performance==1){d.$el.removeClass("quality").addClass("speed")}loadSlide=vars.current_slide;var k=d.el+" li:eq("+loadSlide+")";if(!a(k).html()){var j=d.options.new_window?' target="_blank"':"";imageLink=(d.options.slides[loadSlide].url)?"href='"+d.options.slides[loadSlide].url+"'":"";var f=a('<img src="'+d.options.slides[loadSlide].image+'"/>');f.appendTo(k).wrap("<a "+imageLink+j+"></a>").parent().parent().addClass("image-loading").css("visibility","hidden");f.load(function(){d._origDim(a(this));d.resizeNow()})}if(d.options.thumbnail_navigation==1){prevThumb=loadSlide;a(vars.prev_thumb).html(a("<img/>").attr("src",d.options.slides[prevThumb].image));vars.current_slide==d.options.slides.length-1?nextThumb=0:nextThumb=vars.current_slide+1;a(vars.next_thumb).html(a("<img/>").attr("src",d.options.slides[nextThumb].image))}if(typeof theme!="undefined"&&typeof theme.beforeAnimation=="function"){theme.beforeAnimation("prev")}if(d.options.slide_links){a(".current-slide").removeClass("current-slide");a(vars.slide_list+"> li").eq(vars.current_slide).addClass("current-slide")}g.css("visibility","hidden").addClass("activeslide");switch(d.options.transition){case 0:case"none":g.css("visibility","visible");vars.in_animation=false;d.afterAnimation();break;case 1:case"fade":g.animate({opacity:0},0).css("visibility","visible").animate({opacity:1,avoidTransforms:false},d.options.transition_speed,function(){d.afterAnimation()});break;case 2:case"slideTop":g.animate({top:d.$el.height()},0).css("visibility","visible").animate({top:0,avoidTransforms:false},d.options.transition_speed,function(){d.afterAnimation()});break;case 3:case"slideRight":g.animate({left:-d.$el.width()},0).css("visibility","visible").animate({left:0,avoidTransforms:false},d.options.transition_speed,function(){d.afterAnimation()});break;case 4:case"slideBottom":g.animate({top:-d.$el.height()},0).css("visibility","visible").animate({top:0,avoidTransforms:false},d.options.transition_speed,function(){d.afterAnimation()});break;case 5:case"slideLeft":g.animate({left:d.$el.width()},0).css("visibility","visible").animate({left:0,avoidTransforms:false},d.options.transition_speed,function(){d.afterAnimation()});break;case 6:case"carouselRight":g.animate({left:-d.$el.width()},0).css("visibility","visible").animate({left:0,avoidTransforms:false},d.options.transition_speed,function(){d.afterAnimation()});e.animate({left:0},0).animate({left:d.$el.width(),avoidTransforms:false},d.options.transition_speed);break;case 7:case"carouselLeft":g.animate({left:d.$el.width()},0).css("visibility","visible").animate({left:0,avoidTransforms:false},d.options.transition_speed,function(){d.afterAnimation()});e.animate({left:0},0).animate({left:-d.$el.width(),avoidTransforms:false},d.options.transition_speed);break}return false};d.playToggle=function(){if(vars.in_animation||!api.options.slideshow){return false}if(vars.is_paused){vars.is_paused=false;if(typeof theme!="undefined"&&typeof theme.playToggle=="function"){theme.playToggle("play")}vars.slideshow_interval=setInterval(d.nextSlide,d.options.slide_interval)}else{vars.is_paused=true;if(typeof theme!="undefined"&&typeof theme.playToggle=="function"){theme.playToggle("pause")}clearInterval(vars.slideshow_interval)}return false};d.goTo=function(f){if(vars.in_animation||!api.options.slideshow){return false}var e=d.options.slides.length;if(f<0){f=e}else{if(f>e){f=1}}f=e-f+1;clearInterval(vars.slideshow_interval);if(typeof theme!="undefined"&&typeof theme.goTo=="function"){theme.goTo()}if(vars.current_slide==e-f){if(!(vars.is_paused)){vars.slideshow_interval=setInterval(d.nextSlide,d.options.slide_interval)}return false}if(e-f>vars.current_slide){vars.current_slide=e-f-1;vars.update_images="next";d._placeSlide(vars.update_images)}else{if(e-f<vars.current_slide){vars.current_slide=e-f+1;vars.update_images="prev";d._placeSlide(vars.update_images)}}if(d.options.slide_links){a(vars.slide_list+"> .current-slide").removeClass("current-slide");a(vars.slide_list+"> li").eq((e-f)).addClass("current-slide")}if(d.options.thumb_links){a(vars.thumb_list+"> .current-thumb").removeClass("current-thumb");a(vars.thumb_list+"> li").eq((e-f)).addClass("current-thumb")}};d._placeSlide=function(e){var h=d.options.new_window?' target="_blank"':"";loadSlide=false;if(e=="next"){vars.current_slide==d.options.slides.length-1?loadSlide=0:loadSlide=vars.current_slide+1;var g=d.el+" li:eq("+loadSlide+")";if(!a(g).html()){var h=d.options.new_window?' target="_blank"':"";imageLink=(d.options.slides[loadSlide].url)?"href='"+d.options.slides[loadSlide].url+"'":"";var f=a('<img src="'+d.options.slides[loadSlide].image+'"/>');f.appendTo(g).wrap("<a "+imageLink+h+"></a>").parent().parent().addClass("image-loading").css("visibility","hidden");f.load(function(){d._origDim(a(this));d.resizeNow()})}d.nextSlide()}else{if(e=="prev"){vars.current_slide-1<0?loadSlide=d.options.slides.length-1:loadSlide=vars.current_slide-1;var g=d.el+" li:eq("+loadSlide+")";if(!a(g).html()){var h=d.options.new_window?' target="_blank"':"";imageLink=(d.options.slides[loadSlide].url)?"href='"+d.options.slides[loadSlide].url+"'":"";var f=a('<img src="'+d.options.slides[loadSlide].image+'"/>');f.appendTo(g).wrap("<a "+imageLink+h+"></a>").parent().parent().addClass("image-loading").css("visibility","hidden");f.load(function(){d._origDim(a(this));d.resizeNow()})}d.prevSlide()}}};d._origDim=function(e){e.data("origWidth",e.width()).data("origHeight",e.height())};d.afterAnimation=function(){if(d.options.performance==1){d.$el.removeClass("speed").addClass("quality")}if(vars.update_images){vars.current_slide-1<0?setPrev=d.options.slides.length-1:setPrev=vars.current_slide-1;vars.update_images=false;a(".prevslide").removeClass("prevslide");a(d.el+" li:eq("+setPrev+")").addClass("prevslide")}vars.in_animation=false;if(!vars.is_paused&&d.options.slideshow){vars.slideshow_interval=setInterval(d.nextSlide,d.options.slide_interval);if(d.options.stop_loop&&vars.current_slide==d.options.slides.length-1){d.playToggle()}}if(typeof theme!="undefined"&&typeof theme.afterAnimation=="function"){theme.afterAnimation()}return false};d.getField=function(e){return d.options.slides[vars.current_slide][e]};d.init()};a.supersized.vars={thumb_tray:"#thumb-tray",thumb_list:"#thumb-list",slide_list:"#slide-list",current_slide:0,in_animation:false,is_paused:false,hover_pause:false,slideshow_interval:false,update_images:false,options:{}};a.supersized.defaultOptions={slideshow:1,autoplay:1,start_slide:1,stop_loop:0,random:0,slide_interval:5000,transition:1,transition_speed:750,new_window:1,pause_hover:0,keyboard_nav:1,performance:1,image_protect:1,fit_always:0,fit_landscape:0,fit_portrait:1,min_width:0,min_height:0,horizontal_center:1,vertical_center:1,slide_links:1,thumb_links:1,thumbnail_navigation:0};a.fn.supersized=function(b){return this.each(function(){(new a.supersized(b))})}})(jQuery);





// 5. Supersized Theme: Shutter
/*
	Supersized - Fullscreen Slideshow jQuery Plugin
	Version : 3.2.6
	Theme 	: Shutter 1.1
	
	Site	: www.buildinternet.com/project/supersized
	Author	: Sam Dunn
	Company : One Mighty Roar (www.onemightyroar.com)
	License : MIT License / GPL License
*/
(function(a){theme={_init:function(){if(api.options.slide_links){a(vars.slide_list).css("margin-left",-a(vars.slide_list).width()/2)}if(api.options.autoplay){if(api.options.progress_bar){theme.progressBar()}}else{if(a(vars.play_button).attr("src")){a(vars.play_button).attr("src",vars.image_path+"play.png")}if(api.options.progress_bar){a(vars.progress_bar).stop().animate({left:-a(window).width()},0)}}a(vars.thumb_tray).animate({bottom:-a(vars.thumb_tray).height()},0);a(vars.tray_button).toggle(function(){a(vars.thumb_tray).stop().animate({bottom:0,avoidTransforms:true},300);if(a(vars.tray_arrow).attr("src")){a(vars.tray_arrow).attr("src",vars.image_path+"button-tray-down.png")}return false},function(){a(vars.thumb_tray).stop().animate({bottom:-a(vars.thumb_tray).height(),avoidTransforms:true},300);if(a(vars.tray_arrow).attr("src")){a(vars.tray_arrow).attr("src",vars.image_path+"button-tray-up.png")}return false});a(vars.thumb_list).width(a("> li",vars.thumb_list).length*a("> li",vars.thumb_list).outerWidth(true));if(a(vars.slide_total).length){a(vars.slide_total).html(api.options.slides.length)}if(api.options.thumb_links){if(a(vars.thumb_list).width()<=a(vars.thumb_tray).width()){a(vars.thumb_back+","+vars.thumb_forward).fadeOut(0)}vars.thumb_interval=Math.floor(a(vars.thumb_tray).width()/a("> li",vars.thumb_list).outerWidth(true))*a("> li",vars.thumb_list).outerWidth(true);vars.thumb_page=0;a(vars.thumb_forward).click(function(){if(vars.thumb_page-vars.thumb_interval<=-a(vars.thumb_list).width()){vars.thumb_page=0;a(vars.thumb_list).stop().animate({left:vars.thumb_page},{duration:500,easing:"easeOutExpo"})}else{vars.thumb_page=vars.thumb_page-vars.thumb_interval;a(vars.thumb_list).stop().animate({left:vars.thumb_page},{duration:500,easing:"easeOutExpo"})}});a(vars.thumb_back).click(function(){if(vars.thumb_page+vars.thumb_interval>0){vars.thumb_page=Math.floor(a(vars.thumb_list).width()/vars.thumb_interval)*-vars.thumb_interval;if(a(vars.thumb_list).width()<=-vars.thumb_page){vars.thumb_page=vars.thumb_page+vars.thumb_interval}a(vars.thumb_list).stop().animate({left:vars.thumb_page},{duration:500,easing:"easeOutExpo"})}else{vars.thumb_page=vars.thumb_page+vars.thumb_interval;a(vars.thumb_list).stop().animate({left:vars.thumb_page},{duration:500,easing:"easeOutExpo"})}})}a(vars.next_slide).click(function(){api.nextSlide()});a(vars.prev_slide).click(function(){api.prevSlide()});if(jQuery.support.opacity){a(vars.prev_slide+","+vars.next_slide).mouseover(function(){a(this).stop().animate({opacity:1},100)}).mouseout(function(){a(this).stop().animate({opacity:0.6},100)})}if(api.options.thumbnail_navigation){a(vars.next_thumb).click(function(){api.nextSlide()});a(vars.prev_thumb).click(function(){api.prevSlide()})}a(vars.play_button).click(function(){api.playToggle()});if(api.options.mouse_scrub){a(vars.thumb_tray).mousemove(function(f){var c=a(vars.thumb_tray).width(),g=a(vars.thumb_list).width();if(g>c){var b=1,d=f.pageX-b;if(d>10||d<-10){b=f.pageX;newX=(c-g)*(f.pageX/c);d=parseInt(Math.abs(parseInt(a(vars.thumb_list).css("left"))-newX)).toFixed(0);a(vars.thumb_list).stop().animate({left:newX},{duration:d*3,easing:"easeOutExpo"})}}})}a(window).resize(function(){if(api.options.progress_bar&&!vars.in_animation){if(vars.slideshow_interval){clearInterval(vars.slideshow_interval)}if(api.options.slides.length-1>0){clearInterval(vars.slideshow_interval)}a(vars.progress_bar).stop().animate({left:-a(window).width()},0);if(!vars.progressDelay&&api.options.slideshow){vars.progressDelay=setTimeout(function(){if(!vars.is_paused){theme.progressBar();vars.slideshow_interval=setInterval(api.nextSlide,api.options.slide_interval)}vars.progressDelay=false},1000)}}if(api.options.thumb_links&&vars.thumb_tray.length){vars.thumb_page=0;vars.thumb_interval=Math.floor(a(vars.thumb_tray).width()/a("> li",vars.thumb_list).outerWidth(true))*a("> li",vars.thumb_list).outerWidth(true);if(a(vars.thumb_list).width()>a(vars.thumb_tray).width()){a(vars.thumb_back+","+vars.thumb_forward).fadeIn("fast");a(vars.thumb_list).stop().animate({left:0},200)}else{a(vars.thumb_back+","+vars.thumb_forward).fadeOut("fast")}}})},goTo:function(b){if(api.options.progress_bar&&!vars.is_paused){a(vars.progress_bar).stop().animate({left:-a(window).width()},0);theme.progressBar()}},playToggle:function(b){if(b=="play"){if(a(vars.play_button).attr("src")){a(vars.play_button).attr("src",vars.image_path+"pause.png")}if(api.options.progress_bar&&!vars.is_paused){theme.progressBar()}}else{if(b=="pause"){if(a(vars.play_button).attr("src")){a(vars.play_button).attr("src",vars.image_path+"play.png")}if(api.options.progress_bar&&vars.is_paused){a(vars.progress_bar).stop().animate({left:-a(window).width()},0)}}}},beforeAnimation:function(b){if(api.options.progress_bar&&!vars.is_paused){a(vars.progress_bar).stop().animate({left:-a(window).width()},0)}if(a(vars.slide_caption).length){(api.getField("title"))?a(vars.slide_caption).html(api.getField("title")):a(vars.slide_caption).html("")}if(vars.slide_current.length){a(vars.slide_current).html(vars.current_slide+1)}if(api.options.thumb_links){a(".current-thumb").removeClass("current-thumb");a("li",vars.thumb_list).eq(vars.current_slide).addClass("current-thumb");if(a(vars.thumb_list).width()>a(vars.thumb_tray).width()){if(b=="next"){if(vars.current_slide==0){vars.thumb_page=0;a(vars.thumb_list).stop().animate({left:vars.thumb_page},{duration:500,easing:"easeOutExpo"})}else{if(a(".current-thumb").offset().left-a(vars.thumb_tray).offset().left>=vars.thumb_interval){vars.thumb_page=vars.thumb_page-vars.thumb_interval;a(vars.thumb_list).stop().animate({left:vars.thumb_page},{duration:500,easing:"easeOutExpo"})}}}else{if(b=="prev"){if(vars.current_slide==api.options.slides.length-1){vars.thumb_page=Math.floor(a(vars.thumb_list).width()/vars.thumb_interval)*-vars.thumb_interval;if(a(vars.thumb_list).width()<=-vars.thumb_page){vars.thumb_page=vars.thumb_page+vars.thumb_interval}a(vars.thumb_list).stop().animate({left:vars.thumb_page},{duration:500,easing:"easeOutExpo"})}else{if(a(".current-thumb").offset().left-a(vars.thumb_tray).offset().left<0){if(vars.thumb_page+vars.thumb_interval>0){return false}vars.thumb_page=vars.thumb_page+vars.thumb_interval;a(vars.thumb_list).stop().animate({left:vars.thumb_page},{duration:500,easing:"easeOutExpo"})}}}}}}},afterAnimation:function(){if(api.options.progress_bar&&!vars.is_paused){theme.progressBar()}},progressBar:function(){a(vars.progress_bar).stop().animate({left:-a(window).width()},0).animate({left:0},api.options.slide_interval)}};a.supersized.themeVars={progress_delay:false,thumb_page:false,thumb_interval:false,image_path:"img/",play_button:"#pauseplay",next_slide:"#nextslide",prev_slide:"#prevslide",next_thumb:"#nextthumb",prev_thumb:"#prevthumb",slide_caption:"#slidecaption",slide_current:".slidenumber",slide_total:".totalslides",slide_list:"#slide-list",thumb_tray:"#thumb-tray",thumb_list:"#thumb-list",thumb_forward:"#thumb-forward",thumb_back:"#thumb-back",tray_arrow:"#tray-arrow",tray_button:"#tray-button",progress_bar:"#progress-bar"};a.supersized.themeOptions={progress_bar:1,mouse_scrub:0}})(jQuery);





// JS Debug
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());