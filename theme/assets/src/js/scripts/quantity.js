
function quantityPlus(input, max) {
   const currentValue = parseInt(input.value, 10)
   if (currentValue >= max) return
   input.value = currentValue + 1
   dispatchChangeEvent(input)
}

function quantityMinus(input, min) {
   const currentValue = parseInt(input.value, 10)
   if (currentValue <= min) return
   input.value = currentValue - 1
   dispatchChangeEvent(input)
}

function dispatchChangeEvent(input) {
   const event = new Event('change', { bubbles: true })
   input.dispatchEvent(event)
}

function quantityChangeHandler(e) {
   const targetBtn = e.target
   const targetInput = targetBtn.parentElement.querySelector('input')
   const min = parseInt(targetInput.getAttribute('min'))
   const max = parseInt(targetInput.getAttribute('max'))

   if (targetBtn.classList.contains('quantity__plus')) {
      quantityPlus(targetInput, max)
   } else if (targetBtn.classList.contains('quantity__minus')) {
      quantityMinus(targetInput, min)
   }
}

function ifLinkNotice(event) {
   console.log(event.target)
   const target = event.target
   const link = target.closest('a')
   if (link) {
      target.classList.add('link-notice')
   }
}