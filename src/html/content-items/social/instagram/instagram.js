import Swiper from 'swiper'

let mySwiper

const reinitContainer = () => {
  const $wrapper = $('.instagram__list')
  const $center = $('.instagram > .center')
  const marginLeft = parseInt($center.css('margin-left'), 0)
  const paddingLeft = parseInt($center.css('padding-left'), 0)

  $wrapper.css('padding-left', marginLeft + paddingLeft)
}

const enableSwiper = () => {
  reinitContainer()

  mySwiper = new Swiper('.instagram .swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    navigation: {
      nextEl: '.instagram .swiper-button-next',
      prevEl: '.instagram .swiper-button-prev',
    },
    slidesPerGroup: 2,
  })

  return true
}

const breakpointChecker = () => {
  const breakpoint = window.matchMedia('(min-width:768px)')
  // if larger viewport and multi-row layout needed
  if (breakpoint.matches !== true) {
    // clean up old instances and inline styles when available
    if (mySwiper !== undefined) {
      mySwiper.destroy(true, true)

      mySwiper = undefined

      $('.instagram .swiper-wrapper').removeAttr('style')
      $('.instagram .swiper-slide').removeAttr('style')
    }
  } else if (breakpoint.matches !== false) {
    return enableSwiper()
  }

  return true
}

window.addEventListener('resize', breakpointChecker)

breakpointChecker()
