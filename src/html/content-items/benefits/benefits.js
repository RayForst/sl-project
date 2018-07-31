import ScrollMagic from 'scrollmagic'
import 'tooltipster'

const controller = new ScrollMagic.Controller()

if ($('#benefits').length) {
  new ScrollMagic.Scene({
    triggerElement: '#benefits',
    offset: -200,
  })
    .addTo(controller) // assign the scene to the controller
    .on('enter', () => {
      const objectToAnimate = $('#benefits')

      if (objectToAnimate.hasClass('benefits--animate')) return
      objectToAnimate.addClass('benefits--animate')
    })
}

$('.tooltip').tooltipster({
  animation: 'fade',
  trigger: 'custom',
  triggerOpen: {
    click: true,
    tap: true,
  },
  triggerClose: {
    click: true,
    tap: true,
  },
  functionPosition(instance, helper, position) {
    const newPosition = position
    const tooltipW = 315
    const triggerW = 90

    const width =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

    const hasSpaceInRight = position.coord.left + tooltipW + triggerW > width

    if (width >= 760) {
      newPosition.coord.top -= 17

      if (hasSpaceInRight) {
        newPosition.coord.left -= 107
        $(helper.tooltip).addClass('tooltipster-arrow-right')
      } else {
        newPosition.coord.left += 108
      }
    } else {
      newPosition.coord.top -= 8
    }

    return newPosition
  },
})

$.tooltipster.on('created', (event) => {
  const elem = $(event.origin)

  $('.tooltip-open').removeClass('tooltip-open')

  elem.addClass('tooltip-open')
})

$.tooltipster.on('closing', () => {
  setTimeout(() => {
    const hasTooltip = $('.tooltipster-base').length || false

    if (!hasTooltip) {
      $('.tooltip-open').removeClass('tooltip-open')
    }
  }, 50)
})
