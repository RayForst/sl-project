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
import './components/calendar-item/calendar-item'
import './components/input-number/input-number'

$('body').on('click', 'a[href="#"]', e => e.preventDefault())

window.addEventListener('load', retina)
