import Swiper from 'swiper'
import './item'

let mySwiper
let mySwiper2

const reinitContainer = () => {
  const $wrapper = $('.offer-carousel__list')
  const $center = $('.offer-carousel > .center')
  const marginLeft = parseInt($center.css('margin-left'), 0)
  const paddingLeft = parseInt($center.css('padding-left'), 0)

  $wrapper.css('padding-left', marginLeft + paddingLeft)
}

const enableSwiper = () => {
  reinitContainer()

  mySwiper = new Swiper('.offer-carousel .offer-carousel__tab[data-tab="1"] .swiper-container', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.offer-carousel .control-tab-1 .swiper-button-next',
      prevEl: '.offer-carousel .control-tab-1 .swiper-button-prev',
    },
    slidesPerGroup: 2,
    spaceBetween: 60,
    breakpoints: {
      768: {
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
    },
  })

  mySwiper2 = new Swiper('.offer-carousel .offer-carousel__tab[data-tab="2"] .swiper-container', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.offer-carousel .control-tab-2 .swiper-button-next',
      prevEl: '.offer-carousel .control-tab-2 .swiper-button-prev',
    },
    slidesPerGroup: 2,
    spaceBetween: 60,
    breakpoints: {
      768: {
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
    },
  })

  return true
}

const breakpointChecker = () => {
  const breakpoint = window.matchMedia('(min-width:768px)')

  if (false) {
    console.log('destroy')
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches !== true) {
      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) {
        mySwiper.destroy(true, true)
        mySwiper2.destroy(true, true)
        mySwiper = undefined
        mySwiper2 = undefined
        $('.offer-carousel .swiper-wrapper').removeAttr('style')
        $('.offer-carousel .swiper-slide').removeAttr('style')
      }
    } else if (breakpoint.matches !== false) {
      return enableSwiper()
    }
  }

  return enableSwiper()
}

const initTabs = () => {
  const $tabs = $('.offer-carousel__tab')

  $tabs.first().addClass('active')
}

const openTab = (e) => {
  const $that = $(e.currentTarget)
  const index = $that.data('tab')
  const $tabs = $('.offer-carousel__tab')
  const $controls = $('.offer-carousel .controls')

  $that.siblings().removeClass('offer-carousel__tab-control--active')
  $that.addClass('offer-carousel__tab-control--active')

  $tabs.add($controls).removeClass('active')
  $tabs.eq(index - 1).addClass('active')

  $(`.offer-carousel .control-tab-${index}`).addClass('active')
}

window.addEventListener('resize', breakpointChecker)

breakpointChecker()

initTabs()
$('.offer-carousel__tab-control').on('click', openTab)
