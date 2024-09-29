const mainParams = {
   IS_LOG: false,
}
// ==========================================================
const logSymbols = {
   success: '✅',
   info: '🚩',
   rocket: '🚀',
   warning: '❗',
   error: '❌',
   clock: '⌛',
   question: '👀',
   alarm: '🚨',
   star: '🌟'
}
// ==========================================================

/**
 * Console logger with a symbol
 * @param {string} message - Message to log
 * @param {string} logSymbol - Symbol of type (success, info, warning, error, clock, question, alarm, star)
 */
export const logger = (message, logSymbol) => {
   /**
    * Icon of log message
    * @type {string} 
    */
   const iconType = logSymbols[logSymbol]

   /**
    * Check if logging is enabled
    * @type {boolean}
    */
   if (mainParams.IS_LOG) {
      /**
       * Log message in console
       * @type {string}
       */
      console.log(`\n\t${iconType} ${message}\n`)
   }
}

/**
 * Generates random numbers between a min and max value
 * @param {number} min - Minimum value of random number
 * @param {number} max - Maximum value of random number
 * @param {number} [count] - Count of random numbers to generate
 * @returns {number|Array} Random number or array of random numbers
 */
export function getRandomNumber(min, max, count) {
   /**
    * Final value of random number(s)
    * @type {number|Array}
    */
   let finalValue

   /**
    * If count is not defined, generate a single number,
    * otherwise generate an array of numbers
    */
   if (typeof count === 'undefined') {
      finalValue = Math.floor(Math.random() * (max - min + 1)) + min
   } else {
      finalValue = Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min)
   }

   return finalValue
}

/**
 * Removes duplicates from an array
 * @param {Array} array - Array of items
 * @returns {Array} Array without duplicates
 */
export const uniqArray = (array) => {
   /**
    * Filters out duplicates from an array
    * @param {*} item - Current item
    * @param {number} index - Index of current item
    * @param {Array} self - The array itself
    * @returns {boolean} True if item is unique and should be kept
    */
   return array.filter(function (item, index, self) {
      /**
       * Item's index of occurrence in the array
       * @type {number}
       */
      const itemIndex = self.indexOf(item)
      /**
       * Item is unique if its index of occurrence is equal to its index in the array
       * @type {boolean}
       */
      const isUnique = itemIndex === index
      return isUnique
   })
}

export let _slideToggle = (target, duration = 500) => {
   if (target.hidden) {
      return _slideDown(target, duration)
   } else {
      return _slideUp(target, duration)
   }
}

export let _slideDown = (target, duration = 500, showmore = 0) => {
   if (!target.classList.contains('_slide')) {
      target.classList.add('_slide')
      target.hidden = target.hidden ? false : null
      showmore ? target.style.removeProperty('height') : null
      let height = target.offsetHeight
      target.style.overflow = 'hidden'
      target.style.height = showmore ? `${showmore}px` : `0px`
      target.style.paddingTop = 0
      target.style.paddingBottom = 0
      target.style.marginTop = 0
      target.style.marginBottom = 0
      target.offsetHeight
      target.style.transitionProperty = "height, margin, padding"
      target.style.transitionDuration = duration + 'ms'
      target.style.height = height + 'px'
      target.style.removeProperty('padding-top')
      target.style.removeProperty('padding-bottom')
      target.style.removeProperty('margin-top')
      target.style.removeProperty('margin-bottom')
      window.setTimeout(() => {
         target.style.removeProperty('height')
         target.style.removeProperty('overflow')
         target.style.removeProperty('transition-duration')
         target.style.removeProperty('transition-property')
         target.classList.remove('_slide')
         // Створюємо подію
         document.dispatchEvent(new CustomEvent("slideDownDone", {
            detail: {
               target: target
            }
         }))
      }, duration)
   }
}

export let _slideUp = (target, duration = 500, showmore = 0) => {
   if (!target.classList.contains('_slide')) {
      target.classList.add('_slide')
      target.style.transitionProperty = 'height, margin, padding'
      target.style.transitionDuration = duration + 'ms'
      target.style.height = `${target.offsetHeight}px`
      target.offsetHeight
      target.style.overflow = 'hidden'
      target.style.height = showmore ? `${showmore}px` : `0px`
      target.style.paddingTop = 0
      target.style.paddingBottom = 0
      target.style.marginTop = 0
      target.style.marginBottom = 0
      window.setTimeout(() => {
         target.hidden = !showmore ? true : false
         !showmore ? target.style.removeProperty('height') : null
         target.style.removeProperty('padding-top')
         target.style.removeProperty('padding-bottom')
         target.style.removeProperty('margin-top')
         target.style.removeProperty('margin-bottom')
         !showmore ? target.style.removeProperty('overflow') : null
         target.style.removeProperty('transition-duration')
         target.style.removeProperty('transition-property')
         target.classList.remove('_slide')
         // Створюємо подію 
         document.dispatchEvent(new CustomEvent("slideUpDone", {
            detail: {
               target: target
            }
         }))
      }, duration)
   }
}


export function dataMediaQueries(array, dataSetValue) {
   // Отримання об'єктів з медіа-запитами
   const media = Array.from(array).filter(function (item, index, self) {
      if (item.dataset[dataSetValue]) {
         return item.dataset[dataSetValue].split(",")[0]
      }
   })
   // Ініціалізація об'єктів з медіа-запитами
   if (media.length) {
      const breakpointsArray = []
      media.forEach(item => {
         const params = item.dataset[dataSetValue]
         const breakpoint = {}
         const paramsArray = params.split(",")
         breakpoint.value = paramsArray[0]
         breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max"
         breakpoint.item = item
         breakpointsArray.push(breakpoint)
      })
      // Отримуємо унікальні брейкпоінти
      let mdQueries = breakpointsArray.map(function (item) {
         return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type
      })
      mdQueries = uniqArray(mdQueries)
      const mdQueriesArray = []

      if (mdQueries.length) {
         // Працюємо з кожним брейкпоінтом
         mdQueries.forEach(breakpoint => {
            const paramsArray = breakpoint.split(",")
            const mediaBreakpoint = paramsArray[1]
            const mediaType = paramsArray[2]
            const matchMedia = window.matchMedia(paramsArray[0])
            // Об'єкти з потрібними умовами
            const itemsArray = breakpointsArray.filter(function (item) {
               if (item.value === mediaBreakpoint && item.type === mediaType) {
                  return true
               }
            })
            mdQueriesArray.push({
               itemsArray,
               matchMedia
            })
         })
         return mdQueriesArray
      }
   }
}

/**
 * Gets a hash (#) from the URL
 * @return {string} - The hash without the leading "#"
 */
export function getHash() {
   // Gets a hash (#) from the URL
   // @return {string} - The hash without the leading "#"
   if (location.hash) { return location.hash.replace('#', '') }
}

/**
 * Sets the hash (#) of the URL
 * @param {string} hash - The hash to set. If not provided, the URL will be
 * reset to its full path without a hash.
 */
export function setHash(hash) {
   // Sets the hash (#) of the URL
   // @param {string} hash - The hash to set. If not provided, the URL will be
   // reset to its full path without a hash.
   hash = hash ? `#${hash}` : window.location.href.split('#')[0]
   // Updates the URL without reloading the page or triggering a pop state event
   history.pushState('', '', hash)
}

/**
 * Formatting figures of type 100,000,000,000
 * Returns a number with thousands separators.
 * @param {number|string} item - The number to format
 * @param {string} [sepp=' '] - A separator for groups of thousands
 * @returns {string} - Formatted number
 */
export function getDigFormat(item, sepp = ' ') {
   /* Formats a number with thousands separators.
    * @param {number|string} item - The number to format
    * @param {string} [sepp=' '] - A separator for groups of thousands
    * @returns {string} - Formatted number
    */
   return item.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1${sepp}`)
}

/**
 * Remove class from all elements in array
 * @param {array} array - Array of elements
 * @param {string} className - Class to remove
 */
export function removeClasses(array, className) {
   // Remove class from all elements in array
   // @param {array} array - Array of elements
   // @param {string} className - Class to remove
   for (let i = 0; i < array.length; i++) {
      // Removes the class from a single element
      array[i].classList.remove(className)
   }
}

export function menuInit() {
   const openButton = document.querySelector("[data-menu-open]")
   const menu = document.querySelector("[data-menu]")
   if (openButton) {
      document.addEventListener("click", function (e) {
         if (bodyLockStatus && e.target.closest('[data-menu-open]')) {
            menuToggle()
         } else if (e.target.closest('[data-menu-close]')) {
            menuClose()
         }
      })
   };
}
export function menuOpen() {
   bodyLock()
   document.documentElement.classList.add("menu-open")
}
export function menuClose() {
   bodyUnlock()
   document.documentElement.classList.remove("menu-open")
}
export function menuToggle() {
   bodyLockToggle()
   document.documentElement.classList.toggle("menu-open")
}

export let bodyUnlock = (delay = 500) => {
   let body = document.querySelector("body")
   if (bodyLockStatus) {
      let lock_padding = document.querySelectorAll("[data-lp]")
      setTimeout(() => {
         for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index]
            el.style.paddingRight = '0px'
         }
         body.style.paddingRight = '0px'
         document.documentElement.classList.remove("lock")
      }, delay)
      bodyLockStatus = false
      setTimeout(function () {
         bodyLockStatus = true
      }, delay)
   }
}

export let bodyLock = (delay = 500) => {
   let body = document.querySelector("body")
   if (bodyLockStatus) {
      let lock_padding = document.querySelectorAll("[data-lp]")
      for (let index = 0; index < lock_padding.length; index++) {
         const el = lock_padding[index]
         el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'
      }
      body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'
      document.documentElement.classList.add("lock")

      bodyLockStatus = false
      setTimeout(function () {
         bodyLockStatus = true
      }, delay)
   }
}

export let bodyLockStatus = true
export let bodyLockToggle = (delay = 500) => {
   if (document.documentElement.classList.contains('lock')) {
      bodyUnlock(delay)
   } else {
      bodyLock(delay)
   }
}


