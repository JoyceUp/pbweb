$(function () {
    window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
        d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
    _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
        $.src="https://v2.zopim.com/?62h3pYHBgs6Rk6813ELnMLO9l3tRQomD";z.t=+new Date;$.
            type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");
//   var $product = $('.mty_product')
//   var $menu = $('.mty_product .menu')
//   $product.on('click', function () {
//     console.log($menu)
//       $menu.toggle()
//   })
  var $lang = $('.lang-left-change')
  var $langMenu = $('.lang-click .langMenu')
  var $langUnder = $('.lang-click .lang-p3')
  $lang.click(function () {
    console.log('nihao')
    $langMenu.toggle()
    $langUnder.toggleClass('rotate')
  })
  var $footer = $('.footer-l2-m')
  var $footerDailog = $('.footer-l2-m-dailog')
  var $footerp2 = $('.footer-l2-m .l2-p2')
  $footer.click(function () {
    $footerDailog.toggle()
    $footerp2.toggleClass('rotate')
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
setInterval(function(){
    $("#quotefooter").load("./public/quotefooter.html");
}, 60000);