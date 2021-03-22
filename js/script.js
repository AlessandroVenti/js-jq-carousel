                       //Recuperando quanto visto in classe, generare il js per lo slider, con l'obbiettivo di comprendere cosa sta succedendo.

function slideNextImage() {

     var $activeImage = $('.js-active-image');

     if ( $activeImage.hasClass('js-last') ) {

          var $nextImage = $('img.js-first');

          $activeImage.removeClass('js-active-image');
          
          $nextImage.addClass('js-active-image');


     } else {

          var $nextImage = $activeImage.next('img');

          $activeImage.removeClass('js-active-image');

          $nextImage.addClass('js-active-image');

     }
     
}

function slidePrevImage() {
     
     var $activeImage = $('.js-active-image');

     if 

     var $prevImage = $activeImage.prev('img');

     $activeImage.removeClass('js-active-image');

     $prevImage.addClass('js-active-image');
}



function slideImages () {

     $('.next').click(slideNextImage);

     $('.prev').click(slidePrevImage);

}


$(document).ready(slideImages);