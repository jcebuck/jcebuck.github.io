$(function() {
	var addr = ['gmail.com', 'jcebuck'];
	addr.reverse();

	$('li[data-url="{{ page.url }}"]').addClass('active');
	$('.social-buttons').find('.btn-google').attr('href', 'mailto:' + addr.join('@'));
});