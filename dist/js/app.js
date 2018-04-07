$(document).foundation()

$(document).ready(function(){
	$('.spinner-container').css("display","none");
	$('#spinner').css("display","none");
	$('.icon-button').css("display","block");
});

$('.hamburger').click(function(){
	$(this).toggleClass('is-active');
});

$('#menu li a').click(function () {
	$('#menu').removeClass('active');
	$('.hamburger').removeClass('is-active');
})

$('#burguer-button').click(function(){
	$('#menu').toggleClass('active');
});
