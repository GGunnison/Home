var LandingController = function(){

  var eventListeners = function(){

    $('#bio-label').click(function (){
      if ($('#bio').hasClass('hidden')){
        console.log("TRUE!");
        $('#bio').removeClass('hidden');
      }else{
        $('#bio').addClass('hidden');
      }
    });
    $('#projects-label').click(function(){
      if ($('#projects').hasClass('hidden')){
        console.log("This is true")
        $('#projects').removeClass('hidden');
      }else{
        $('#projects').addClass('hidden');
      }
    })
  }

  var init = function() {
      eventListeners();
    };

  return {
    init: init
  }

};

var landingController = new LandingController();
$(document).ready(function(){
  landingController.init();
});