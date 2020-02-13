
  /**
   * Accordion Slide down functionality and close other accordions
   */
  var acc = document.getElementsByClassName( "accordion__slidedown" );
  var content = document.getElementsByClassName( 'accordion__content' );

function slideDownAccordion() {
  for ( var i = 0; i < acc.length; i++ ) {
    acc[i].onclick = function() {
      var setClasses = !this.classList.contains( 'active' );
      setClass( acc, 'active', 'remove' );
      setClass( content, 'show', 'remove' );

      if ( setClasses ) {
        this.classList.toggle( "active" );
        this.nextElementSibling.classList.toggle( "show" );
      }

      for (var i = 0; i < acc.length; i++) {
        if (acc[i].classList.contains('active')) {
          content[i].style.maxHeight = content[i].scrollHeight + "px";
        } else {
          content[i].style.maxHeight = null;
        }
      }
    }
  }
}

  function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
      els[i].classList[fnName](className);
    }
  }


/**
 * Accordion Slide down functionality
 */
// function slideDownAccordion(){
//   var acc = document.getElementsByClassName("accordion__slidedown");
//   var i;
//
//   for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//       this.classList.toggle("active");
//         var accordion__content = this.nextElementSibling;
//       if (accordion__content.style.maxHeight){
//         accordion__content.style.maxHeight = null;
//       } else {
//         accordion__content.style.maxHeight = accordion__content.scrollHeight + "px";
//       }
//     });
//   }
// }