$(document).ready(function(){
  var $sound = $('audio');
  //default volume should be silent
  $sound.prop("volume", 0.0);

  //volume function
  window.setVolume = function(audio, vol) {
      sounds[sound].volume = vol;
  }

  //everytime page refresh, new image pops up
  $("#window").css('background-image', 'url(' + randomImage() + ')');
  //$("#window").css('background-image', 'url(https://i.giphy.com/media/J80drcoKo194I/giphy.webp)');

  //everytime button pressed, new image pops up
  $('.btn').click(function() {
      console.log(randomImage());
    $("#window").css('background-image', 'url(' + randomImage() + ')');
  });

  //window slider
  $("#window").mousemove(function(e) {
    var x = e.pageX - this.offsetLeft;
    if(x <= 320) {
      //panel moves left and right only
      $("#left").css({'left': x});
      //sound gets louder when panel slide to left (open)
      //sound gets lower when panel slide to right (close)
      $sound.prop("volume", (1 - (304 / 2 - x) / (304 / 2)));
      console.log($sound.prop);
    }
  });
});
