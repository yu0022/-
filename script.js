
// ハンバーガーメニュー //
window.addEventListener('DOMContentLoaded', function(){
  $('.hamburger').on('click',function() {
    $('.header_nav').fadeToggle(300);
    $('.hamburger').toggleClass('cross');
  });
});

// スライダー //
window.addEventListener('DOMContentLoaded', function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
    cssEase: 'liner'
  });
});

// スティッキーヘッダー //
window.addEventListener('DOMContentLoaded', function(){
  var $win = $(window),
      $fv = $('.fv'),
      $header = $('.header_list'),
      fvHeight = $fv.outerHeight();
      fixedClass = 'fixed';

      $win.on('load scroll',function() {
        var value = $(this).scrollTop();
        if($win.width() > 768) {
          if( value > fvHeight) {
            $header.addClass(fixedClass);
          } else {
            $header.removeClass(fixedClass);
          }
        }
      });
});

