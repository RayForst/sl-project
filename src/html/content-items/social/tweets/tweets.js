import Swiper from 'swiper'

let mySwiper

const reinitContainer = () => {
  const $wrapper = $('.tweets__list')
  const $center = $('.tweets > .center')
  const marginLeft = parseInt($center.css('margin-left'), 0)
  const paddingLeft = parseInt($center.css('padding-left'), 0)

  $wrapper.css('padding-left', marginLeft + paddingLeft)
}

const enableSwiper = () => {
  reinitContainer()

  mySwiper = new Swiper('.tweets .swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    navigation: {
      nextEl: '.tweets .swiper-button-next',
      prevEl: '.tweets .swiper-button-prev',
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

      $('.tweets .swiper-wrapper').removeAttr('style')
      $('.tweets .swiper-slide').removeAttr('style')
    }
  } else if (breakpoint.matches !== false) {
    return enableSwiper()
  }

  return true
}

window.addEventListener('resize', breakpointChecker)

breakpointChecker()
