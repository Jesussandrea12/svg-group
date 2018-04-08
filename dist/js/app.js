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

// Menu Left
$('#box-news-1').click(function(){
	$('.box-news-1-open').slideToggle("slow","swing");
});

$('.box-news-back').click(function(){
	$('.box-news-1-open').css("display","none");
});
// 2
$('#box-news-2').click(function(){
	$('.box-news-2-open').slideToggle("slow","swing");
});

$('.box-news-back').click(function(){
	$('.box-news-2-open').css("display","none");
});
// 3
$('#box-news-3').click(function(){
	$('.box-news-3-open').slideToggle("slow","swing");
});

$('.box-news-back').click(function(){
	$('.box-news-3-open').css("display","none");
});
