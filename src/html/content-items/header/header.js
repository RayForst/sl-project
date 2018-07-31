const burger = $('.header-burger')

const open = (trigger) => {
  trigger.addClass('is-active')
  burger.addClass('header-burger--open')
  $('body').addClass('fixed')
}

const close = (trigger) => {
  trigger.removeClass('is-active')
  burger.removeClass('header-burger--open')
  $('body').removeClass('fixed')
}

const toggleMenu = (e) => {
  const trigger = $(e.currentTarget)
  return trigger.hasClass('is-active') ? close(trigger) : open(trigger)
}

$('.hamburger').on('click', toggleMenu)
