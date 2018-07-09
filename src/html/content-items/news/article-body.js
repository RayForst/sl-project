function setupTitles() {
  const active = $('.article-body__description.active')
  let next = active.next('.article-body__description')
  let prev = active.prev('.article-body__description')

  if (!next.length) {
    next = $('.article-body__description').first()
  }
  if (!prev.length) {
    prev = $('.article-body__description').last()
  }

  $('.content-prev .post-title').text(prev.data('title'))
  $('.content-next .post-title').text(next.data('title'))
}

$('.content-button').on('click', (e) => {
  const dir = $(e.currentTarget).hasClass('content-next')
  let next
  const active = $('.article-body__description.active')

  if (dir) {
    next = active.next('.article-body__description')

    if (!next.length) {
      next = $('.article-body__description').first()
    }
  } else {
    next = active.prev('.article-body__description')
    if (!next.length) {
      next = $('.article-body__description').last()
    }
  }

  active.removeClass('active')
  next.addClass('active')
  $('.hero__title').text(next.data('title'))

  const imgUrl = next.data('bg')
  $('.hero__slide-image').css('background-image', `url('${imgUrl}')`)

  setupTitles()
})

setupTitles()
