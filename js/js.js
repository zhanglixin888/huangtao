(function() {var _53code = document.createElement("script");_53code.src = "https://tb.53kf.com/code/code/309037e51f21ce0e9d656bd9eef796fd/1";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(_53code, s);})();


$(document).ready(function(e) {
    	
	$("#DivtabBotton_2,#DivtabBotton_3").hide();
	
	$(".tabClass").click(function(){
 	 
	  	var id = $(this).prop("id");
	    $("#DivtabBotton_1,#DivtabBotton_2,#DivtabBotton_3").hide();
		$("#Div"+id).show();
		
		$(".tabClass").removeClass("active");
		$(this).addClass("active");
	
	})
 
 })