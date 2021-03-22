                       //Recuperando quanto visto in classe, generare il js per lo slider, con l'obbiettivo di comprendere cosa sta succedendo.

                       

function slideNextImageAndCircle() {

     var $activeImage = $('.js-active-image');

     var $activeCircle = $('.js-active-circle');

     if ( $activeImage.hasClass('js-last-image') ) {

          var $nextImage = $('img.js-first-image');

          var $nextCircle = $('i.js-first-circle');

          $activeImage.removeClass('js-active-image');
          
          $nextImage.addClass('js-active-image');

          $activeCircle.removeClass('js-active-circle');

          $nextCircle.addClass('js-active-circle');


     } else {

          var $nextImage = $activeImage.next('img');

          var $nextCircle = $activeCircle.next('i');

          $activeImage.removeClass('js-active-image');

          $nextImage.addClass('js-active-image');

          $activeCircle.removeClass('js-active-circle');

          $nextCircle.addClass('js-active-circle');

     }

}



function slidePrevImageAndCircle() {
     
     var $activeImage = $('.js-active-image');

     var $activeCircle = $('.js-active-circle');


     if ( $activeImage.hasClass('js-first-image')) {

          var $prevImage = $('img.js-last-image');
          
          var $prevCircle = $('i.js-last-circle');

          $activeImage.removeClass('js-active-image');

          $prevImage.addClass('js-active-image');
          
          $activeCircle.removeClass('js-active-circle');

          $prevCircle.addClass('js-active-circle');

     } else {

          var $prevImage = $activeImage.prev('img');

          var $prevCircle = $activeCircle.prev('i');

          $activeImage.removeClass('js-active-image');

          $prevImage.addClass('js-active-image');

          $activeCircle.removeClass('js-active-circle');

          $prevCircle.addClass('js-active-circle');

     }

}



function slideImagesAndCircles () {

     $('.next').click(slideNextImageAndCircle);

     $('.prev').click(slidePrevImageAndCircle);

}


$(document).ready(slideImagesAndCircles);

