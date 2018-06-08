import retina from 'retinajs'
import './content-items/header/header'

$('body').on('click', 'a[href="#"]', e => e.preventDefault())

window.addEventListener('load', retina)
