//Setting tab defaults
if(!localStorage.primary) localStorage.primary = 0;
if(!localStorage.secondary) localStorage.secondary = 0;

$(function() { 
	// Top bar
    $("ul.cfg-tabs.cfg-shelf").tabs("div.cfg-shelf-panes > div");
    // Primary tabs, displaying the subtabs
    $("ul.cfg-tabs.cfg-primary").tabs("div.cfg-primary-panes > div", {event: 'mouseover', initialIndex: localStorage.primary});
    // Subtabs
    $("ul.cfg-tabs.cfg-secondary").tabs("div.cfg-secondary-panes > div");
	
	// Hide the panes that isn't active
	$('div.cfg-secondary-panes:not(:eq('+localStorage.primary+'))').hide();
    
    $("ul.cfg-tabs.cfg-secondary").each(function(i, ul){

    	var switcher = {
    		i: i,
    		toggle: function(){
    			$('ul.cfg-tabs.cfg-primary').data('tabs').click(this.i);
    			$('div.cfg-secondary-panes:not(:eq('+this.i+'))').hide();
    			$('div.cfg-secondary-panes:eq('+this.i+')').show();
    			localStorage.primary = this.i;
    		},
    		swap: function(event){
    			this.toggle();
    			
    			if(event) localStorage.secondary = $('ul.cfg-secondary:eq('+this.i+') a').index($(event.currentTarget));
    			$(ul).data('tabs').click(parseInt(localStorage.secondary));
    		}
    	};
			
		if(localStorage.primary == i) swapper = switcher;
			
    	$(ul)
    		.find('a')
    		.mouseup(jQuery.proxy(switcher, 'swap'))
    		.end()
    		.parent()
    		.find('div.cfg-secondary-panes')
    		.appendTo('#cfg-main');
    });
	swapper.swap();
    
    $("div.scrollable").scrollable().mousewheel();
    $("#cfg-main #cfg-mode").click(function () {
      $(this).toggleClass("production");
    });
    $("#cfg-main .cfg-options li:last").addClass('last');
	$("#cfg-main .cfg-options li label a[title]").tooltip({ 
    	position: "bottom right", 
	    tip: '#tooltip',  
	    offset: [0, 0], 
	    opacity: 0.7, 
	    effect: 'fade' 
	   	}); 
});
			
