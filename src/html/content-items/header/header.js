const burger = $('.burger')

const open = (trigger) => {
  trigger.addClass('is-active')
  burger.addClass('burger--open')
  $('body').addClass('fixed')
}

const close = (trigger) => {
  trigger.removeClass('is-active')
  burger.removeClass('burger--open')
  $('body').removeClass('fixed')
}

const toggleMenu = (e) => {
  const trigger = $(e.currentTarget)

  console.log('toggle')
  return trigger.hasClass('is-active') ? close(trigger) : open(trigger)
}

$('.hamburger').on('click', toggleMenu)
