import Swiper from 'swiper'

const reinitContainer = () => {
  const $wrapper = $('.hero__list')
  const $center = $('.hero > .center')
  const marginLeft = parseInt($center.css('margin-left'), 0)
  const paddingLeft = parseInt($center.css('padding-left'), 0)

  $wrapper.css('padding-left', marginLeft + paddingLeft)
}

const enableSwiper = () => {
  reinitContainer()

  let swiper

  if ($('.hero .hero__navigation-container').length) {
    swiper = new Swiper('.hero .swiper-container', {
      speed: 600,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.hero .swiper-button-next',
        prevEl: '.hero .swiper-button-prev',
      },
    })
  } else {
    swiper = new Swiper('.hero .swiper-container', {
      speed: 600,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
  }

  if (swiper) {
    swiper.on('slideChange', () => {}).on('transitionEnd', () => {
      $('.swiper-slide-animation').removeClass('swiper-slide-animation')
      $('.hero .swiper-slide-active').addClass('swiper-slide-animation')
    })
  }

  return swiper
}

enableSwiper()

$('.hero__slide').on('mousemove', function (e) {
  $(this)
    .find('.hero__slide-image')
    .css({
      'transform-origin': `${((e.pageX - $(this).offset().left) / $(this).width()) *
        100}% ${((e.pageY - $(this).offset().top) / $(this).height()) * 100}%`,
    })
})
