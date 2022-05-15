$(document).ready(function(){

	$('.buttonUp').click(function(){
         var currentImage = $('.month.curry');
         var currentImageIndex = $('.month.curry').index();
         var buttonUpImageIndex = currentImageIndex + 1;
         var buttonUpImage = $('.month').eq(buttonUpImageIndex);
         currentImage.fadeOut(500);
         currentImage.removeClass('curry');

    if (buttonUpImageIndex == ($('.month:last').index()+1)) {
    	$('.month').eq(0).fadeIn(500);
    	$('.month').eq(0).addClass('curry');
    }  
    else{
    	buttonUpImage.fadeIn(500);
    	buttonUpImage.addClass('curry');
    }   
  });
   
  $('.buttonBack').click(function(){
    var currentImage = $('.month.curry');
    var currentImageIndex = $('.month.curry').index();
    var buttonBackImageIndex = currentImageIndex - 1;
    var buttonBackImage = $('.month').eq(buttonBackImageIndex);
    currentImage.fadeOut(500);
    currentImage.removeClass('curry');

    buttonBackImage.fadeIn(500);
    buttonBackImage.addClass('curry');
    });
});