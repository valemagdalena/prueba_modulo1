$(function(){

  //Tooltip en iconos de RRSS -footer-
  $('[data-toggle="tooltip"]').tooltip()

  //Toggle en parrafos de cartas
  $(".card-title").click(function(){
    $(".card-text",).toggle();
  });

  //smooth scrolling
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
  
  });