/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/custom.js":
/*!*********************************!*\
  !*** ./assets/src/js/custom.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
console.log('Custom scripts loaded');

/***/ }),

/***/ "./assets/src/js/scripts/functions.js":
/*!********************************************!*\
  !*** ./assets/src/js/scripts/functions.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _slideDown: () => (/* binding */ _slideDown),
/* harmony export */   _slideToggle: () => (/* binding */ _slideToggle),
/* harmony export */   _slideUp: () => (/* binding */ _slideUp),
/* harmony export */   bodyLock: () => (/* binding */ bodyLock),
/* harmony export */   bodyLockStatus: () => (/* binding */ bodyLockStatus),
/* harmony export */   bodyLockToggle: () => (/* binding */ bodyLockToggle),
/* harmony export */   bodyUnlock: () => (/* binding */ bodyUnlock),
/* harmony export */   dataMediaQueries: () => (/* binding */ dataMediaQueries),
/* harmony export */   getDigFormat: () => (/* binding */ getDigFormat),
/* harmony export */   getHash: () => (/* binding */ getHash),
/* harmony export */   getRandomNumber: () => (/* binding */ getRandomNumber),
/* harmony export */   logger: () => (/* binding */ logger),
/* harmony export */   menuClose: () => (/* binding */ menuClose),
/* harmony export */   menuInit: () => (/* binding */ menuInit),
/* harmony export */   menuOpen: () => (/* binding */ menuOpen),
/* harmony export */   menuToggle: () => (/* binding */ menuToggle),
/* harmony export */   removeClasses: () => (/* binding */ removeClasses),
/* harmony export */   setHash: () => (/* binding */ setHash),
/* harmony export */   uniqArray: () => (/* binding */ uniqArray)
/* harmony export */ });
const mainParams = {
  IS_LOG: false
};
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
};
// ==========================================================

/**
 * Console logger with a symbol
 * @param {string} message - Message to log
 * @param {string} logSymbol - Symbol of type (success, info, warning, error, clock, question, alarm, star)
 */
const logger = (message, logSymbol) => {
  /**
   * Icon of log message
   * @type {string} 
   */
  const iconType = logSymbols[logSymbol];

  /**
   * Check if logging is enabled
   * @type {boolean}
   */
  if (mainParams.IS_LOG) {
    /**
     * Log message in console
     * @type {string}
     */
    console.log(`\n\t${iconType} ${message}\n`);
  }
};

/**
 * Generates random numbers between a min and max value
 * @param {number} min - Minimum value of random number
 * @param {number} max - Maximum value of random number
 * @param {number} [count] - Count of random numbers to generate
 * @returns {number|Array} Random number or array of random numbers
 */
function getRandomNumber(min, max, count) {
  /**
   * Final value of random number(s)
   * @type {number|Array}
   */
  let finalValue;

  /**
   * If count is not defined, generate a single number,
   * otherwise generate an array of numbers
   */
  if (typeof count === 'undefined') {
    finalValue = Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    finalValue = Array.from({
      length: count
    }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return finalValue;
}

/**
 * Removes duplicates from an array
 * @param {Array} array - Array of items
 * @returns {Array} Array without duplicates
 */
const uniqArray = array => {
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
    const itemIndex = self.indexOf(item);
    /**
     * Item is unique if its index of occurrence is equal to its index in the array
     * @type {boolean}
     */
    const isUnique = itemIndex === index;
    return isUnique;
  });
};
let _slideToggle = (target, duration = 500) => {
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};
let _slideDown = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.hidden = target.hidden ? false : null;
    showmore ? target.style.removeProperty('height') : null;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
      // Створюємо подію
      document.dispatchEvent(new CustomEvent("slideDownDone", {
        detail: {
          target: target
        }
      }));
    }, duration);
  }
};
let _slideUp = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = !showmore ? true : false;
      !showmore ? target.style.removeProperty('height') : null;
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      !showmore ? target.style.removeProperty('overflow') : null;
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
      // Створюємо подію 
      document.dispatchEvent(new CustomEvent("slideUpDone", {
        detail: {
          target: target
        }
      }));
    }, duration);
  }
};
function dataMediaQueries(array, dataSetValue) {
  // Отримання об'єктів з медіа-запитами
  const media = Array.from(array).filter(function (item, index, self) {
    if (item.dataset[dataSetValue]) {
      return item.dataset[dataSetValue].split(",")[0];
    }
  });
  // Ініціалізація об'єктів з медіа-запитами
  if (media.length) {
    const breakpointsArray = [];
    media.forEach(item => {
      const params = item.dataset[dataSetValue];
      const breakpoint = {};
      const paramsArray = params.split(",");
      breakpoint.value = paramsArray[0];
      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
      breakpoint.item = item;
      breakpointsArray.push(breakpoint);
    });
    // Отримуємо унікальні брейкпоінти
    let mdQueries = breakpointsArray.map(function (item) {
      return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
    });
    mdQueries = uniqArray(mdQueries);
    const mdQueriesArray = [];
    if (mdQueries.length) {
      // Працюємо з кожним брейкпоінтом
      mdQueries.forEach(breakpoint => {
        const paramsArray = breakpoint.split(",");
        const mediaBreakpoint = paramsArray[1];
        const mediaType = paramsArray[2];
        const matchMedia = window.matchMedia(paramsArray[0]);
        // Об'єкти з потрібними умовами
        const itemsArray = breakpointsArray.filter(function (item) {
          if (item.value === mediaBreakpoint && item.type === mediaType) {
            return true;
          }
        });
        mdQueriesArray.push({
          itemsArray,
          matchMedia
        });
      });
      return mdQueriesArray;
    }
  }
}

/**
 * Gets a hash (#) from the URL
 * @return {string} - The hash without the leading "#"
 */
function getHash() {
  // Gets a hash (#) from the URL
  // @return {string} - The hash without the leading "#"
  if (location.hash) {
    return location.hash.replace('#', '');
  }
}

/**
 * Sets the hash (#) of the URL
 * @param {string} hash - The hash to set. If not provided, the URL will be
 * reset to its full path without a hash.
 */
function setHash(hash) {
  // Sets the hash (#) of the URL
  // @param {string} hash - The hash to set. If not provided, the URL will be
  // reset to its full path without a hash.
  hash = hash ? `#${hash}` : window.location.href.split('#')[0];
  // Updates the URL without reloading the page or triggering a pop state event
  history.pushState('', '', hash);
}

/**
 * Formatting figures of type 100,000,000,000
 * Returns a number with thousands separators.
 * @param {number|string} item - The number to format
 * @param {string} [sepp=' '] - A separator for groups of thousands
 * @returns {string} - Formatted number
 */
function getDigFormat(item, sepp = ' ') {
  /* Formats a number with thousands separators.
   * @param {number|string} item - The number to format
   * @param {string} [sepp=' '] - A separator for groups of thousands
   * @returns {string} - Formatted number
   */
  return item.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1${sepp}`);
}

/**
 * Remove class from all elements in array
 * @param {array} array - Array of elements
 * @param {string} className - Class to remove
 */
function removeClasses(array, className) {
  // Remove class from all elements in array
  // @param {array} array - Array of elements
  // @param {string} className - Class to remove
  for (let i = 0; i < array.length; i++) {
    // Removes the class from a single element
    array[i].classList.remove(className);
  }
}
function menuInit() {
  const openButton = document.querySelector("[data-menu-open]");
  const menu = document.querySelector("[data-menu]");
  if (openButton) {
    document.addEventListener("click", function (e) {
      if (bodyLockStatus && e.target.closest('[data-menu-open]')) {
        menuToggle();
      } else if (e.target.closest('[data-menu-close]')) {
        menuClose();
      }
    });
  }
  ;
}
function menuOpen() {
  bodyLock();
  document.documentElement.classList.add("menu-open");
}
function menuClose() {
  bodyUnlock();
  document.documentElement.classList.remove("menu-open");
}
function menuToggle() {
  bodyLockToggle();
  document.documentElement.classList.toggle("menu-open");
}
let bodyUnlock = (delay = 500) => {
  let body = document.querySelector("body");
  if (bodyLockStatus) {
    let lock_padding = document.querySelectorAll("[data-lp]");
    setTimeout(() => {
      for (let index = 0; index < lock_padding.length; index++) {
        const el = lock_padding[index];
        el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      document.documentElement.classList.remove("lock");
    }, delay);
    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};
let bodyLock = (delay = 500) => {
  let body = document.querySelector("body");
  if (bodyLockStatus) {
    let lock_padding = document.querySelectorAll("[data-lp]");
    for (let index = 0; index < lock_padding.length; index++) {
      const el = lock_padding[index];
      el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    }
    body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    document.documentElement.classList.add("lock");
    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};
let bodyLockStatus = true;
let bodyLockToggle = (delay = 500) => {
  if (document.documentElement.classList.contains('lock')) {
    bodyUnlock(delay);
  } else {
    bodyLock(delay);
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./assets/src/app.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_scripts_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/scripts/functions.js */ "./assets/src/js/scripts/functions.js");
/* harmony import */ var _js_custom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/custom.js */ "./assets/src/js/custom.js");


// ? ===============================================
/* Go To Block */
// Documentation inside the module file scroll.js

// import './js/scripts/pageNavigation.js'

// ? ===============================================
/* Watcher */
// Documentation inside the module file

// import './scripts/watcher.js'

// ? ===============================================

/* Dynamic adaptive */
// Documentation of the plugin: 

// import "./js/scripts/dynamic_adapt.js"

// ? ===============================================
/* Function to add and remove classes to the root element when scrolling down or up*/
// Documentation inside the module file:

// import "./js/scripts/header-class-scroll.js"

// ? ===============================================
/* Swiper Slider */
// Documentation of the plugin: https://swiperjs.com/

// import "./js/libs/swiper.js"

// ? ===============================================
/* Modals Popups */
// Documentation: https://micromodal.vercel.app/

// import "./js/libs/modal.js"

// ? ===============================================

/* Spoiler functionality */
// Documentation inside the module file

// import "./js/scripts/spoilers.js"

// ? ===============================================

/* Select functionality */
// Documentation inside the module file

// import "./js/libs/select.js"

// ? ===============================================

/* Set cookie with the given name and value. */
// Documentation https://github.com/js-cookie/js-cookie/tree/latest#readme

// import './scripts/cookie.js'

// ? Custom scripts ================================


})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************************!*\
  !*** ./assets/src/app.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOK0M7O0FBRS9DO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7QUM1REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wbGUtd2VicGFjay8uL2Fzc2V0cy9zcmMvanMvY3VzdG9tLmpzIiwid2VicGFjazovL3NpbXBsZS13ZWJwYWNrLy4vYXNzZXRzL3NyYy9qcy9zY3JpcHRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaW1wbGUtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaW1wbGUtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NpbXBsZS13ZWJwYWNrLy4vYXNzZXRzL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXdlYnBhY2svLi9hc3NldHMvc3JjL2FwcC5zY3NzPzZlYzMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ0N1c3RvbSBzY3JpcHRzIGxvYWRlZCcpIiwiY29uc3QgbWFpblBhcmFtcyA9IHtcbiAgIElTX0xPRzogZmFsc2UsXG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zdCBsb2dTeW1ib2xzID0ge1xuICAgc3VjY2VzczogJ+KchScsXG4gICBpbmZvOiAn8J+aqScsXG4gICByb2NrZXQ6ICfwn5qAJyxcbiAgIHdhcm5pbmc6ICfinZcnLFxuICAgZXJyb3I6ICfinYwnLFxuICAgY2xvY2s6ICfijJsnLFxuICAgcXVlc3Rpb246ICfwn5GAJyxcbiAgIGFsYXJtOiAn8J+aqCcsXG4gICBzdGFyOiAn8J+Mnydcbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBDb25zb2xlIGxvZ2dlciB3aXRoIGEgc3ltYm9sXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9nU3ltYm9sIC0gU3ltYm9sIG9mIHR5cGUgKHN1Y2Nlc3MsIGluZm8sIHdhcm5pbmcsIGVycm9yLCBjbG9jaywgcXVlc3Rpb24sIGFsYXJtLCBzdGFyKVxuICovXG5leHBvcnQgY29uc3QgbG9nZ2VyID0gKG1lc3NhZ2UsIGxvZ1N5bWJvbCkgPT4ge1xuICAgLyoqXG4gICAgKiBJY29uIG9mIGxvZyBtZXNzYWdlXG4gICAgKiBAdHlwZSB7c3RyaW5nfSBcbiAgICAqL1xuICAgY29uc3QgaWNvblR5cGUgPSBsb2dTeW1ib2xzW2xvZ1N5bWJvbF1cblxuICAgLyoqXG4gICAgKiBDaGVjayBpZiBsb2dnaW5nIGlzIGVuYWJsZWRcbiAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICovXG4gICBpZiAobWFpblBhcmFtcy5JU19MT0cpIHtcbiAgICAgIC8qKlxuICAgICAgICogTG9nIG1lc3NhZ2UgaW4gY29uc29sZVxuICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAqL1xuICAgICAgY29uc29sZS5sb2coYFxcblxcdCR7aWNvblR5cGV9ICR7bWVzc2FnZX1cXG5gKVxuICAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyByYW5kb20gbnVtYmVycyBiZXR3ZWVuIGEgbWluIGFuZCBtYXggdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gLSBNaW5pbXVtIHZhbHVlIG9mIHJhbmRvbSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggLSBNYXhpbXVtIHZhbHVlIG9mIHJhbmRvbSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbY291bnRdIC0gQ291bnQgb2YgcmFuZG9tIG51bWJlcnMgdG8gZ2VuZXJhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ8QXJyYXl9IFJhbmRvbSBudW1iZXIgb3IgYXJyYXkgb2YgcmFuZG9tIG51bWJlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcihtaW4sIG1heCwgY291bnQpIHtcbiAgIC8qKlxuICAgICogRmluYWwgdmFsdWUgb2YgcmFuZG9tIG51bWJlcihzKVxuICAgICogQHR5cGUge251bWJlcnxBcnJheX1cbiAgICAqL1xuICAgbGV0IGZpbmFsVmFsdWVcblxuICAgLyoqXG4gICAgKiBJZiBjb3VudCBpcyBub3QgZGVmaW5lZCwgZ2VuZXJhdGUgYSBzaW5nbGUgbnVtYmVyLFxuICAgICogb3RoZXJ3aXNlIGdlbmVyYXRlIGFuIGFycmF5IG9mIG51bWJlcnNcbiAgICAqL1xuICAgaWYgKHR5cGVvZiBjb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGZpbmFsVmFsdWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG4gICB9IGVsc2Uge1xuICAgICAgZmluYWxWYWx1ZSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGNvdW50IH0sICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW4pXG4gICB9XG5cbiAgIHJldHVybiBmaW5hbFZhbHVlXG59XG5cbi8qKlxuICogUmVtb3ZlcyBkdXBsaWNhdGVzIGZyb20gYW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gQXJyYXkgb2YgaXRlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gQXJyYXkgd2l0aG91dCBkdXBsaWNhdGVzXG4gKi9cbmV4cG9ydCBjb25zdCB1bmlxQXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgIC8qKlxuICAgICogRmlsdGVycyBvdXQgZHVwbGljYXRlcyBmcm9tIGFuIGFycmF5XG4gICAgKiBAcGFyYW0geyp9IGl0ZW0gLSBDdXJyZW50IGl0ZW1cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIEluZGV4IG9mIGN1cnJlbnQgaXRlbVxuICAgICogQHBhcmFtIHtBcnJheX0gc2VsZiAtIFRoZSBhcnJheSBpdHNlbGZcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIGl0ZW0gaXMgdW5pcXVlIGFuZCBzaG91bGQgYmUga2VwdFxuICAgICovXG4gICByZXR1cm4gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgc2VsZikge1xuICAgICAgLyoqXG4gICAgICAgKiBJdGVtJ3MgaW5kZXggb2Ygb2NjdXJyZW5jZSBpbiB0aGUgYXJyYXlcbiAgICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IHNlbGYuaW5kZXhPZihpdGVtKVxuICAgICAgLyoqXG4gICAgICAgKiBJdGVtIGlzIHVuaXF1ZSBpZiBpdHMgaW5kZXggb2Ygb2NjdXJyZW5jZSBpcyBlcXVhbCB0byBpdHMgaW5kZXggaW4gdGhlIGFycmF5XG4gICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAqL1xuICAgICAgY29uc3QgaXNVbmlxdWUgPSBpdGVtSW5kZXggPT09IGluZGV4XG4gICAgICByZXR1cm4gaXNVbmlxdWVcbiAgIH0pXG59XG5cbmV4cG9ydCBsZXQgX3NsaWRlVG9nZ2xlID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDApID0+IHtcbiAgIGlmICh0YXJnZXQuaGlkZGVuKSB7XG4gICAgICByZXR1cm4gX3NsaWRlRG93bih0YXJnZXQsIGR1cmF0aW9uKVxuICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfc2xpZGVVcCh0YXJnZXQsIGR1cmF0aW9uKVxuICAgfVxufVxuXG5leHBvcnQgbGV0IF9zbGlkZURvd24gPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCwgc2hvd21vcmUgPSAwKSA9PiB7XG4gICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnX3NsaWRlJylcbiAgICAgIHRhcmdldC5oaWRkZW4gPSB0YXJnZXQuaGlkZGVuID8gZmFsc2UgOiBudWxsXG4gICAgICBzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JykgOiBudWxsXG4gICAgICBsZXQgaGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodFxuICAgICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBzaG93bW9yZSA/IGAke3Nob3dtb3JlfXB4YCA6IGAwcHhgXG4gICAgICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDBcbiAgICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMFxuICAgICAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDBcbiAgICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwXG4gICAgICB0YXJnZXQub2Zmc2V0SGVpZ2h0XG4gICAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gXCJoZWlnaHQsIG1hcmdpbiwgcGFkZGluZ1wiXG4gICAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnXG4gICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4J1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJylcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKVxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKVxuICAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpXG4gICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKVxuICAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5JylcbiAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdfc2xpZGUnKVxuICAgICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INC/0L7QtNGW0Y5cbiAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwic2xpZGVEb3duRG9uZVwiLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0XG4gICAgICAgICAgICB9XG4gICAgICAgICB9KSlcbiAgICAgIH0sIGR1cmF0aW9uKVxuICAgfVxufVxuXG5leHBvcnQgbGV0IF9zbGlkZVVwID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDAsIHNob3dtb3JlID0gMCkgPT4ge1xuICAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19zbGlkZScpXG4gICAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJ1xuICAgICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJ1xuICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGAke3RhcmdldC5vZmZzZXRIZWlnaHR9cHhgXG4gICAgICB0YXJnZXQub2Zmc2V0SGVpZ2h0XG4gICAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHNob3dtb3JlID8gYCR7c2hvd21vcmV9cHhgIDogYDBweGBcbiAgICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMFxuICAgICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwXG4gICAgICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMFxuICAgICAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDBcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgIHRhcmdldC5oaWRkZW4gPSAhc2hvd21vcmUgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICFzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JykgOiBudWxsXG4gICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJylcbiAgICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKVxuICAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJylcbiAgICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpXG4gICAgICAgICAhc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93JykgOiBudWxsXG4gICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKVxuICAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5JylcbiAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdfc2xpZGUnKVxuICAgICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INC/0L7QtNGW0Y4gXG4gICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInNsaWRlVXBEb25lXCIsIHtcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pKVxuICAgICAgfSwgZHVyYXRpb24pXG4gICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFNZWRpYVF1ZXJpZXMoYXJyYXksIGRhdGFTZXRWYWx1ZSkge1xuICAgLy8g0J7RgtGA0LjQvNCw0L3QvdGPINC+0LEn0ZTQutGC0ZbQsiDQtyDQvNC10LTRltCwLdC30LDQv9C40YLQsNC80LhcbiAgIGNvbnN0IG1lZGlhID0gQXJyYXkuZnJvbShhcnJheSkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgc2VsZikge1xuICAgICAgaWYgKGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdKSB7XG4gICAgICAgICByZXR1cm4gaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV0uc3BsaXQoXCIsXCIpWzBdXG4gICAgICB9XG4gICB9KVxuICAgLy8g0IbQvdGW0YbRltCw0LvRltC30LDRhtGW0Y8g0L7QsSfRlNC60YLRltCyINC3INC80LXQtNGW0LAt0LfQsNC/0LjRgtCw0LzQuFxuICAgaWYgKG1lZGlhLmxlbmd0aCkge1xuICAgICAgY29uc3QgYnJlYWtwb2ludHNBcnJheSA9IFtdXG4gICAgICBtZWRpYS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgY29uc3QgcGFyYW1zID0gaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV1cbiAgICAgICAgIGNvbnN0IGJyZWFrcG9pbnQgPSB7fVxuICAgICAgICAgY29uc3QgcGFyYW1zQXJyYXkgPSBwYXJhbXMuc3BsaXQoXCIsXCIpXG4gICAgICAgICBicmVha3BvaW50LnZhbHVlID0gcGFyYW1zQXJyYXlbMF1cbiAgICAgICAgIGJyZWFrcG9pbnQudHlwZSA9IHBhcmFtc0FycmF5WzFdID8gcGFyYW1zQXJyYXlbMV0udHJpbSgpIDogXCJtYXhcIlxuICAgICAgICAgYnJlYWtwb2ludC5pdGVtID0gaXRlbVxuICAgICAgICAgYnJlYWtwb2ludHNBcnJheS5wdXNoKGJyZWFrcG9pbnQpXG4gICAgICB9KVxuICAgICAgLy8g0J7RgtGA0LjQvNGD0ZTQvNC+INGD0L3RltC60LDQu9GM0L3RliDQsdGA0LXQudC60L/QvtGW0L3RgtC4XG4gICAgICBsZXQgbWRRdWVyaWVzID0gYnJlYWtwb2ludHNBcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgIHJldHVybiAnKCcgKyBpdGVtLnR5cGUgKyBcIi13aWR0aDogXCIgKyBpdGVtLnZhbHVlICsgXCJweCksXCIgKyBpdGVtLnZhbHVlICsgJywnICsgaXRlbS50eXBlXG4gICAgICB9KVxuICAgICAgbWRRdWVyaWVzID0gdW5pcUFycmF5KG1kUXVlcmllcylcbiAgICAgIGNvbnN0IG1kUXVlcmllc0FycmF5ID0gW11cblxuICAgICAgaWYgKG1kUXVlcmllcy5sZW5ndGgpIHtcbiAgICAgICAgIC8vINCf0YDQsNGG0Y7RlNC80L4g0Lcg0LrQvtC20L3QuNC8INCx0YDQtdC50LrQv9C+0ZbQvdGC0L7QvFxuICAgICAgICAgbWRRdWVyaWVzLmZvckVhY2goYnJlYWtwb2ludCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXNBcnJheSA9IGJyZWFrcG9pbnQuc3BsaXQoXCIsXCIpXG4gICAgICAgICAgICBjb25zdCBtZWRpYUJyZWFrcG9pbnQgPSBwYXJhbXNBcnJheVsxXVxuICAgICAgICAgICAgY29uc3QgbWVkaWFUeXBlID0gcGFyYW1zQXJyYXlbMl1cbiAgICAgICAgICAgIGNvbnN0IG1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShwYXJhbXNBcnJheVswXSlcbiAgICAgICAgICAgIC8vINCe0LEn0ZTQutGC0Lgg0Lcg0L/QvtGC0YDRltCx0L3QuNC80Lgg0YPQvNC+0LLQsNC80LhcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zQXJyYXkgPSBicmVha3BvaW50c0FycmF5LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT09IG1lZGlhQnJlYWtwb2ludCAmJiBpdGVtLnR5cGUgPT09IG1lZGlhVHlwZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBtZFF1ZXJpZXNBcnJheS5wdXNoKHtcbiAgICAgICAgICAgICAgIGl0ZW1zQXJyYXksXG4gICAgICAgICAgICAgICBtYXRjaE1lZGlhXG4gICAgICAgICAgICB9KVxuICAgICAgICAgfSlcbiAgICAgICAgIHJldHVybiBtZFF1ZXJpZXNBcnJheVxuICAgICAgfVxuICAgfVxufVxuXG4vKipcbiAqIEdldHMgYSBoYXNoICgjKSBmcm9tIHRoZSBVUkxcbiAqIEByZXR1cm4ge3N0cmluZ30gLSBUaGUgaGFzaCB3aXRob3V0IHRoZSBsZWFkaW5nIFwiI1wiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRIYXNoKCkge1xuICAgLy8gR2V0cyBhIGhhc2ggKCMpIGZyb20gdGhlIFVSTFxuICAgLy8gQHJldHVybiB7c3RyaW5nfSAtIFRoZSBoYXNoIHdpdGhvdXQgdGhlIGxlYWRpbmcgXCIjXCJcbiAgIGlmIChsb2NhdGlvbi5oYXNoKSB7IHJldHVybiBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJykgfVxufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggKCMpIG9mIHRoZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoIC0gVGhlIGhhc2ggdG8gc2V0LiBJZiBub3QgcHJvdmlkZWQsIHRoZSBVUkwgd2lsbCBiZVxuICogcmVzZXQgdG8gaXRzIGZ1bGwgcGF0aCB3aXRob3V0IGEgaGFzaC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEhhc2goaGFzaCkge1xuICAgLy8gU2V0cyB0aGUgaGFzaCAoIykgb2YgdGhlIFVSTFxuICAgLy8gQHBhcmFtIHtzdHJpbmd9IGhhc2ggLSBUaGUgaGFzaCB0byBzZXQuIElmIG5vdCBwcm92aWRlZCwgdGhlIFVSTCB3aWxsIGJlXG4gICAvLyByZXNldCB0byBpdHMgZnVsbCBwYXRoIHdpdGhvdXQgYSBoYXNoLlxuICAgaGFzaCA9IGhhc2ggPyBgIyR7aGFzaH1gIDogd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVswXVxuICAgLy8gVXBkYXRlcyB0aGUgVVJMIHdpdGhvdXQgcmVsb2FkaW5nIHRoZSBwYWdlIG9yIHRyaWdnZXJpbmcgYSBwb3Agc3RhdGUgZXZlbnRcbiAgIGhpc3RvcnkucHVzaFN0YXRlKCcnLCAnJywgaGFzaClcbn1cblxuLyoqXG4gKiBGb3JtYXR0aW5nIGZpZ3VyZXMgb2YgdHlwZSAxMDAsMDAwLDAwMCwwMDBcbiAqIFJldHVybnMgYSBudW1iZXIgd2l0aCB0aG91c2FuZHMgc2VwYXJhdG9ycy5cbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gaXRlbSAtIFRoZSBudW1iZXIgdG8gZm9ybWF0XG4gKiBAcGFyYW0ge3N0cmluZ30gW3NlcHA9JyAnXSAtIEEgc2VwYXJhdG9yIGZvciBncm91cHMgb2YgdGhvdXNhbmRzXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtIEZvcm1hdHRlZCBudW1iZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERpZ0Zvcm1hdChpdGVtLCBzZXBwID0gJyAnKSB7XG4gICAvKiBGb3JtYXRzIGEgbnVtYmVyIHdpdGggdGhvdXNhbmRzIHNlcGFyYXRvcnMuXG4gICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IGl0ZW0gLSBUaGUgbnVtYmVyIHRvIGZvcm1hdFxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtzZXBwPScgJ10gLSBBIHNlcGFyYXRvciBmb3IgZ3JvdXBzIG9mIHRob3VzYW5kc1xuICAgICogQHJldHVybnMge3N0cmluZ30gLSBGb3JtYXR0ZWQgbnVtYmVyXG4gICAgKi9cbiAgIHJldHVybiBpdGVtLnRvU3RyaW5nKCkucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoW15cXGRdfCQpKS9nLCBgJDEke3NlcHB9YClcbn1cblxuLyoqXG4gKiBSZW1vdmUgY2xhc3MgZnJvbSBhbGwgZWxlbWVudHMgaW4gYXJyYXlcbiAqIEBwYXJhbSB7YXJyYXl9IGFycmF5IC0gQXJyYXkgb2YgZWxlbWVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSBDbGFzcyB0byByZW1vdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMoYXJyYXksIGNsYXNzTmFtZSkge1xuICAgLy8gUmVtb3ZlIGNsYXNzIGZyb20gYWxsIGVsZW1lbnRzIGluIGFycmF5XG4gICAvLyBAcGFyYW0ge2FycmF5fSBhcnJheSAtIEFycmF5IG9mIGVsZW1lbnRzXG4gICAvLyBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gQ2xhc3MgdG8gcmVtb3ZlXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBSZW1vdmVzIHRoZSBjbGFzcyBmcm9tIGEgc2luZ2xlIGVsZW1lbnRcbiAgICAgIGFycmF5W2ldLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKVxuICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVudUluaXQoKSB7XG4gICBjb25zdCBvcGVuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1lbnUtb3Blbl1cIilcbiAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWVudV1cIilcbiAgIGlmIChvcGVuQnV0dG9uKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgIGlmIChib2R5TG9ja1N0YXR1cyAmJiBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1tZW51LW9wZW5dJykpIHtcbiAgICAgICAgICAgIG1lbnVUb2dnbGUoKVxuICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1tZW51LWNsb3NlXScpKSB7XG4gICAgICAgICAgICBtZW51Q2xvc2UoKVxuICAgICAgICAgfVxuICAgICAgfSlcbiAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gbWVudU9wZW4oKSB7XG4gICBib2R5TG9jaygpXG4gICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1lbnUtb3BlblwiKVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVDbG9zZSgpIHtcbiAgIGJvZHlVbmxvY2soKVxuICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LW9wZW5cIilcbn1cbmV4cG9ydCBmdW5jdGlvbiBtZW51VG9nZ2xlKCkge1xuICAgYm9keUxvY2tUb2dnbGUoKVxuICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJtZW51LW9wZW5cIilcbn1cblxuZXhwb3J0IGxldCBib2R5VW5sb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XG4gICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcbiAgICAgIGxldCBsb2NrX3BhZGRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbHBdXCIpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsb2NrX3BhZGRpbmcubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbCA9IGxvY2tfcGFkZGluZ1tpbmRleF1cbiAgICAgICAgICAgIGVsLnN0eWxlLnBhZGRpbmdSaWdodCA9ICcwcHgnXG4gICAgICAgICB9XG4gICAgICAgICBib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcwcHgnXG4gICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICAgIH0sIGRlbGF5KVxuICAgICAgYm9keUxvY2tTdGF0dXMgPSBmYWxzZVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICBib2R5TG9ja1N0YXR1cyA9IHRydWVcbiAgICAgIH0sIGRlbGF5KVxuICAgfVxufVxuXG5leHBvcnQgbGV0IGJvZHlMb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XG4gICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcbiAgICAgIGxldCBsb2NrX3BhZGRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbHBdXCIpXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbG9ja19wYWRkaW5nLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgY29uc3QgZWwgPSBsb2NrX3BhZGRpbmdbaW5kZXhdXG4gICAgICAgICBlbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykub2Zmc2V0V2lkdGggKyAncHgnXG4gICAgICB9XG4gICAgICBib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKS5vZmZzZXRXaWR0aCArICdweCdcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuXG4gICAgICBib2R5TG9ja1N0YXR1cyA9IGZhbHNlXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgIGJvZHlMb2NrU3RhdHVzID0gdHJ1ZVxuICAgICAgfSwgZGVsYXkpXG4gICB9XG59XG5cbmV4cG9ydCBsZXQgYm9keUxvY2tTdGF0dXMgPSB0cnVlXG5leHBvcnQgbGV0IGJvZHlMb2NrVG9nZ2xlID0gKGRlbGF5ID0gNTAwKSA9PiB7XG4gICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbG9jaycpKSB7XG4gICAgICBib2R5VW5sb2NrKGRlbGF5KVxuICAgfSBlbHNlIHtcbiAgICAgIGJvZHlMb2NrKGRlbGF5KVxuICAgfVxufVxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgVEYgZnJvbSBcIi4vanMvc2NyaXB0cy9mdW5jdGlvbnMuanNcIlxuXG4vLyA/ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBHbyBUbyBCbG9jayAqL1xuLy8gRG9jdW1lbnRhdGlvbiBpbnNpZGUgdGhlIG1vZHVsZSBmaWxlIHNjcm9sbC5qc1xuXG4vLyBpbXBvcnQgJy4vanMvc2NyaXB0cy9wYWdlTmF2aWdhdGlvbi5qcydcblxuLy8gPyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyogV2F0Y2hlciAqL1xuLy8gRG9jdW1lbnRhdGlvbiBpbnNpZGUgdGhlIG1vZHVsZSBmaWxlXG5cbi8vIGltcG9ydCAnLi9zY3JpcHRzL3dhdGNoZXIuanMnXG5cbi8vID8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyogRHluYW1pYyBhZGFwdGl2ZSAqL1xuLy8gRG9jdW1lbnRhdGlvbiBvZiB0aGUgcGx1Z2luOiBcblxuLy8gaW1wb3J0IFwiLi9qcy9zY3JpcHRzL2R5bmFtaWNfYWRhcHQuanNcIlxuXG4vLyA/ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBGdW5jdGlvbiB0byBhZGQgYW5kIHJlbW92ZSBjbGFzc2VzIHRvIHRoZSByb290IGVsZW1lbnQgd2hlbiBzY3JvbGxpbmcgZG93biBvciB1cCovXG4vLyBEb2N1bWVudGF0aW9uIGluc2lkZSB0aGUgbW9kdWxlIGZpbGU6XG5cbi8vIGltcG9ydCBcIi4vanMvc2NyaXB0cy9oZWFkZXItY2xhc3Mtc2Nyb2xsLmpzXCJcblxuLy8gPyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyogU3dpcGVyIFNsaWRlciAqL1xuLy8gRG9jdW1lbnRhdGlvbiBvZiB0aGUgcGx1Z2luOiBodHRwczovL3N3aXBlcmpzLmNvbS9cblxuLy8gaW1wb3J0IFwiLi9qcy9saWJzL3N3aXBlci5qc1wiXG5cbi8vID8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qIE1vZGFscyBQb3B1cHMgKi9cbi8vIERvY3VtZW50YXRpb246IGh0dHBzOi8vbWljcm9tb2RhbC52ZXJjZWwuYXBwL1xuXG4vLyBpbXBvcnQgXCIuL2pzL2xpYnMvbW9kYWwuanNcIlxuXG4vLyA/ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qIFNwb2lsZXIgZnVuY3Rpb25hbGl0eSAqL1xuLy8gRG9jdW1lbnRhdGlvbiBpbnNpZGUgdGhlIG1vZHVsZSBmaWxlXG5cbi8vIGltcG9ydCBcIi4vanMvc2NyaXB0cy9zcG9pbGVycy5qc1wiXG5cbi8vID8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyogU2VsZWN0IGZ1bmN0aW9uYWxpdHkgKi9cbi8vIERvY3VtZW50YXRpb24gaW5zaWRlIHRoZSBtb2R1bGUgZmlsZVxuXG4vLyBpbXBvcnQgXCIuL2pzL2xpYnMvc2VsZWN0LmpzXCJcblxuLy8gPyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKiBTZXQgY29va2llIHdpdGggdGhlIGdpdmVuIG5hbWUgYW5kIHZhbHVlLiAqL1xuLy8gRG9jdW1lbnRhdGlvbiBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZS90cmVlL2xhdGVzdCNyZWFkbWVcblxuLy8gaW1wb3J0ICcuL3NjcmlwdHMvY29va2llLmpzJ1xuXG4vLyA/IEN1c3RvbSBzY3JpcHRzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCBcIi4vanMvY3VzdG9tLmpzXCJcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJtYWluUGFyYW1zIiwiSVNfTE9HIiwibG9nU3ltYm9scyIsInN1Y2Nlc3MiLCJpbmZvIiwicm9ja2V0Iiwid2FybmluZyIsImVycm9yIiwiY2xvY2siLCJxdWVzdGlvbiIsImFsYXJtIiwic3RhciIsImxvZ2dlciIsIm1lc3NhZ2UiLCJsb2dTeW1ib2wiLCJpY29uVHlwZSIsImdldFJhbmRvbU51bWJlciIsIm1pbiIsIm1heCIsImNvdW50IiwiZmluYWxWYWx1ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsInVuaXFBcnJheSIsImFycmF5IiwiZmlsdGVyIiwiaXRlbSIsImluZGV4Iiwic2VsZiIsIml0ZW1JbmRleCIsImluZGV4T2YiLCJpc1VuaXF1ZSIsIl9zbGlkZVRvZ2dsZSIsInRhcmdldCIsImR1cmF0aW9uIiwiaGlkZGVuIiwiX3NsaWRlRG93biIsIl9zbGlkZVVwIiwic2hvd21vcmUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsInN0eWxlIiwicmVtb3ZlUHJvcGVydHkiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvdmVyZmxvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwidHJhbnNpdGlvblByb3BlcnR5IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwid2luZG93Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImRvY3VtZW50IiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiZGF0YU1lZGlhUXVlcmllcyIsImRhdGFTZXRWYWx1ZSIsIm1lZGlhIiwiZGF0YXNldCIsInNwbGl0IiwiYnJlYWtwb2ludHNBcnJheSIsImZvckVhY2giLCJwYXJhbXMiLCJicmVha3BvaW50IiwicGFyYW1zQXJyYXkiLCJ2YWx1ZSIsInR5cGUiLCJ0cmltIiwicHVzaCIsIm1kUXVlcmllcyIsIm1hcCIsIm1kUXVlcmllc0FycmF5IiwibWVkaWFCcmVha3BvaW50IiwibWVkaWFUeXBlIiwibWF0Y2hNZWRpYSIsIml0ZW1zQXJyYXkiLCJnZXRIYXNoIiwibG9jYXRpb24iLCJoYXNoIiwicmVwbGFjZSIsInNldEhhc2giLCJocmVmIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImdldERpZ0Zvcm1hdCIsInNlcHAiLCJ0b1N0cmluZyIsInJlbW92ZUNsYXNzZXMiLCJjbGFzc05hbWUiLCJpIiwibWVudUluaXQiLCJvcGVuQnV0dG9uIiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImJvZHlMb2NrU3RhdHVzIiwiY2xvc2VzdCIsIm1lbnVUb2dnbGUiLCJtZW51Q2xvc2UiLCJtZW51T3BlbiIsImJvZHlMb2NrIiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keVVubG9jayIsImJvZHlMb2NrVG9nZ2xlIiwidG9nZ2xlIiwiZGVsYXkiLCJib2R5IiwibG9ja19wYWRkaW5nIiwicXVlcnlTZWxlY3RvckFsbCIsImVsIiwicGFkZGluZ1JpZ2h0IiwiaW5uZXJXaWR0aCIsIm9mZnNldFdpZHRoIiwiVEYiXSwic291cmNlUm9vdCI6IiJ9