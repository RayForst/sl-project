import '../../vendors/datepicker/datedropper'
import '../../vendors/dropdown/jquery-ui'

$('.date-input').dateDropper()
$('.language-select').selectmenu()

const setDatePlaceholder = (block, value) => {
  const date = value.split('.')
  const day = date[0]
  const month = date[1]
  const year = date[2]

  $('.placeholder.day', block).text(parseInt(day, 10))
  $('.placeholder.month', block).text(parseInt(month, 10))
  $('.placeholder.year', block).text(year)
}

$('.date-input').on('change', (e) => {
  const value = $(e.currentTarget).val()
  const block = $(e.currentTarget).closest('.calendar-item')
  setDatePlaceholder(block, value)
})

$('.date-placeholder').on('click', (e) => {
  const block = $(e.currentTarget).closest('.calendar-item')

  block.find('.date-input').click()
})

const openClass = 'calendar-item--open'

function openItem(el) {
  el.addClass(openClass)
  el.find('.calendar-item__slide-content').slideDown(300)
}

function closeItem(el) {
  el.removeClass(openClass)
  el.find('.calendar-item__slide-content').slideUp(300)
}

$('.calendar-item').on('click', (e) => {
  const $that = $(e.currentTarget)

  if (!$that.hasClass(openClass)) openItem($that)
})

$('.calendar-item__open-toggle').on('click', (e) => {
  e.stopImmediatePropagation()
  const $parent = $(e.currentTarget).closest('.calendar-item')

  if (!$parent.hasClass(openClass)) openItem($parent)
  else if ($parent.hasClass(openClass)) closeItem($parent)
})
