$(document).ready(function(){
	$('a').click(function(){
		if (this.hostname == window.location.hostname) {
			var href = $(this).attr("href");
			document.body.className = 'page-loading';
			setTimeout(function() {			
				window.location = href;	
			} , 300);
			return false;
		} else {
			return true;
		}
	});
});