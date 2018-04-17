$(document).ready(function(){
  //everytime page refresh, new image pops up
  $("#window").css('background-image', 'url(' + randomImage() + ')');

  //everytime button pressed, new image pops up
  $('.btn').click(function() {
    $("#window").css('background-image', 'url(' + randomImage() + ')');
  });
});
