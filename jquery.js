$(document).ready(function(){
  //everytime page refresh, new image pops up
  $("#window").css('background-image', 'url(' + randomImage() + ')');
  //$("#window").css('background-image', 'url(https://i.pinimg.com/originals/aa/4a/ff/aa4aff547cf115081b52796ecda35331.gif)');

  //everytime button pressed, new image pops up
  $('.btn').click(function() {
      console.log(randomImage());
    $("#window").css('background-image', 'url(' + randomImage() + ')');
  });

  //top panel
  $(".panel").mousemove(function(e) {
    var x = e.pageX - this.offsetLeft;
    if(x <= 400) {
      $("#top").css({'left': x});
    }
  });
});
