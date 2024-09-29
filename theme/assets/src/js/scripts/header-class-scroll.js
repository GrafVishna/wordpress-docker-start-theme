
/**
 * Function to add and remove classes to the root element when scrolling down or up
 * @param {Object} params - Object with params
 * @param {string} params.startScrolledClass - Class to add to the root element when the scroll position is greater than the trigger
 * @param {string} params.scrolledDownClass - Class to add to the root element when scrolling down
 * @param {number} params.scrollTrigger - The position in px to start adding the classes when scrolling
 */
function showHideHeader(params) {
   const header = document.querySelector('header')

   // Exit the function if there is no header element
   if (!header) return

   /**
    * The last scroll position
    * @type {number}
    */
   let lastScrollTop = 0

   /**
    * Event handler for the scroll event
    * @param {Event} event - Scroll event
    */
   window.addEventListener('scroll', function (event) {
      scrollEvent()
   })

   function scrollEvent() {
      let scrollTop = window.scrollY || document.documentElement.scrollTop

      // Add the startScrolledClass to the root element
      if (scrollTop > params.scrollTrigger) {
         document.documentElement.classList.add(params.startScrolledClass)

         // Add the scrolledDownClass to the root element if scrolling down
         if (scrollTop > lastScrollTop) {
            document.documentElement.classList.add(params.scrolledDownClass)
            // Remove the scrolledDownClass to the root element if scrolling up
         } else {
            document.documentElement.classList.remove(params.scrolledDownClass)
         }

         // Remove the startScrolledClass to the root element
      } else {
         document.documentElement.classList.remove(params.startScrolledClass)
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
   }
   scrollEvent()
}


document.addEventListener('DOMContentLoaded', () => {
   showHideHeader({
      startScrolledClass: "scrolled-page",
      scrolledDownClass: "scrolled-down",
      scrollTrigger: 10
   })
})
