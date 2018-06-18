$('.offer-carousel__item')
  .on('mouseenter click', (e) => {
    const $that = $(e.currentTarget)
    $('.offer-carousel__item').removeClass('offer-carousel__item--open')

    $that.addClass('offer-carousel__item--open')
  })
  .on('mouseleave', () => {
    $('.offer-carousel__item').removeClass('offer-carousel__item--open')
  })
