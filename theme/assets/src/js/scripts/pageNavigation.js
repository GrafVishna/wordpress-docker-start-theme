
/*
This JavaScript function gotoBlock is used to scroll to a specific element on the page. It takes four parameters:

targetBlock: A string representing the CSS selector of the element to scroll to.
noHeader (optional): A boolean value indicating whether to include the header in the scroll calculation. If true, the header will not be taken into account.
speed (optional): A number representing the speed of the scroll animation in milliseconds.
offsetTop (optional): A number representing the offset to apply to the top of the element before scrolling to it.
The function first selects the element using the provided targetBlock selector. If the element is found, it calculates the height of the header if noHeader is true. Then, it creates an options object with the speed, header height, offset, and easing function.

Next, it checks if the menu is open and closes it if it is. It then checks if the SmoothScroll object is defined. If it is, it uses a supplement to perform the scroll animation. Otherwise, it calculates the position of the target element, adjusts it based on the header height and offset, and scrolls to that position using the window.scrollTo method.

The function does not return anything (void).
*/
let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
   const targetBlockElement = document.querySelector(targetBlock)
   if (targetBlockElement) {
      let headerItem = ''
      let headerItemHeight = 0
      if (noHeader) {
         headerItem = 'header'
         const headerElement = document.querySelector(headerItem)
         if (!headerElement.classList.contains('_header-scroll')) {
            headerElement.style.cssText = `transition-duration: 0s;`
            headerElement.classList.add('_header-scroll')
            headerItemHeight = headerElement.offsetHeight
            headerElement.classList.remove('_header-scroll')
            setTimeout(() => {
               headerElement.style.cssText = ``
            }, 0)
         } else {
            headerItemHeight = headerElement.offsetHeight
         }
      }
      let options = {
         speedAsDuration: true,
         speed: speed,
         header: headerItem,
         offset: offsetTop,
         easing: 'easeOutQuad',
      }
      // close the menu if it is open
      document.documentElement.classList.contains("menu-open") ? MenuController.close() : null

      if (typeof SmoothScroll !== 'undefined') {
         // Scrolling using a supplement
         new SmoothScroll().animateScroll(targetBlockElement, '', options)
      } else {
         // Scrolling with standard means
         let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY
         targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition
         targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition
         window.scrollTo({
            top: targetBlockElementPosition,
            behavior: "smooth"
         })
      }
   }
}

/**
 * Attaches an event handler to the document to handle page navigation.
 * Page navigation is defined as any link that starts with "#" or "/",
 * and includes a hash. If the link is to the current page, it smooth
 * scrolls to the element with the id of the hash. If the link is to a
 * different page, it navigates to the new page and smooth scrolls to
 * the element with the id of the hash.
 */
const pageNavigation = () => {
   document.addEventListener("click", pageNavigationAction)

   function pageNavigationAction(e) {
      const targetElement = e.target

      if (targetElement.closest('a[href^="#"]')) {
         // anchoring on the current page
         const gotoLink = targetElement.closest('a[href^="#"]')
         const href = gotoLink.getAttribute('href')

         if (href.startsWith("#")) {
            e.preventDefault() // prevents the default transition
            gotoBlock(href, true, 500, 0)
         }
      } else if (targetElement.closest('a[href^="/"]')) {
         // Switching to the main page or other page with anchor
         const gotoLink = targetElement.closest('a[href^="/"]')
         const href = gotoLink.getAttribute('href')

         if (href.includes("#")) {
            const [page, hash] = href.split("#")
            e.preventDefault() // prevents the default transition

            // Verification on the current page
            if (window.location.pathname === page) {
               // Page is already open, just screen to an item
               gotoBlock(`#${hash}`, true, 500, 0)
            } else {
               // go to a new page
               window.location.href = `${page}#${hash}`
            }
         }
      } else if (targetElement.closest('a[href^="https"]')) {
         // switching to the outer page
         const gotoLink = targetElement.closest('a[href^="http"]')
         const href = gotoLink.getAttribute('href')

         if (href.includes("#")) {
            // Do not process the hash for the outer pages
            window.location.href = href
            e.preventDefault()
         }
      }
   }

   // Check if there is a hash in the URL and scroll to the appropriate item
   if (window.location.hash) {

      const hash = window.location.hash
      const targetElement = document.querySelector(hash)
      if (targetElement) {
         const headerOffset = document.querySelector('header') ? document.querySelector('header').offsetHeight : 0
         const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY
         const offsetPosition = elementPosition - headerOffset
         window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
         })

         location.hash = ''
      }
   }
}

document.addEventListener('DOMContentLoaded', function () {
   MenuController.init()
   pageNavigation()
})