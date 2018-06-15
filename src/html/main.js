import retina from 'retinajs'
import './content-items/header/header'
import './content-items/social/instagram/instagram'
import './content-items/social/tweets/tweets'
import './content-items/social/tripadvisor/tripadvisor'
import './content-items/benefits/benefits'
import './content-items/hero/hero'
import './content-items/carousel/carousel'

$('body').on('click', 'a[href="#"]', e => e.preventDefault())

window.addEventListener('load', retina)
