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

  return new Swiper('.hero .swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
}

enableSwiper()
