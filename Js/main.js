$(document).ready(function(){
     $('.slider').slick({
        dots: true, 
 })
})

$(function(){
	$('.toggle-menu').on('click',function(){
		$('.main-nav').toggleClass('open');
	});
});
