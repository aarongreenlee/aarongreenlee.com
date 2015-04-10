$(document).ready(function(){

  var sections = $('.section'),
      index = 0,
      windowHeight = $(window).height();

  $(window).on('scroll', function(){
    pos = $(window).scrollTop();
    offset = $(sections[index]).offset().top;
    color = $(sections[index + 1]).css("background-color");

    if (pos > offset - 1){
      index++;
      setTimeout(function(){
        $(sections[index]).css({
          "top": windowHeight * index,
          "height": windowHeight
        });
        $(sections[index]).addClass('active');
        $('.scroll-notification').css({
          "background-color":color
        })
      }, 1000);

    }

  });
});
