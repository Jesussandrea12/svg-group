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

// Overlay
$('.box-case-one').click(function(){
	$('.overlay-one').addClass('active');
	$('.overlay-one').css('animation', 'modalIn 3s forwards');
});
$('.box-case-two').click(function(){
	$('.overlay-two').addClass('active');
	$('.overlay-two').css('animation', 'modalIn 3s forwards');
});
$('.box-case-three').click(function(){
	$('.overlay-three').addClass('active');
	$('.overlay-three').css('animation', 'modalIn 3s forwards');
});
$('.box-case-four').click(function(){
	$('.overlay-four').addClass('active');
	$('.overlay-four').css('animation', 'modalIn 3s forwards');
});
$('.box-case-five').click(function(){
	$('.overlay-five').addClass('active');
	$('.overlay-five').css('animation', 'modalIn 3s forwards');
});
$('.box-case-six').click(function(){
	$('.overlay-six').addClass('active');
	$('.overlay-six').css('animation', 'modalIn 3s forwards');
});

// remove class
$('.modal-exit').click(function(){
	$('.overlay-one').removeClass('active');
	$('.overlay-one').css('animation', 'modalOut 3s forwards');
});
$('.modal-exit').click(function(){
	$('.overlay-two').removeClass('active');
	$('.overlay-two').css('animation', 'modalOut 3s forwards');
});
$('.modal-exit').click(function(){
	$('.overlay-three').removeClass('active');
	$('.overlay-three').css('animation', 'modalOut 3s forwards');
});
$('.modal-exit').click(function(){
	$('.overlay-four').removeClass('active');
	$('.overlay-four').css('animation', 'modalOut 3s forwards');
});
$('.modal-exit').click(function(){
	$('.overlay-five').removeClass('active');
	$('.overlay-five').css('animation', 'modalOut 3s forwards');
});
$('.modal-exit').click(function(){
	$('.overlay-six').removeClass('active');
	$('.overlay-six').css('animation', 'modalOut 3s forwards');
});

// lightbox
$('.lightbox-1').click(function(){
	// $('.overlay-one').removeClass('active');
	$('.overlay-lightbox-1').addClass('active');
});
$('.lightbox-exit-1').click(function(){
	$('.overlay-lightbox-1').removeClass('active');
});
$('.lightbox-2').click(function(){
	// $('.overlay-one').removeClass('active');
	$('.overlay-lightbox-2').addClass('active');
});
$('.lightbox-exit-2').click(function(){
	$('.overlay-lightbox-2').removeClass('active');
});
$('.lightbox-3').click(function(){
	// $('.overlay-one').removeClass('active');
	$('.overlay-lightbox-3').addClass('active');
});
$('.lightbox-exit-3').click(function(){
	$('.overlay-lightbox-3').removeClass('active');
});
$('.lightbox-4').click(function(){
	// $('.overlay-one').removeClass('active');
	$('.overlay-lightbox-4').addClass('active');
});
$('.lightbox-exit-4').click(function(){
	$('.overlay-lightbox-4').removeClass('active');
});
$('.lightbox-5').click(function(){
	// $('.overlay-one').removeClass('active');
	$('.overlay-lightbox-5').addClass('active');
});
$('.lightbox-exit-5').click(function(){
	$('.overlay-lightbox-5').removeClass('active');
});
$('.lightbox-6').click(function(){
	// $('.overlay-one').removeClass('active');
	$('.overlay-lightbox-6').addClass('active');
});
$('.lightbox-exit-6').click(function(){
	$('.overlay-lightbox-6').removeClass('active');
});

// grid-Extra
$('.more-grid').click(function() {
	$('.grid-extra').addClass('active')
	$('.grid-extra').css('animation', 'modalIn 2s forwards')
})
$('.grid-extra-exit').click(function() {
	$('.grid-extra').removeClass('active')
})

// Capacidades modal
$('.consultoria').click(function() {
	$('.planificacion-1').addClass('active')
})
$('.promociones').click(function() {
	$('.planificacion-2').addClass('active')
})
$('.eventos').click(function() {
	$('.planificacion-3').addClass('active')
})
$('.hospitality').click(function() {
	$('.planificacion-4').addClass('active')
})
$('.planification').click(function() {
	$('.planificacion-5').addClass('active')
})
$('.planificacion-1-exit').click(function() {
	$('.planificacion-1').removeClass('active')
})
$('.planificacion-2-exit').click(function() {
	$('.planificacion-2').removeClass('active')
})
$('.planificacion-3-exit').click(function() {
	$('.planificacion-3').removeClass('active')
})
$('.planificacion-4-exit').click(function() {
	$('.planificacion-4').removeClass('active')
})
$('.planificacion-5-exit').click(function() {
	$('.planificacion-5').removeClass('active')
})
