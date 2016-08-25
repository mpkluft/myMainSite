$(function(){

  $.fn.extend({
      animateCss: function (animationName) {
          var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          $(this).addClass('animated ' + animationName).one(animationEnd, function() {
              $(this).removeClass('animated ' + animationName);
          });
      }
  });
  //раскрытие меню .top-nav__ul по клику на бургер
  //поместить в ШТМЛ  div.burger  div.icon__burger
  $('.burger').click(function(){
    $(this).toggleClass('is-active');
    if($(this).hasClass('is-active')){  
      $('.menu__mobile_ul').css('display', 'block').animateCss('bounceInDown');
      $('.background').css('display', 'block').animateCss('fadeIn');
      $('.burger').css({
        'position': 'fixed',
         'right': '10px',
         'top': '10px'
      })
      
    } else {
      $('.menu__mobile_ul').css('display', 'none');
      $('.background').css('display', 'none');
      $('.burger').css({
        'position': '',
        'left': '',
        'top': ''
      });
    }
  });

// При ресайзе закрывать все меню
$(window).resize(function(){
  //console.log($(window).scrollTop());
  if($(".burger").hasClass('is-active')){
    $('.menu__mobile_ul').css('display', '');
    $('.background').css('display', '');
    $('.burger').css({
        'position': '',
        'left': '',
        'top': ''
    }).removeClass('is-active');
  }
});
$(window).scroll(function(){
  if($(this).scrollTop() > 0) {
    $('.arrow-up').fadeIn();
  } else {
    $('.arrow-up').fadeOut();
  }
});

$('.arrow-up').click(function(){
  $('body,html').animate({
    scrollTop: 0
  }, 400);
});


});
