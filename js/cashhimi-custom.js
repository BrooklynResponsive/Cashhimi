/*!
 * imagesLoaded PACKAGED v3.0.4
 * JavaScript is all like "You images are done yet or what?"
 */

(function(){"use strict";function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}var n=e.prototype;n.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},n.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},n.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},n.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},n.on=n.addListener,n.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},n.once=n.addOnceListener,n.defineEvent=function(e){return this.getListeners(e),this},n.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},n.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},n.off=n.removeListener,n.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},n.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},n.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},n.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},n.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],o=n.listener.apply(this,t||[]),(o===this._getOnceReturnValue()||n.once===!0)&&this.removeListener(e,s[r][i].listener);return this},n.trigger=n.emitEvent,n.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},n.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){"use strict";var t=document.documentElement,n=function(){};t.addEventListener?n=function(e,t,n){e.addEventListener(t,n,!1)}:t.attachEvent&&(n=function(t,n,i){t[n+i]=i.handleEvent?function(){var t=e.event;t.target=t.target||t.srcElement,i.handleEvent.call(i,t)}:function(){var n=e.event;n.target=n.target||n.srcElement,i.call(t,n)},t.attachEvent("on"+n,t[n+i])});var i=function(){};t.removeEventListener?i=function(e,t,n){e.removeEventListener(t,n,!1)}:t.detachEvent&&(i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var r={bind:n,unbind:i};"function"==typeof define&&define.amd?define(r):e.eventie=r}(this),function(e){"use strict";function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e){return"[object Array]"===c.call(e)}function i(e){var t=[];if(n(e))t=e;else if("number"==typeof e.length)for(var i=0,r=e.length;r>i;i++)t.push(e[i]);else t.push(e);return t}function r(e,n){function r(e,n,s){if(!(this instanceof r))return new r(e,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=i(e),this.options=t({},this.options),"function"==typeof n?s=n:t(this.options,n),s&&this.on("always",s),this.getImages(),o&&(this.jqDeferred=new o.Deferred);var a=this;setTimeout(function(){a.check()})}function c(e){this.img=e}r.prototype=new e,r.prototype.options={},r.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},r.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},r.prototype.check=function(){function e(e,r){return t.options.debug&&a&&s.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},r.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify(t,e)})},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},o&&(o.fn.imagesLoaded=function(e,t){var n=new r(this,e,t);return n.jqDeferred.promise(o(this))});var f={};return c.prototype=new e,c.prototype.check=function(){var e=f[this.img.src];if(e)return this.useCached(e),void 0;if(f[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this.proxyImage=new Image;n.bind(t,"load",this),n.bind(t,"error",this),t.src=this.img.src},c.prototype.useCached=function(e){if(e.isConfirmed)this.confirm(e.isLoaded,"cached was confirmed");else{var t=this;e.on("confirm",function(e){return t.confirm(e.isLoaded,"cache emitted confirmed"),!0})}},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},c.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},c.prototype.unbindProxyEvents=function(){n.unbind(this.proxyImage,"load",this),n.unbind(this.proxyImage,"error",this)},r}var o=e.jQuery,s=e.console,a=s!==void 0,c=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],r):e.imagesLoaded=r(e.EventEmitter,e.eventie)}(window);

window.Cashhimi = {};

(function(){
	
	
	/* For the desktop dropdown menu */
	function BK_AlphaDropdown(ul_id){
		this.el = $("#"+ul_id);
		this._init();
		this._layout();
		
		//$(window).on('resize',$.proxy(this, 'resizeTimeout'));
	};


	BK_AlphaDropdown.prototype = {
		_init : function(){
			/* set up hovers */
			this.el.children('li').children('a').on('mouseenter', $.proxy(this, 'showNav'));
			this.el.on('mouseleave', $.proxy(this, 'hideAllSub'));
			this.el.find('li.hasSubSub').children('a').on('mouseenter', $.proxy(this, 'showSubSubNav'));
			this.el.find('li.hasSubSub').on('mouseleave', $.proxy(this, 'hideSubSubNav'));
			//$('div.subnav').on('mousemove', $.proxy( function(){ clearTimeout(this.hider); }, this  ));
		},
		
		_layout : function(){
			/* make wide enough to accomodate menu items */
			/*
			var divWidth = this.el.width();
			
			this.el.find('div.subnav ul').each( function(){
				var ew = 0; 
				var lis = $(this).find('li');
				lis.each(function(){
					ew += ($(this).width() + 20);
				}) ;
				if($(this).parent().width() < ew){ $(this).parent().css({'width':ew });	}
				
				
				
			})
			*/
/* 				spread margins to compensate for the difference btwn text-left and text-center, etc  
			this.el.children('li').not(":last-child").each(function(index, elem){

				var minc = 8 / ($(this).siblings('li').length - 1);
				$(this).css('padding-left',((minc * index)+"%"));

			});
			*/
/* 				fix top margin, hide */
            //just hide -sebastian
			this.el.find('div.subnav').each(function(){
				$(this).hide(); //.css('top',"2em");
			})
			//console.log('_layout');
		},
		
		showNav : function(e){
			if( $(e.target).next(".subnav:visible").length>0 ) { return }
			this.hideAllSub();
			$(e.target).next(".subnav").fadeIn(250);	
		},
		
		hideAllSub : function(){
		    $('div.subnav').fadeOut(250);
		    $('.subSub:visible').hide();
			//this.el.find('div.subnav').fadeOut(250);
		},
		
		showSubSubNav : function(e) {
		    //console.log('showSubSubNav');
		    //$('.subSub:visible').hide();
		    $(e.target).next('ul').fadeIn(250);
		},
		
		hideSubSubNav : function(e) {
            $('.subSub:visible').fadeOut(250);
		    //console.log('hideSubSubNav');
            //$(e.target).closest('.subSub').fadeOut(250);
		},
		
		resizeTimeout : function(){
		  /*
			clearInterval(this.resizer);
			var self = this;
			this.resizer = setTimeout(function(){ self._layout() } , 50);
			console.log('resizeTimeout ');
			*/
		},
		
		hideTimeout : function(){
		  
			clearInterval(this.hider);
			var self = this;
			this.hider = setTimeout(function(){  self.hideAllSub() } , 3000);
			
		},
		
		resizer : false,
		hider : false
	
	};
	
	
	Cashhimi.Dropdown=BK_AlphaDropdown;
	
	
	
	
	
	
	
	
	/* for the lookbook and press desktop sliders */
	/*
	*
	*	Depends on jQuery.ImagesLoaded plugin http://desandro.github.io/imagesloaded/
	*
	*	options object props:
	* 	div (string) the id of the enclosing ul element.
	*	spacing (int) the spacing, in percent, between image elements
	*	prevTriggerClass (string) class of objects to bind prev() on click
	*	nextTriggerClass (string) class of objects to bind next() on click
	*/
	function BK_MagSlider(options){
		this.div = $("#"+options.div);
		this.ul = $("#"+options.div+" ul");
		this.slides = this.ul.find('li');
		this.sp = options.spacing;

		this.prevTrigger = $("."+options.prevTriggerClass);
		this.nextTrigger = $("."+options.nextTriggerClass);
		this.currentSlide=0;
		this.leftCSS=false;
		this.rightCSS=false;
		this.centerCSS=false;
		this.rightAnchorPointPerc=false;
		this.leftAnchorPointPerc=false;
		this.smallSlideOffset=false;
		this.slideUnitWidth = false;
		this.resizer=false;
		this.ul.imagesLoaded($.proxy(this,'_init'));
		this._init();

		
		$(window).on('resize',$.proxy(this, 'resizeTimeout'));
		
	}
	
	BK_MagSlider.prototype = {
	
		_init : function(){
			this.ul.css({"position":"relative","display":"block","margin":0});
			this.div.css({"position":"relative","display":"block"});

			/* position triggers */
			this.prevTrigger.show().css({ position:'absolute', display:"block","left":0});
			this.nextTrigger.show().css({ position:'absolute', display:"block","right":0});
			/* squeeze ul between triggers */
			var trigBuffer = (this.prevTrigger.width()) + 10;
			this.div.css({paddingLeft: trigBuffer, paddingRight: trigBuffer});
			
						
			this.setLayoutConstants();
			this.slides.css({position:'absolute'});
			this.slides.find('img').css({display:'block',margin:"0 auto"});
			/* position images */
			var image0 = this.slides.first();
			image0.css(this.centerCSS);
			/* do the rest */
			for(i=1;i<this.slides.length;i++){
				$(this.slides[i]).css({ left : (this.rightAnchorPointPerc + ((i-1) * this.slideUnitWidth))+"%" });
			}
			
			
			/* center all horizontally */
			this.centerAllVertical();
			
			/* set up transitions */
			this.slides.addClass("mag-slider-transitions");
			
			
			/* bind handlers */
			this.prevTrigger.hide().on('click', $.proxy(this,"previous"));
			this.nextTrigger.on('click', $.proxy(this,"next"));

		},
		
		setLayoutConstants : function(){
			this.slideUnitWidth =(22+this.sp);
			//console.log('slideUnitWidth: ' + this.slideUnitWidth);
			this.slides.width("22%");
			var image = $(this.slides[this.currentSlide]);
			image.width("50%");
			this.ul.css({height:this.slides.first().find('img').height(),overflow:"hidden"});
			this.smallSlideOffset = (this.ul.height() - $(this.slides[1]).height())/2;
			this.centerCSS = {position:'absolute',width:"50%", top:"0%", left:"24.5%"};
			
			this.rightAnchorPointPerc = this.rightAnchorPointPerc || 75 + (this.sp);
			this.leftAnchorPointPerc = this.leftAnchorPointPerc || 25 - (this.slideUnitWidth);
		},
		
		centerAllVertical : function(){
			var gh = this.ul.height();
			this.div.find('li').each(function(){
				$(this).css("top", ((gh  - $(this).height()) /2 ));
			});
			this.prevTrigger.css("top", ((gh  - this.prevTrigger.height()) /2 ));
			this.nextTrigger.css("top", ((gh  - this.nextTrigger.height()) /2 ));
			
		},
		
		
		
		next : function(e){
			e.stopImmediatePropagation();
			if(this.currentSlide+1 == this.slides.length) return;
			/* change width, left, top for currentSlide and currentSlide+1 */
			//console.log('next');
			$(this.slides[this.currentSlide]).css({width:"22%", left: (this.leftAnchorPointPerc + "%"), top: this.smallSlideOffset  });
			$(this.slides[this.currentSlide+1]).css({width:"50%", left: "24.5%", top:0 });
			/* now animate the others */
			for(i=0;i<this.slides.length;i++){
				if(i<this.currentSlide){
					$(this.slides[i]).css({left: (this.leftAnchorPointPerc - ((this.currentSlide - i)*this.slideUnitWidth))+"%" });
				}
				if(i>(this.currentSlide+1)){
					$(this.slides[i]).css({left: (this.rightAnchorPointPerc + (((i - 2) - this.currentSlide)*this.slideUnitWidth))+"%" });
				}
			}
			this.currentSlide++;
			if(this.currentSlide+1 == this.slides.length){ this.nextTrigger.hide(); }
			this.prevTrigger.show();

		},
		
		previous : function(e){
			e.stopImmediatePropagation();
			if(this.currentSlide == 0) return;
			/* change width, left, top for currentSlide and currentSlide-1 */
			$(this.slides[this.currentSlide]).css({width:"22%", left: (this.rightAnchorPointPerc + "%"), top: this.smallSlideOffset  });
			$(this.slides[this.currentSlide-1]).css({width:"50%", left: "24.5%", top:0 });
			/* now animate the others */
			for(i=0;i<this.slides.length;i++){
				if(i>this.currentSlide){
					$(this.slides[i]).css({left: (this.rightAnchorPointPerc + ((i - this.currentSlide)*this.slideUnitWidth))+"%" });
				}
				if(i<(this.currentSlide-1)){
					$(this.slides[i]).css({left: (this.leftAnchorPointPerc - (((this.currentSlide)-i)*this.slideUnitWidth))+"%" });
				}
			}
			this.currentSlide--;
			if(this.currentSlide == 0){ this.prevTrigger.hide(); }
			this.nextTrigger.show();
			
		},
		
		resizeTimeout : function(){
			clearInterval(this.resizer);
			var self = this;
			this.resizer = setTimeout(function(){ self.setLayoutConstants(); self.centerAllVertical(); } , 350);
			
		},
		
	}
	
	
	Cashhimi.MagSlider=BK_MagSlider;

})(window);






		