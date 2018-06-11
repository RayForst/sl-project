import retina from 'retinajs'
import './content-items/header/header'
import './content-items/social/instagram/instagram'
import './content-items/social/tweets/tweets'

$('body').on('click', 'a[href="#"]', e => e.preventDefault())

window.addEventListener('load', retina)
