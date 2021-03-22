                       //Recuperando quanto visto in classe, generare il js per lo slider, con l'obbiettivo di comprendere cosa sta succedendo.

function slideNextImage() {

     if ( $activeImage.hasClass('js-last') ) {

          var $nextImage = $(activeImage.first);

          $activeImage.removeClass('js-active-image');
          
          $nextImage.addClass('js-active-image');


     } else {


     }
     
     var $activeImage = $('.js-active-image');

     var $nextImage = $activeImage.next('img');
     
     console.log($nextImage);

     $activeImage.removeClass('js-active-image');
     $nextImage.addClass('js-active-image');
}

function slidePrevImage() {
     
     var $activeImage = $('.js-active-image');

     var $prevImage = $activeImage.prev('img');

     $activeImage.removeClass('js-active-image');

     $prevImage.addClass('js-active-image');
}



function slideImages () {

     $('.next').click(slideNextImage);

     $('.prev').click(slidePrevImage);

}


$(document).ready(slideImages);