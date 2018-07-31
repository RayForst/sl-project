import retina from 'retinajs'
import './components/lazy-load/lazy-load'
import './content-items/book-form/book-form'
import './content-items/header/header'
import './content-items/social/instagram/instagram'
import './content-items/social/tweets/tweets'
import './content-items/social/tripadvisor/tripadvisor'
import './content-items/benefits/benefits'
import './content-items/hero/hero'
import './content-items/carousel/carousel'
import './content-items/news/article-body'
import './components/calendar-item/calendar-item'
import './components/input-number/input-number'
import './components/hidden-gallery/hidden-gallery'

$('body').on('click', 'a[href="#"]', e => e.preventDefault())

window.addEventListener('load', retina)

const $allVideos = $(
  "iframe[src*='//player.vimeo.com'], iframe[src*='//www.youtube.com'], object, embed",
)
const $fluidEl = $('figure')

$allVideos.each(function() {
  $(this)
    // jQuery .data does not work on object/embed elements
    .attr('data-aspectRatio', this.height / this.width)
    .removeAttr('height')
    .removeAttr('width')
})

$(window)
  .resize(function() {
    const newWidth = $fluidEl.width()
    $allVideos.each(function() {
      const $el = $(this)
      $el.width(newWidth).height(newWidth * $el.attr('data-aspectRatio'))
    })
  })
  .resize()
