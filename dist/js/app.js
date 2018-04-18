const $body = $('body');

$(document).ready(function(){
	$(document).foundation();
});

$(window).on('load', function(){
	$('.spinner-container').css("opacity","0");
	$('.spinner-container').css("visibility","hidden");
	$('#spinner').css("opacity","0");
	$('#spinner').css("visibility","hidden");
	$('.icon-button').css("display","block");
	$body.css("overflow","visible");
});

$(function() {
	$.scrollify({
    section : ".scroll",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : -7,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });
});

function lock() {
	var current = $(window).scrollTop();
	$(window).scroll(function() {
		$(window).scrollTop(current);
	});
}

function unlock() {
	$(window).off('scroll');
}

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
$('.box-news-1-open').click(function(){
	$('#button-menu-left').addClass('hidden');
	$('#button-back-menu').addClass('active');
	$('.box-news-1-open').addClass('active');
	$('.box-news-2-open').addClass('down');
	$('.box-news-3-open').addClass('down');
});
$('#button-back-menu').click(function(){
	$('#button-menu-left').removeClass('hidden');
	$('#button-back-menu').removeClass('active');
	$('[data-show="true"]').removeClass('active');
	$('[data-show="true"]').removeClass('down');
});

// 2
$('.box-news-2-open').click(function(){
	$('#button-menu-left').addClass('hidden');
	$('#button-back-menu').addClass('active');
	$('.box-news-1-open').addClass('down');
	$('.box-news-2-open').addClass('active');
	$('.box-news-3-open').addClass('down');
});

// 3
$('.box-news-3-open').click(function(){
	$('#button-menu-left').addClass('hidden');
	$('#button-back-menu').addClass('active');
	$('.box-news-1-open').addClass('down');
	$('.box-news-2-open').addClass('down');
	$('.box-news-3-open').addClass('active');
});

// Overlay
$('.box-case-one').click(function(){
	$('.overlay-one').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.box-case-two').click(function(){
	$('.overlay-two').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.box-case-three').click(function(){
	$('.overlay-three').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.box-case-four').click(function(){
	$('.overlay-four').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.box-case-five').click(function(){
	$('.overlay-five').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.box-case-six').click(function(){
	$('.overlay-six').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.box-case-seven').click(function(){
	$('.overlay-seven').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.box-case-eight').click(function(){
	$('.overlay-eight').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.box-case-nine').click(function(){
	$('.overlay-nine').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.box-case-ten').click(function(){
	$('.overlay-ten').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.box-case-eleven').click(function(){
	$('.overlay-eleven').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.box-case-twelve').click(function(){
	$('.overlay-twelve').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});

// remove class
$('.modal-exit').click(function(){
	$('.overlay-one').removeClass('active');
	$(document).unbind('keydown');
	$body.css("overflow","visible");
	unlock()
});
$('.modal-exit').click(function(){
	$('.overlay-two').removeClass('active');
	$(document).unbind('keydown');
	$body.css("overflow","visible");
	unlock()
});
$('.modal-exit').click(function(){
	$('.overlay-three').removeClass('active');
	$(document).unbind('keydown');
	$body.css("overflow","visible");
	unlock()
});
$('.modal-exit').click(function(){
	$('.overlay-four').removeClass('active');
	$(document).unbind('keydown');
	$body.css("overflow","visible");
	unlock()
});
$('.modal-exit').click(function(){
	$('.overlay-five').removeClass('active');
	$(document).unbind('keydown');
	$body.css("overflow","visible");
	unlock()
});
$('.modal-exit').click(function(){
	$('.overlay-six').removeClass('active');
	$(document).unbind('keydown');
	$body.css("overflow","visible");
	unlock()
});
$('.modal-exit').click(function(){
	$('.overlay-seven').removeClass('active');
	$(document).unbind('keydown');
	$body.css("overflow","visible");
	unlock()
});
$('.modal-exit').click(function(){
	$('.overlay-eight').removeClass('active');
	$(document).unbind('keydown');
	$body.css("overflow","visible");
	unlock()
});
$('.modal-exit').click(function(){
	$('.overlay-nine').removeClass('active');
	$(document).unbind('keydown');
	$body.css("overflow","visible");
	unlock()
});
$('.modal-exit').click(function(){
	$('.overlay-ten').removeClass('active');
	$(document).unbind('keydown');
	$body.css("overflow","visible");
	unlock()
});
$('.modal-exit').click(function(){
	$('.overlay-eleven').removeClass('active');
	$(document).unbind('keydown');
	$body.css("overflow","visible");
	unlock()
});
$('.modal-exit').click(function(){
	$('.overlay-twelve').removeClass('active');
	$(document).unbind('keydown');
	$body.css("overflow","visible");
	unlock()
});

// lightbox
$('.modal-image-1').click(function(){
	$('.overlay-lightbox-1').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});

$('.lightbox-exit-1').click(function(){
	$('.overlay-lightbox-1').removeClass('active');
});
$('.modal-image-2').click(function(){
	$('.overlay-lightbox-2').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.lightbox-exit-2').click(function(){
	$('.overlay-lightbox-2').removeClass('active');
});
$('.modal-image-3').click(function(){
	$('.overlay-lightbox-3').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.lightbox-exit-3').click(function(){
	$('.overlay-lightbox-3').removeClass('active');
});
$('.modal-image-4').click(function(){
	$('.overlay-lightbox-4').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.lightbox-exit-4').click(function(){
	$('.overlay-lightbox-4').removeClass('active');
});
$('.modal-image-5').click(function(){
	$('.overlay-lightbox-5').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.lightbox-exit-5').click(function(){
	$('.overlay-lightbox-5').removeClass('active');
});
$('.modal-image-6').click(function(){
	$('.overlay-lightbox-6').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.lightbox-exit-6').click(function(){
	$('.overlay-lightbox-6').removeClass('active');
});
$('.modal-image-7').click(function(){
	$('.overlay-lightbox-7').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.lightbox-exit-7').click(function(){
	$('.overlay-lightbox-7').removeClass('active');
});
$('.modal-image-8').click(function(){
	$('.overlay-lightbox-8').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.lightbox-exit-8').click(function(){
	$('.overlay-lightbox-8').removeClass('active');
});
$('.modal-image-9').click(function(){
	$('.overlay-lightbox-9').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.lightbox-exit-9').click(function(){
	$('.overlay-lightbox-9').removeClass('active');
});
$('.modal-image-10').click(function(){
	$('.overlay-lightbox-10').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.lightbox-exit-10').click(function(){
	$('.overlay-lightbox-10').removeClass('active');
});
$('.modal-image-11').click(function(){
	$('.overlay-lightbox-11').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.lightbox-exit-11').click(function(){
	$('.overlay-lightbox-11').removeClass('active');
});
$('.modal-image-12').click(function(){
	$('.overlay-lightbox-12').addClass('active');
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
});
$('.lightbox-exit-12').click(function(){
	$('.overlay-lightbox-12').removeClass('active');
});

// grid-Extra
$('.more-grid').click(function() {
	$('.grid-extra').addClass('active')
})
$('.less-grid').click(function() {
	$('.grid-extra').removeClass('active')
})

// Capacidades modal
$('.consultoria').click(function() {
	$('.blue-overlay').addClass('active')
	$('.blue-overlay').css('animation', 'modalIn 1.5s forwards');
	$('.planificacion-1').css('transition-delay', '1.5s');
	$('.planificacion-1').addClass('active')
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
})
$('.promociones').click(function() {
	$('.blue-overlay').addClass('active')
	$('.blue-overlay').css('animation', 'modalIn 1.5s forwards');
	$('.planificacion-2').css('transition-delay', '1.5s');
	$('.planificacion-2').addClass('active')
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
})
$('.eventos').click(function() {
	$('.blue-overlay').addClass('active')
	$('.blue-overlay').css('animation', 'modalIn 1.5s forwards');
	$('.planificacion-3').css('transition-delay', '1.5s');
	$('.planificacion-3').addClass('active')
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
})
$('.hospitality').click(function() {
	$('.blue-overlay').addClass('active')
	$('.blue-overlay').css('animation', 'modalIn 1.5s forwards');
	$('.planificacion-4').css('transition-delay', '1.5s');
	$('.planificacion-4').addClass('active')
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
})
$('.planification').click(function() {
	$('.blue-overlay').addClass('active')
	$('.blue-overlay').css('animation', 'modalIn 1.5s forwards');
	$('.planificacion-5').css('transition-delay', '1.5s');
	$('.planificacion-5').addClass('active')
	$(document).on('keydown', function(e){
    e.preventDefault();
    e.stopPropagation();
	});
	$body.css("overflow","hidden");
	lock()
})

// remove
$('.planificacion-1-exit').click(function() {
	$('.blue-overlay').removeClass('active')
	$('.blue-overlay').css('animation', 'modalOut 1s forwards');
	$('.planificacion-1').css('transition-delay', '.1s');
	$('.planificacion-1').removeClass('active')
	$(document).unbind('keydown');
	$body.css("overflow","visible");
	unlock()
})
$('.planificacion-2-exit').click(function() {
	$('.blue-overlay').removeClass('active')
	$('.blue-overlay').css('animation', 'modalOut 1s forwards');
	$('.planificacion-2').css('transition-delay', '.1s');
	$('.planificacion-2').removeClass('active')
	$(document).unbind('keydown');
	$body.css("overflow","visible");
	unlock()
})
$('.planificacion-3-exit').click(function() {
	$('.blue-overlay').removeClass('active')
	$('.blue-overlay').css('animation', 'modalOut 1s forwards');
	$('.planificacion-3').css('transition-delay', '.1s');
	$('.planificacion-3').removeClass('active')
	$(document).unbind('keydown');
	$body.css("overflow","visible");
	unlock()
})
$('.planificacion-4-exit').click(function() {
	$('.blue-overlay').removeClass('active')
	$('.blue-overlay').css('animation', 'modalOut 1s forwards');
	$('.planificacion-4').css('transition-delay', '.1s');
	$('.planificacion-4').removeClass('active')
	$(document).unbind('keydown');
	$body.css("overflow","visible");
	unlock()
})
$('.planificacion-5-exit').click(function() {
	$('.blue-overlay').removeClass('active')
	$('.blue-overlay').css('animation', 'modalOut 1s forwards');
	$('.planificacion-5').css('transition-delay', '.1s');
	$('.planificacion-5').removeClass('active')
	$(document).unbind('keydown');
	$body.css("overflow","visible");
	unlock()
})

// capacidades icons
$('#next-icon-1').click(function() {
	$('.planificacion-2').addClass('active')
	$('.planificacion-1').removeClass('active')
})
$('#back-icon-1').click(function() {
	$('.planificacion-5').addClass('active')
	$('.planificacion-1').removeClass('active')
})
// 2
$('#next-icon-2').click(function() {
	$('.planificacion-3').addClass('active')
	$('.planificacion-2').removeClass('active')
})
$('#back-icon-2').click(function() {
	$('.planificacion-1').addClass('active')
	$('.planificacion-2').removeClass('active')
})
// 3
$('#next-icon-3').click(function() {
	$('.planificacion-4').addClass('active')
	$('.planificacion-3').removeClass('active')
})
$('#back-icon-3').click(function() {
	$('.planificacion-2').addClass('active')
	$('.planificacion-3').removeClass('active')
})
// 4
$('#next-icon-4').click(function() {
	$('.planificacion-5').addClass('active')
	$('.planificacion-4').removeClass('active')
})
$('#back-icon-4').click(function() {
	$('.planificacion-3').addClass('active')
	$('.planificacion-4').removeClass('active')
})
// 5
$('#next-icon-5').click(function() {
	$('.planificacion-1').addClass('active')
	$('.planificacion-5').removeClass('active')
})
$('#back-icon-5').click(function() {
	$('.planificacion-4').addClass('active')
	$('.planificacion-5').removeClass('active')
})
