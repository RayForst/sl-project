import 'lightbox2'

const name = 'hidden-gallery'
const $trigger = $(`.${name}__trigger`)
const $content = $(`.${name}__content`)

const getFirstImage = () => $content.find('a').first()

$trigger.on('click', () => {
  const $first = getFirstImage()

  $first.trigger('click')
})
