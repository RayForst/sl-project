import Swiper from 'swiper'

let mySwiper

const enableSwiper = () => {
  mySwiper = new Swiper('.tripadvisor .swiper-container', {
    navigation: {
      nextEl: '.tripadvisor .swiper-button-next',
      prevEl: '.tripadvisor .swiper-button-prev',
    },
    slidesPerView: 1,
  })

  return true
}

const breakpointChecker = () => {
  console.log('breakpoint checkeer')
  const breakpoint = window.matchMedia('(min-width:768px)')
  // if larger viewport and multi-row layout needed
  if (breakpoint.matches !== true) {
    // clean up old instances and inline styles when available
    if (mySwiper !== undefined) {
      mySwiper.destroy(true, true)

      mySwiper = undefined

      console.log('desttroy')
      $('.tripadvisor .swiper-wrapper').removeAttr('style')
      $('.tripadvisor .swiper-slide').removeAttr('style')
    }
  } else if (breakpoint.matches !== false && mySwiper === undefined) {
    console.log('enable')
    return enableSwiper()
  }

  if (mySwiper) mySwiper.update()

  return true
}

window.addEventListener('resize', breakpointChecker)

breakpointChecker()
