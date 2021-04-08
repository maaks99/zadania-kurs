$(document).ready(function(){
    
    $("a").click(function(event) {

        let anchor = this.hash;

        if (this.hash !== "") {
          event.preventDefault();
          $('html,body').animate({ scrollTop: $(anchor).offset().top },500, function(){

            window.location.hash = anchor;
          });
        }
    
    });
 
});


