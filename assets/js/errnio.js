jQuery(document).ready(function($) {
    var $iframe = $('#errnio-iframe');
	
	$(window).on('message', function(ev) {
		var data;
		ev = ev.originalEvent;
		if(true || ev.origin === 'http://errnio.com/register/iframe.html') {
			data = JSON.parse(ev.data);
			$.ajax({
				url : errniowp.ajax_url,
				type : 'post',
				data : {
					'action': 'errnio_register',
					'tag_id': data.tagId,
					'type': data.type
				},
				success : function( response ) {
				}
			});
		}
	});
});
