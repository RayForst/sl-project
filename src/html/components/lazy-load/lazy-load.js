import LazyLoad from 'vanilla-lazyload'

function lazyImgLoad() {
  return new LazyLoad({
    elements_selector: '.lazy',
  })
}

const lazy = lazyImgLoad()

export default lazy
