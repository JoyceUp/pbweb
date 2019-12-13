$(function () {
    window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
        d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
    _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
        $.src="https://v2.zopim.com/?62h3pYHBgs6Rk6813ELnMLO9l3tRQomD";z.t=+new Date;$.
            type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");
  var $lang = $('.lang-left-change')
  var $langMenu = $('.lang-click .langMenu')
  var $langUnder = $('.lang-click .header-lang-img2')
  $lang.click(function () {
    $langMenu.toggle()
    $langUnder.toggleClass('rotate')
  })

  var $change = $('.footer-l2')
  var $changeShow = $('.footer-l2-m-dailog')
  $change.click(function() {
    $changeShow.toggle()
  })

  var slide = $('#header-t1-l')
  var slideLeft = $('#header-logo')
  var slideScroll = $('#header-scroll')
  slide.click(function() {
   slideScroll.toggle(500)
  })
  slideLeft.click(function() {
    slideScroll.toggle(500)
  })
//   var mySwiper = new Swiper('.swiper-container', {
//       direction: 'horizontal', // 垂直切换选项
//       loop: true, // 循环模式选项

//       // 如果需要分页器
//       pagination: {
//           el: '.swiper-pagination',
//           clickable: true,
//           bulletActiveClass: 'my-bullet-active',
//       },

//       // 如果需要前进后退按钮
//       navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//       },
//   })
})