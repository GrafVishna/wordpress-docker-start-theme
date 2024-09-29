/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!*********************************!*\
  !*** ./assets/src/admin-app.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_scripts_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/scripts/functions.js */ "./assets/src/js/scripts/functions.js");


/* Select functionality */
// To display and output icons from iconic font in the selection

// import "./js/admin-functions/icons-select.js"

// ? ===============================================
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!***********************************!*\
  !*** ./assets/src/admin-app.scss ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTitDOztBQUcvQztBQUNBOztBQUVBOztBQUVBLG9EOzs7Ozs7Ozs7QUNSQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbXBsZS13ZWJwYWNrLy4vYXNzZXRzL3NyYy9qcy9zY3JpcHRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaW1wbGUtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaW1wbGUtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NpbXBsZS13ZWJwYWNrLy4vYXNzZXRzL3NyYy9hZG1pbi1hcHAuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXdlYnBhY2svLi9hc3NldHMvc3JjL2FkbWluLWFwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1haW5QYXJhbXMgPSB7XG4gICBJU19MT0c6IGZhbHNlLFxufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3QgbG9nU3ltYm9scyA9IHtcbiAgIHN1Y2Nlc3M6ICfinIUnLFxuICAgaW5mbzogJ/CfmqknLFxuICAgcm9ja2V0OiAn8J+agCcsXG4gICB3YXJuaW5nOiAn4p2XJyxcbiAgIGVycm9yOiAn4p2MJyxcbiAgIGNsb2NrOiAn4oybJyxcbiAgIHF1ZXN0aW9uOiAn8J+RgCcsXG4gICBhbGFybTogJ/CfmqgnLFxuICAgc3RhcjogJ/CfjJ8nXG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQ29uc29sZSBsb2dnZXIgd2l0aCBhIHN5bWJvbFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSBNZXNzYWdlIHRvIGxvZ1xuICogQHBhcmFtIHtzdHJpbmd9IGxvZ1N5bWJvbCAtIFN5bWJvbCBvZiB0eXBlIChzdWNjZXNzLCBpbmZvLCB3YXJuaW5nLCBlcnJvciwgY2xvY2ssIHF1ZXN0aW9uLCBhbGFybSwgc3RhcilcbiAqL1xuZXhwb3J0IGNvbnN0IGxvZ2dlciA9IChtZXNzYWdlLCBsb2dTeW1ib2wpID0+IHtcbiAgIC8qKlxuICAgICogSWNvbiBvZiBsb2cgbWVzc2FnZVxuICAgICogQHR5cGUge3N0cmluZ30gXG4gICAgKi9cbiAgIGNvbnN0IGljb25UeXBlID0gbG9nU3ltYm9sc1tsb2dTeW1ib2xdXG5cbiAgIC8qKlxuICAgICogQ2hlY2sgaWYgbG9nZ2luZyBpcyBlbmFibGVkXG4gICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAqL1xuICAgaWYgKG1haW5QYXJhbXMuSVNfTE9HKSB7XG4gICAgICAvKipcbiAgICAgICAqIExvZyBtZXNzYWdlIGluIGNvbnNvbGVcbiAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgKi9cbiAgICAgIGNvbnNvbGUubG9nKGBcXG5cXHQke2ljb25UeXBlfSAke21lc3NhZ2V9XFxuYClcbiAgIH1cbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgcmFuZG9tIG51bWJlcnMgYmV0d2VlbiBhIG1pbiBhbmQgbWF4IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIC0gTWluaW11bSB2YWx1ZSBvZiByYW5kb20gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IC0gTWF4aW11bSB2YWx1ZSBvZiByYW5kb20gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gW2NvdW50XSAtIENvdW50IG9mIHJhbmRvbSBudW1iZXJzIHRvIGdlbmVyYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfEFycmF5fSBSYW5kb20gbnVtYmVyIG9yIGFycmF5IG9mIHJhbmRvbSBudW1iZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21OdW1iZXIobWluLCBtYXgsIGNvdW50KSB7XG4gICAvKipcbiAgICAqIEZpbmFsIHZhbHVlIG9mIHJhbmRvbSBudW1iZXIocylcbiAgICAqIEB0eXBlIHtudW1iZXJ8QXJyYXl9XG4gICAgKi9cbiAgIGxldCBmaW5hbFZhbHVlXG5cbiAgIC8qKlxuICAgICogSWYgY291bnQgaXMgbm90IGRlZmluZWQsIGdlbmVyYXRlIGEgc2luZ2xlIG51bWJlcixcbiAgICAqIG90aGVyd2lzZSBnZW5lcmF0ZSBhbiBhcnJheSBvZiBudW1iZXJzXG4gICAgKi9cbiAgIGlmICh0eXBlb2YgY291bnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBmaW5hbFZhbHVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxuICAgfSBlbHNlIHtcbiAgICAgIGZpbmFsVmFsdWUgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBjb3VudCB9LCAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluKVxuICAgfVxuXG4gICByZXR1cm4gZmluYWxWYWx1ZVxufVxuXG4vKipcbiAqIFJlbW92ZXMgZHVwbGljYXRlcyBmcm9tIGFuIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIEFycmF5IG9mIGl0ZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IEFycmF5IHdpdGhvdXQgZHVwbGljYXRlc1xuICovXG5leHBvcnQgY29uc3QgdW5pcUFycmF5ID0gKGFycmF5KSA9PiB7XG4gICAvKipcbiAgICAqIEZpbHRlcnMgb3V0IGR1cGxpY2F0ZXMgZnJvbSBhbiBhcnJheVxuICAgICogQHBhcmFtIHsqfSBpdGVtIC0gQ3VycmVudCBpdGVtXG4gICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBJbmRleCBvZiBjdXJyZW50IGl0ZW1cbiAgICAqIEBwYXJhbSB7QXJyYXl9IHNlbGYgLSBUaGUgYXJyYXkgaXRzZWxmXG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBpdGVtIGlzIHVuaXF1ZSBhbmQgc2hvdWxkIGJlIGtlcHRcbiAgICAqL1xuICAgcmV0dXJuIGFycmF5LmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcbiAgICAgIC8qKlxuICAgICAgICogSXRlbSdzIGluZGV4IG9mIG9jY3VycmVuY2UgaW4gdGhlIGFycmF5XG4gICAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAgICovXG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBzZWxmLmluZGV4T2YoaXRlbSlcbiAgICAgIC8qKlxuICAgICAgICogSXRlbSBpcyB1bmlxdWUgaWYgaXRzIGluZGV4IG9mIG9jY3VycmVuY2UgaXMgZXF1YWwgdG8gaXRzIGluZGV4IGluIHRoZSBhcnJheVxuICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGlzVW5pcXVlID0gaXRlbUluZGV4ID09PSBpbmRleFxuICAgICAgcmV0dXJuIGlzVW5pcXVlXG4gICB9KVxufVxuXG5leHBvcnQgbGV0IF9zbGlkZVRvZ2dsZSA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwKSA9PiB7XG4gICBpZiAodGFyZ2V0LmhpZGRlbikge1xuICAgICAgcmV0dXJuIF9zbGlkZURvd24odGFyZ2V0LCBkdXJhdGlvbilcbiAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX3NsaWRlVXAodGFyZ2V0LCBkdXJhdGlvbilcbiAgIH1cbn1cblxuZXhwb3J0IGxldCBfc2xpZGVEb3duID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDAsIHNob3dtb3JlID0gMCkgPT4ge1xuICAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19zbGlkZScpXG4gICAgICB0YXJnZXQuaGlkZGVuID0gdGFyZ2V0LmhpZGRlbiA/IGZhbHNlIDogbnVsbFxuICAgICAgc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpIDogbnVsbFxuICAgICAgbGV0IGhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHRcbiAgICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gc2hvd21vcmUgPyBgJHtzaG93bW9yZX1weGAgOiBgMHB4YFxuICAgICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwXG4gICAgICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDBcbiAgICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwXG4gICAgICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMFxuICAgICAgdGFyZ2V0Lm9mZnNldEhlaWdodFxuICAgICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmdcIlxuICAgICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJ1xuICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCdcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKVxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKVxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJylcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JylcbiAgICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKVxuICAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJylcbiAgICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpXG4gICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX3NsaWRlJylcbiAgICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDQv9C+0LTRltGOXG4gICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInNsaWRlRG93bkRvbmVcIiwge1xuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxuICAgICAgICAgICAgfVxuICAgICAgICAgfSkpXG4gICAgICB9LCBkdXJhdGlvbilcbiAgIH1cbn1cblxuZXhwb3J0IGxldCBfc2xpZGVVcCA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwLCBzaG93bW9yZSA9IDApID0+IHtcbiAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdfc2xpZGUnKVxuICAgICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZydcbiAgICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcydcbiAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBgJHt0YXJnZXQub2Zmc2V0SGVpZ2h0fXB4YFxuICAgICAgdGFyZ2V0Lm9mZnNldEhlaWdodFxuICAgICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBzaG93bW9yZSA/IGAke3Nob3dtb3JlfXB4YCA6IGAwcHhgXG4gICAgICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDBcbiAgICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMFxuICAgICAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDBcbiAgICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICB0YXJnZXQuaGlkZGVuID0gIXNob3dtb3JlID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAhc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpIDogbnVsbFxuICAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpXG4gICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJylcbiAgICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpXG4gICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKVxuICAgICAgICAgIXNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpIDogbnVsbFxuICAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJylcbiAgICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpXG4gICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX3NsaWRlJylcbiAgICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDQv9C+0LTRltGOIFxuICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJzbGlkZVVwRG9uZVwiLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0XG4gICAgICAgICAgICB9XG4gICAgICAgICB9KSlcbiAgICAgIH0sIGR1cmF0aW9uKVxuICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhTWVkaWFRdWVyaWVzKGFycmF5LCBkYXRhU2V0VmFsdWUpIHtcbiAgIC8vINCe0YLRgNC40LzQsNC90L3RjyDQvtCxJ9GU0LrRgtGW0LIg0Lcg0LzQtdC00ZbQsC3Qt9Cw0L/QuNGC0LDQvNC4XG4gICBjb25zdCBtZWRpYSA9IEFycmF5LmZyb20oYXJyYXkpLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcbiAgICAgIGlmIChpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXSkge1xuICAgICAgICAgcmV0dXJuIGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdLnNwbGl0KFwiLFwiKVswXVxuICAgICAgfVxuICAgfSlcbiAgIC8vINCG0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGPINC+0LEn0ZTQutGC0ZbQsiDQtyDQvNC10LTRltCwLdC30LDQv9C40YLQsNC80LhcbiAgIGlmIChtZWRpYS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGJyZWFrcG9pbnRzQXJyYXkgPSBbXVxuICAgICAgbWVkaWEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdXG4gICAgICAgICBjb25zdCBicmVha3BvaW50ID0ge31cbiAgICAgICAgIGNvbnN0IHBhcmFtc0FycmF5ID0gcGFyYW1zLnNwbGl0KFwiLFwiKVxuICAgICAgICAgYnJlYWtwb2ludC52YWx1ZSA9IHBhcmFtc0FycmF5WzBdXG4gICAgICAgICBicmVha3BvaW50LnR5cGUgPSBwYXJhbXNBcnJheVsxXSA/IHBhcmFtc0FycmF5WzFdLnRyaW0oKSA6IFwibWF4XCJcbiAgICAgICAgIGJyZWFrcG9pbnQuaXRlbSA9IGl0ZW1cbiAgICAgICAgIGJyZWFrcG9pbnRzQXJyYXkucHVzaChicmVha3BvaW50KVxuICAgICAgfSlcbiAgICAgIC8vINCe0YLRgNC40LzRg9GU0LzQviDRg9C90ZbQutCw0LvRjNC90ZYg0LHRgNC10LnQutC/0L7RltC90YLQuFxuICAgICAgbGV0IG1kUXVlcmllcyA9IGJyZWFrcG9pbnRzQXJyYXkubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICByZXR1cm4gJygnICsgaXRlbS50eXBlICsgXCItd2lkdGg6IFwiICsgaXRlbS52YWx1ZSArIFwicHgpLFwiICsgaXRlbS52YWx1ZSArICcsJyArIGl0ZW0udHlwZVxuICAgICAgfSlcbiAgICAgIG1kUXVlcmllcyA9IHVuaXFBcnJheShtZFF1ZXJpZXMpXG4gICAgICBjb25zdCBtZFF1ZXJpZXNBcnJheSA9IFtdXG5cbiAgICAgIGlmIChtZFF1ZXJpZXMubGVuZ3RoKSB7XG4gICAgICAgICAvLyDQn9GA0LDRhtGO0ZTQvNC+INC3INC60L7QttC90LjQvCDQsdGA0LXQudC60L/QvtGW0L3RgtC+0LxcbiAgICAgICAgIG1kUXVlcmllcy5mb3JFYWNoKGJyZWFrcG9pbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zQXJyYXkgPSBicmVha3BvaW50LnNwbGl0KFwiLFwiKVxuICAgICAgICAgICAgY29uc3QgbWVkaWFCcmVha3BvaW50ID0gcGFyYW1zQXJyYXlbMV1cbiAgICAgICAgICAgIGNvbnN0IG1lZGlhVHlwZSA9IHBhcmFtc0FycmF5WzJdXG4gICAgICAgICAgICBjb25zdCBtYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEocGFyYW1zQXJyYXlbMF0pXG4gICAgICAgICAgICAvLyDQntCxJ9GU0LrRgtC4INC3INC/0L7RgtGA0ZbQsdC90LjQvNC4INGD0LzQvtCy0LDQvNC4XG4gICAgICAgICAgICBjb25zdCBpdGVtc0FycmF5ID0gYnJlYWtwb2ludHNBcnJheS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgIGlmIChpdGVtLnZhbHVlID09PSBtZWRpYUJyZWFrcG9pbnQgJiYgaXRlbS50eXBlID09PSBtZWRpYVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbWRRdWVyaWVzQXJyYXkucHVzaCh7XG4gICAgICAgICAgICAgICBpdGVtc0FycmF5LFxuICAgICAgICAgICAgICAgbWF0Y2hNZWRpYVxuICAgICAgICAgICAgfSlcbiAgICAgICAgIH0pXG4gICAgICAgICByZXR1cm4gbWRRdWVyaWVzQXJyYXlcbiAgICAgIH1cbiAgIH1cbn1cblxuLyoqXG4gKiBHZXRzIGEgaGFzaCAoIykgZnJvbSB0aGUgVVJMXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gVGhlIGhhc2ggd2l0aG91dCB0aGUgbGVhZGluZyBcIiNcIlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SGFzaCgpIHtcbiAgIC8vIEdldHMgYSBoYXNoICgjKSBmcm9tIHRoZSBVUkxcbiAgIC8vIEByZXR1cm4ge3N0cmluZ30gLSBUaGUgaGFzaCB3aXRob3V0IHRoZSBsZWFkaW5nIFwiI1wiXG4gICBpZiAobG9jYXRpb24uaGFzaCkgeyByZXR1cm4gbG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpIH1cbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoICgjKSBvZiB0aGUgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gaGFzaCAtIFRoZSBoYXNoIHRvIHNldC4gSWYgbm90IHByb3ZpZGVkLCB0aGUgVVJMIHdpbGwgYmVcbiAqIHJlc2V0IHRvIGl0cyBmdWxsIHBhdGggd2l0aG91dCBhIGhhc2guXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRIYXNoKGhhc2gpIHtcbiAgIC8vIFNldHMgdGhlIGhhc2ggKCMpIG9mIHRoZSBVUkxcbiAgIC8vIEBwYXJhbSB7c3RyaW5nfSBoYXNoIC0gVGhlIGhhc2ggdG8gc2V0LiBJZiBub3QgcHJvdmlkZWQsIHRoZSBVUkwgd2lsbCBiZVxuICAgLy8gcmVzZXQgdG8gaXRzIGZ1bGwgcGF0aCB3aXRob3V0IGEgaGFzaC5cbiAgIGhhc2ggPSBoYXNoID8gYCMke2hhc2h9YCA6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF1cbiAgIC8vIFVwZGF0ZXMgdGhlIFVSTCB3aXRob3V0IHJlbG9hZGluZyB0aGUgcGFnZSBvciB0cmlnZ2VyaW5nIGEgcG9wIHN0YXRlIGV2ZW50XG4gICBoaXN0b3J5LnB1c2hTdGF0ZSgnJywgJycsIGhhc2gpXG59XG5cbi8qKlxuICogRm9ybWF0dGluZyBmaWd1cmVzIG9mIHR5cGUgMTAwLDAwMCwwMDAsMDAwXG4gKiBSZXR1cm5zIGEgbnVtYmVyIHdpdGggdGhvdXNhbmRzIHNlcGFyYXRvcnMuXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IGl0ZW0gLSBUaGUgbnVtYmVyIHRvIGZvcm1hdFxuICogQHBhcmFtIHtzdHJpbmd9IFtzZXBwPScgJ10gLSBBIHNlcGFyYXRvciBmb3IgZ3JvdXBzIG9mIHRob3VzYW5kc1xuICogQHJldHVybnMge3N0cmluZ30gLSBGb3JtYXR0ZWQgbnVtYmVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREaWdGb3JtYXQoaXRlbSwgc2VwcCA9ICcgJykge1xuICAgLyogRm9ybWF0cyBhIG51bWJlciB3aXRoIHRob3VzYW5kcyBzZXBhcmF0b3JzLlxuICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBpdGVtIC0gVGhlIG51bWJlciB0byBmb3JtYXRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VwcD0nICddIC0gQSBzZXBhcmF0b3IgZm9yIGdyb3VwcyBvZiB0aG91c2FuZHNcbiAgICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gRm9ybWF0dGVkIG51bWJlclxuICAgICovXG4gICByZXR1cm4gaXRlbS50b1N0cmluZygpLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKFteXFxkXXwkKSkvZywgYCQxJHtzZXBwfWApXG59XG5cbi8qKlxuICogUmVtb3ZlIGNsYXNzIGZyb20gYWxsIGVsZW1lbnRzIGluIGFycmF5XG4gKiBAcGFyYW0ge2FycmF5fSBhcnJheSAtIEFycmF5IG9mIGVsZW1lbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gQ2xhc3MgdG8gcmVtb3ZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzc2VzKGFycmF5LCBjbGFzc05hbWUpIHtcbiAgIC8vIFJlbW92ZSBjbGFzcyBmcm9tIGFsbCBlbGVtZW50cyBpbiBhcnJheVxuICAgLy8gQHBhcmFtIHthcnJheX0gYXJyYXkgLSBBcnJheSBvZiBlbGVtZW50c1xuICAgLy8gQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIENsYXNzIHRvIHJlbW92ZVxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gUmVtb3ZlcyB0aGUgY2xhc3MgZnJvbSBhIHNpbmdsZSBlbGVtZW50XG4gICAgICBhcnJheVtpXS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSlcbiAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVJbml0KCkge1xuICAgY29uc3Qgb3BlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZW51LW9wZW5dXCIpXG4gICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1lbnVdXCIpXG4gICBpZiAob3BlbkJ1dHRvbikge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICBpZiAoYm9keUxvY2tTdGF0dXMgJiYgZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtbWVudS1vcGVuXScpKSB7XG4gICAgICAgICAgICBtZW51VG9nZ2xlKClcbiAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtbWVudS1jbG9zZV0nKSkge1xuICAgICAgICAgICAgbWVudUNsb3NlKClcbiAgICAgICAgIH1cbiAgICAgIH0pXG4gICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVPcGVuKCkge1xuICAgYm9keUxvY2soKVxuICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51LW9wZW5cIilcbn1cbmV4cG9ydCBmdW5jdGlvbiBtZW51Q2xvc2UoKSB7XG4gICBib2R5VW5sb2NrKClcbiAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS1vcGVuXCIpXG59XG5leHBvcnQgZnVuY3Rpb24gbWVudVRvZ2dsZSgpIHtcbiAgIGJvZHlMb2NrVG9nZ2xlKClcbiAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwibWVudS1vcGVuXCIpXG59XG5cbmV4cG9ydCBsZXQgYm9keVVubG9jayA9IChkZWxheSA9IDUwMCkgPT4ge1xuICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICAgaWYgKGJvZHlMb2NrU3RhdHVzKSB7XG4gICAgICBsZXQgbG9ja19wYWRkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWxwXVwiKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbG9ja19wYWRkaW5nLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWwgPSBsb2NrX3BhZGRpbmdbaW5kZXhdXG4gICAgICAgICAgICBlbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnMHB4J1xuICAgICAgICAgfVxuICAgICAgICAgYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnMHB4J1xuICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgICB9LCBkZWxheSlcbiAgICAgIGJvZHlMb2NrU3RhdHVzID0gZmFsc2VcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgYm9keUxvY2tTdGF0dXMgPSB0cnVlXG4gICAgICB9LCBkZWxheSlcbiAgIH1cbn1cblxuZXhwb3J0IGxldCBib2R5TG9jayA9IChkZWxheSA9IDUwMCkgPT4ge1xuICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICAgaWYgKGJvZHlMb2NrU3RhdHVzKSB7XG4gICAgICBsZXQgbG9ja19wYWRkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWxwXVwiKVxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxvY2tfcGFkZGluZy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgIGNvbnN0IGVsID0gbG9ja19wYWRkaW5nW2luZGV4XVxuICAgICAgICAgZWwuc3R5bGUucGFkZGluZ1JpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpLm9mZnNldFdpZHRoICsgJ3B4J1xuICAgICAgfVxuICAgICAgYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykub2Zmc2V0V2lkdGggKyAncHgnXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxvY2tcIilcblxuICAgICAgYm9keUxvY2tTdGF0dXMgPSBmYWxzZVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICBib2R5TG9ja1N0YXR1cyA9IHRydWVcbiAgICAgIH0sIGRlbGF5KVxuICAgfVxufVxuXG5leHBvcnQgbGV0IGJvZHlMb2NrU3RhdHVzID0gdHJ1ZVxuZXhwb3J0IGxldCBib2R5TG9ja1RvZ2dsZSA9IChkZWxheSA9IDUwMCkgPT4ge1xuICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2xvY2snKSkge1xuICAgICAgYm9keVVubG9jayhkZWxheSlcbiAgIH0gZWxzZSB7XG4gICAgICBib2R5TG9jayhkZWxheSlcbiAgIH1cbn1cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIFRGIGZyb20gXCIuL2pzL3NjcmlwdHMvZnVuY3Rpb25zLmpzXCJcblxuXG4vKiBTZWxlY3QgZnVuY3Rpb25hbGl0eSAqL1xuLy8gVG8gZGlzcGxheSBhbmQgb3V0cHV0IGljb25zIGZyb20gaWNvbmljIGZvbnQgaW4gdGhlIHNlbGVjdGlvblxuXG4vLyBpbXBvcnQgXCIuL2pzL2FkbWluLWZ1bmN0aW9ucy9pY29ucy1zZWxlY3QuanNcIlxuXG4vLyA/ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIm1haW5QYXJhbXMiLCJJU19MT0ciLCJsb2dTeW1ib2xzIiwic3VjY2VzcyIsImluZm8iLCJyb2NrZXQiLCJ3YXJuaW5nIiwiZXJyb3IiLCJjbG9jayIsInF1ZXN0aW9uIiwiYWxhcm0iLCJzdGFyIiwibG9nZ2VyIiwibWVzc2FnZSIsImxvZ1N5bWJvbCIsImljb25UeXBlIiwiY29uc29sZSIsImxvZyIsImdldFJhbmRvbU51bWJlciIsIm1pbiIsIm1heCIsImNvdW50IiwiZmluYWxWYWx1ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsInVuaXFBcnJheSIsImFycmF5IiwiZmlsdGVyIiwiaXRlbSIsImluZGV4Iiwic2VsZiIsIml0ZW1JbmRleCIsImluZGV4T2YiLCJpc1VuaXF1ZSIsIl9zbGlkZVRvZ2dsZSIsInRhcmdldCIsImR1cmF0aW9uIiwiaGlkZGVuIiwiX3NsaWRlRG93biIsIl9zbGlkZVVwIiwic2hvd21vcmUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsInN0eWxlIiwicmVtb3ZlUHJvcGVydHkiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvdmVyZmxvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwidHJhbnNpdGlvblByb3BlcnR5IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwid2luZG93Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImRvY3VtZW50IiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiZGF0YU1lZGlhUXVlcmllcyIsImRhdGFTZXRWYWx1ZSIsIm1lZGlhIiwiZGF0YXNldCIsInNwbGl0IiwiYnJlYWtwb2ludHNBcnJheSIsImZvckVhY2giLCJwYXJhbXMiLCJicmVha3BvaW50IiwicGFyYW1zQXJyYXkiLCJ2YWx1ZSIsInR5cGUiLCJ0cmltIiwicHVzaCIsIm1kUXVlcmllcyIsIm1hcCIsIm1kUXVlcmllc0FycmF5IiwibWVkaWFCcmVha3BvaW50IiwibWVkaWFUeXBlIiwibWF0Y2hNZWRpYSIsIml0ZW1zQXJyYXkiLCJnZXRIYXNoIiwibG9jYXRpb24iLCJoYXNoIiwicmVwbGFjZSIsInNldEhhc2giLCJocmVmIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImdldERpZ0Zvcm1hdCIsInNlcHAiLCJ0b1N0cmluZyIsInJlbW92ZUNsYXNzZXMiLCJjbGFzc05hbWUiLCJpIiwibWVudUluaXQiLCJvcGVuQnV0dG9uIiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImJvZHlMb2NrU3RhdHVzIiwiY2xvc2VzdCIsIm1lbnVUb2dnbGUiLCJtZW51Q2xvc2UiLCJtZW51T3BlbiIsImJvZHlMb2NrIiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keVVubG9jayIsImJvZHlMb2NrVG9nZ2xlIiwidG9nZ2xlIiwiZGVsYXkiLCJib2R5IiwibG9ja19wYWRkaW5nIiwicXVlcnlTZWxlY3RvckFsbCIsImVsIiwicGFkZGluZ1JpZ2h0IiwiaW5uZXJXaWR0aCIsIm9mZnNldFdpZHRoIiwiVEYiXSwic291cmNlUm9vdCI6IiJ9