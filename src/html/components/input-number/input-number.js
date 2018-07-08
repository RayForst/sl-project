$('.quantity-select__control').on('click', (e) => {
  const input = $(e.target)
    .parent()
    .find('input')
  let value = parseInt(input.val(), 10)
  const direction = $(e.target).data('type') === 'increment'

  if (direction) value += 1
  else value -= 1

  const min = parseInt(input.attr('min'), 10)

  if (value < min) value = min

  input.val(value).trigger('change')
})
