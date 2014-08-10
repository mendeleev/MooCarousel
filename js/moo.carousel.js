var Carousel = new Class({
        Implements: [Options, Events],

        options: {
        	current: 0,
        	first:0,
        	last:3
        },

        initialize: function(options){
            this.setOptions(options);
            $$(".left").addEvent('click', this.slidePrev.bind(this));
            $$(".right").addEvent('click', this.slideNext.bind(this));

            console.log(this.options.last);
        },

        slidePrev: function() {
        	if(this.options.last < 5) {
        		var i = 0;
        		this.options.first--;
        		this.options.last++;
	        	var t = setInterval(function() {
	        		i--;
	        		this.options.current--;        		
	        		$$("ul").setStyle("margin-left", this.options.current + "px");
	        		if(i == -100) { 
	        			clearTimeout(t);	        			 
	        		}
	        	}.bind(this), 1);
	        	console.log(this.options.first);
        	}
        },

        slideNext: function() {
        	if(this.options.first < 0) {
        		var i = 0;
	        	this.options.first++;
	        	this.options.last--;
	        	var t = setInterval(function() {
	        		i++;
	        		this.options.current++;        		
	        		$$("ul").setStyle("margin-left", this.options.current + "px");
	        		if(i == 100) { 
	        			clearTimeout(t);        			
	        		}        		
	        	}.bind(this), 1);
	        	console.log(this.options.first);
        	}
        }
});