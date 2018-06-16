console.log('sd')

$('button').click(function() {
	$.get('content.html', function(data) {
		console.log(data);
		$('#content_container').html(data);
	});
});