import '../../vendors/datepicker/datedropper'
import '../../vendors/dropdown/jquery-ui'

const $form = $('form.book-form__form')

$('#date').dateDropper()
$('#number').selectmenu()
$('#language').selectmenu()

const setDatePlaceholder = (value) => {
  const date = value.split('.')
  const day = date[0]
  const month = date[1]
  const year = date[2]

  $('.placeholder.day').text(parseInt(day, 10))
  $('.placeholder.month').text(parseInt(month, 10))
  $('.placeholder.year').text(year)
}

function changePrice() {
	$.ajax({
		type : 'POST',
		url : $form.attr('data-price-action'),
		dataType : 'json',
		data: $form.serialize(),
		success: function(result) {
			if (typeof result.saved != 'undefined' && result.saved) {
				console.log(result);
			}

		}
	})
}

$('#date').on('change', (e) => {
    const value = $(e.currentTarget).val()
    setDatePlaceholder(value)
	changePrice()
})

$('#number').on("selectmenuchange", function( event, ui ) {
	changePrice()
})

$('#language').on("selectmenuchange", function( event, ui ) {
	changePrice()
})

$('.date-placeholder').on('click', () => {
  $('#date').click()
})

function changeTotalAmount(e) {
  const peopleCount = parseInt($(e.currentTarget).val(), 10)
  const priceForOne = parseInt($form.data('price'), 10)
  const tourCurrency = $form.data('currency')

  $('.book-form__total', $form).text(`${priceForOne * peopleCount}${tourCurrency}`)
}

$('input[type="people"]', $form).on('change', changeTotalAmount)
