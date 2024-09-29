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

/***/ }),

/***/ "./assets/src/js/scripts/watcher.js":
/*!******************************************!*\
  !*** ./assets/src/js/scripts/watcher.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const uniqArray = array => {
  return array.filter(function (item, index, self) {
    const itemIndex = self.indexOf(item);
    const isUnique = itemIndex === index;
    return isUnique;
  });
};
class ScrollWatcher {
  constructor(props) {
    let defaultConfig = {
      logging: true
    };
    this.config = Object.assign(defaultConfig, props);
    this.observer;
    !document.documentElement.classList.contains('watcher') ? this.scrollWatcherRun() : null;
  }
  // We update the constructor
  scrollWatcherUpdate() {
    this.scrollWatcherRun();
  }
  // We start the constructor
  scrollWatcherRun() {
    document.documentElement.classList.add('watcher');
    this.scrollWatcherConstructor(document.querySelectorAll('[data-watch]'));
  }
  // Observer designer
  scrollWatcherConstructor(items) {
    if (items.length) {
      // We unite the parameters
      let uniqParams = uniqArray(Array.from(items).map(function (item) {
        return `${item.dataset.watchRoot ? item.dataset.watchRoot : null}|${item.dataset.watchMargin ? item.dataset.watchMargin : '0px'}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`;
      }));
      // We get object groups with the same parameters,
      // We create settings, initializing the observer
      uniqParams.forEach(uniqParam => {
        let uniqParamArray = uniqParam.split('|');
        let paramsWatch = {
          root: uniqParamArray[0],
          margin: uniqParamArray[1],
          threshold: uniqParamArray[2]
        };
        let groupItems = Array.from(items).filter(function (item) {
          let watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
          let watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : '0px';
          let watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
          if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) {
            return item;
          }
        });
        let configWatcher = this.getScrollWatcherConfig(paramsWatch);

        // Observer initialization with their settings
        this.scrollWatcherInit(groupItems, configWatcher);
      });
    }
  }
  // The settings function
  getScrollWatcherConfig(paramsWatch) {
    // Create settings
    let configWatcher = {};
    // The father in which the observation is conducted
    if (document.querySelector(paramsWatch.root)) {
      configWatcher.root = document.querySelector(paramsWatch.root);
    } else if (paramsWatch.root !== 'null') {}
    //Retreating
    configWatcher.rootMargin = paramsWatch.margin;
    if (paramsWatch.margin.indexOf('px') < 0 && paramsWatch.margin.indexOf('%') < 0) {
      return;
    }
    //Turning points
    if (paramsWatch.threshold === 'prx') {
      // parallax mode
      paramsWatch.threshold = [];
      for (let i = 0; i <= 1.0; i += 0.005) {
        paramsWatch.threshold.push(i);
      }
    } else {
      paramsWatch.threshold = paramsWatch.threshold.split(',');
    }
    configWatcher.threshold = paramsWatch.threshold;
    return configWatcher;
  }
  // The function of creating a new observer with their settings
  scrollWatcherCreate(configWatcher) {
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        this.scrollWatcherCallback(entry, observer);
      });
    }, configWatcher);
  }
  //Observer initialization function with their settings
  scrollWatcherInit(items, configWatcher) {
    // creating a new observer with their settings
    this.scrollWatcherCreate(configWatcher);
    // Transfer to the observer of elements
    items.forEach(item => this.observer.observe(item));
  }
  //Function of Basic Actions Processing Points
  scrollWatcherIntersecting(entry, targetElement) {
    if (entry.isIntersecting) {
      // We see an object
      // add the class
      !targetElement.classList.contains('_watcher-view') ? targetElement.classList.add('_watcher-view') : null;
    } else {
      // We don't see an object
      // We pick up the class
      targetElement.classList.contains('_watcher-view') ? targetElement.classList.remove('_watcher-view') : null;
    }
  }
  // Function of shutdown by object
  scrollWatcherOff(targetElement, observer) {
    observer.unobserve(targetElement);
  }

  // Observation processing function
  scrollWatcherCallback(entry, observer) {
    const targetElement = entry.target;
    // Treatment of basic actions of works points
    this.scrollWatcherIntersecting(entry, targetElement);
    // If there is an attribute of Data-Watch-end we remove the tracking
    targetElement.hasAttribute('data-watch-once') && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
    // We create our feedback event
    document.dispatchEvent(new CustomEvent("watcherCallback", {
      detail: {
        entry: entry
      }
    }));
  }
}
// Start watcher
document.addEventListener("DOMContentLoaded", function () {
  const watcher = new ScrollWatcher({});
});

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
/* harmony import */ var _js_scripts_watcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/scripts/watcher.js */ "./assets/src/js/scripts/watcher.js");
/* harmony import */ var _js_custom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/custom.js */ "./assets/src/js/custom.js");


// ? ===============================================
/* Go To Block */
// Documentation inside the module file scroll.js

// import './js/scripts/pageNavigation.js'

// ? ===============================================
/* Watcher */
// Documentation inside the module file



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTitDOztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVnQzs7QUFFaEM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7QUM1REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wbGUtd2VicGFjay8uL2Fzc2V0cy9zcmMvanMvY3VzdG9tLmpzIiwid2VicGFjazovL3NpbXBsZS13ZWJwYWNrLy4vYXNzZXRzL3NyYy9qcy9zY3JpcHRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtd2VicGFjay8uL2Fzc2V0cy9zcmMvanMvc2NyaXB0cy93YXRjaGVyLmpzIiwid2VicGFjazovL3NpbXBsZS13ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbXBsZS13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaW1wbGUtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NpbXBsZS13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2ltcGxlLXdlYnBhY2svLi9hc3NldHMvc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtd2VicGFjay8uL2Fzc2V0cy9zcmMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ0N1c3RvbSBzY3JpcHRzIGxvYWRlZCcpIiwiY29uc3QgbWFpblBhcmFtcyA9IHtcbiAgIElTX0xPRzogZmFsc2UsXG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zdCBsb2dTeW1ib2xzID0ge1xuICAgc3VjY2VzczogJ+KchScsXG4gICBpbmZvOiAn8J+aqScsXG4gICByb2NrZXQ6ICfwn5qAJyxcbiAgIHdhcm5pbmc6ICfinZcnLFxuICAgZXJyb3I6ICfinYwnLFxuICAgY2xvY2s6ICfijJsnLFxuICAgcXVlc3Rpb246ICfwn5GAJyxcbiAgIGFsYXJtOiAn8J+aqCcsXG4gICBzdGFyOiAn8J+Mnydcbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBDb25zb2xlIGxvZ2dlciB3aXRoIGEgc3ltYm9sXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9nU3ltYm9sIC0gU3ltYm9sIG9mIHR5cGUgKHN1Y2Nlc3MsIGluZm8sIHdhcm5pbmcsIGVycm9yLCBjbG9jaywgcXVlc3Rpb24sIGFsYXJtLCBzdGFyKVxuICovXG5leHBvcnQgY29uc3QgbG9nZ2VyID0gKG1lc3NhZ2UsIGxvZ1N5bWJvbCkgPT4ge1xuICAgLyoqXG4gICAgKiBJY29uIG9mIGxvZyBtZXNzYWdlXG4gICAgKiBAdHlwZSB7c3RyaW5nfSBcbiAgICAqL1xuICAgY29uc3QgaWNvblR5cGUgPSBsb2dTeW1ib2xzW2xvZ1N5bWJvbF1cblxuICAgLyoqXG4gICAgKiBDaGVjayBpZiBsb2dnaW5nIGlzIGVuYWJsZWRcbiAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICovXG4gICBpZiAobWFpblBhcmFtcy5JU19MT0cpIHtcbiAgICAgIC8qKlxuICAgICAgICogTG9nIG1lc3NhZ2UgaW4gY29uc29sZVxuICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAqL1xuICAgICAgY29uc29sZS5sb2coYFxcblxcdCR7aWNvblR5cGV9ICR7bWVzc2FnZX1cXG5gKVxuICAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyByYW5kb20gbnVtYmVycyBiZXR3ZWVuIGEgbWluIGFuZCBtYXggdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gLSBNaW5pbXVtIHZhbHVlIG9mIHJhbmRvbSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggLSBNYXhpbXVtIHZhbHVlIG9mIHJhbmRvbSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbY291bnRdIC0gQ291bnQgb2YgcmFuZG9tIG51bWJlcnMgdG8gZ2VuZXJhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ8QXJyYXl9IFJhbmRvbSBudW1iZXIgb3IgYXJyYXkgb2YgcmFuZG9tIG51bWJlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcihtaW4sIG1heCwgY291bnQpIHtcbiAgIC8qKlxuICAgICogRmluYWwgdmFsdWUgb2YgcmFuZG9tIG51bWJlcihzKVxuICAgICogQHR5cGUge251bWJlcnxBcnJheX1cbiAgICAqL1xuICAgbGV0IGZpbmFsVmFsdWVcblxuICAgLyoqXG4gICAgKiBJZiBjb3VudCBpcyBub3QgZGVmaW5lZCwgZ2VuZXJhdGUgYSBzaW5nbGUgbnVtYmVyLFxuICAgICogb3RoZXJ3aXNlIGdlbmVyYXRlIGFuIGFycmF5IG9mIG51bWJlcnNcbiAgICAqL1xuICAgaWYgKHR5cGVvZiBjb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGZpbmFsVmFsdWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG4gICB9IGVsc2Uge1xuICAgICAgZmluYWxWYWx1ZSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGNvdW50IH0sICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW4pXG4gICB9XG5cbiAgIHJldHVybiBmaW5hbFZhbHVlXG59XG5cbi8qKlxuICogUmVtb3ZlcyBkdXBsaWNhdGVzIGZyb20gYW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gQXJyYXkgb2YgaXRlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gQXJyYXkgd2l0aG91dCBkdXBsaWNhdGVzXG4gKi9cbmV4cG9ydCBjb25zdCB1bmlxQXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgIC8qKlxuICAgICogRmlsdGVycyBvdXQgZHVwbGljYXRlcyBmcm9tIGFuIGFycmF5XG4gICAgKiBAcGFyYW0geyp9IGl0ZW0gLSBDdXJyZW50IGl0ZW1cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIEluZGV4IG9mIGN1cnJlbnQgaXRlbVxuICAgICogQHBhcmFtIHtBcnJheX0gc2VsZiAtIFRoZSBhcnJheSBpdHNlbGZcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIGl0ZW0gaXMgdW5pcXVlIGFuZCBzaG91bGQgYmUga2VwdFxuICAgICovXG4gICByZXR1cm4gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgc2VsZikge1xuICAgICAgLyoqXG4gICAgICAgKiBJdGVtJ3MgaW5kZXggb2Ygb2NjdXJyZW5jZSBpbiB0aGUgYXJyYXlcbiAgICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IHNlbGYuaW5kZXhPZihpdGVtKVxuICAgICAgLyoqXG4gICAgICAgKiBJdGVtIGlzIHVuaXF1ZSBpZiBpdHMgaW5kZXggb2Ygb2NjdXJyZW5jZSBpcyBlcXVhbCB0byBpdHMgaW5kZXggaW4gdGhlIGFycmF5XG4gICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAqL1xuICAgICAgY29uc3QgaXNVbmlxdWUgPSBpdGVtSW5kZXggPT09IGluZGV4XG4gICAgICByZXR1cm4gaXNVbmlxdWVcbiAgIH0pXG59XG5cbmV4cG9ydCBsZXQgX3NsaWRlVG9nZ2xlID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDApID0+IHtcbiAgIGlmICh0YXJnZXQuaGlkZGVuKSB7XG4gICAgICByZXR1cm4gX3NsaWRlRG93bih0YXJnZXQsIGR1cmF0aW9uKVxuICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfc2xpZGVVcCh0YXJnZXQsIGR1cmF0aW9uKVxuICAgfVxufVxuXG5leHBvcnQgbGV0IF9zbGlkZURvd24gPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCwgc2hvd21vcmUgPSAwKSA9PiB7XG4gICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnX3NsaWRlJylcbiAgICAgIHRhcmdldC5oaWRkZW4gPSB0YXJnZXQuaGlkZGVuID8gZmFsc2UgOiBudWxsXG4gICAgICBzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JykgOiBudWxsXG4gICAgICBsZXQgaGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodFxuICAgICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBzaG93bW9yZSA/IGAke3Nob3dtb3JlfXB4YCA6IGAwcHhgXG4gICAgICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDBcbiAgICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMFxuICAgICAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDBcbiAgICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwXG4gICAgICB0YXJnZXQub2Zmc2V0SGVpZ2h0XG4gICAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gXCJoZWlnaHQsIG1hcmdpbiwgcGFkZGluZ1wiXG4gICAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnXG4gICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4J1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJylcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKVxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKVxuICAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpXG4gICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKVxuICAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5JylcbiAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdfc2xpZGUnKVxuICAgICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INC/0L7QtNGW0Y5cbiAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwic2xpZGVEb3duRG9uZVwiLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0XG4gICAgICAgICAgICB9XG4gICAgICAgICB9KSlcbiAgICAgIH0sIGR1cmF0aW9uKVxuICAgfVxufVxuXG5leHBvcnQgbGV0IF9zbGlkZVVwID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDAsIHNob3dtb3JlID0gMCkgPT4ge1xuICAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19zbGlkZScpXG4gICAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJ1xuICAgICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJ1xuICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGAke3RhcmdldC5vZmZzZXRIZWlnaHR9cHhgXG4gICAgICB0YXJnZXQub2Zmc2V0SGVpZ2h0XG4gICAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHNob3dtb3JlID8gYCR7c2hvd21vcmV9cHhgIDogYDBweGBcbiAgICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMFxuICAgICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwXG4gICAgICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMFxuICAgICAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDBcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgIHRhcmdldC5oaWRkZW4gPSAhc2hvd21vcmUgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICFzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JykgOiBudWxsXG4gICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJylcbiAgICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKVxuICAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJylcbiAgICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpXG4gICAgICAgICAhc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93JykgOiBudWxsXG4gICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKVxuICAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5JylcbiAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdfc2xpZGUnKVxuICAgICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INC/0L7QtNGW0Y4gXG4gICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInNsaWRlVXBEb25lXCIsIHtcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pKVxuICAgICAgfSwgZHVyYXRpb24pXG4gICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFNZWRpYVF1ZXJpZXMoYXJyYXksIGRhdGFTZXRWYWx1ZSkge1xuICAgLy8g0J7RgtGA0LjQvNCw0L3QvdGPINC+0LEn0ZTQutGC0ZbQsiDQtyDQvNC10LTRltCwLdC30LDQv9C40YLQsNC80LhcbiAgIGNvbnN0IG1lZGlhID0gQXJyYXkuZnJvbShhcnJheSkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgc2VsZikge1xuICAgICAgaWYgKGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdKSB7XG4gICAgICAgICByZXR1cm4gaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV0uc3BsaXQoXCIsXCIpWzBdXG4gICAgICB9XG4gICB9KVxuICAgLy8g0IbQvdGW0YbRltCw0LvRltC30LDRhtGW0Y8g0L7QsSfRlNC60YLRltCyINC3INC80LXQtNGW0LAt0LfQsNC/0LjRgtCw0LzQuFxuICAgaWYgKG1lZGlhLmxlbmd0aCkge1xuICAgICAgY29uc3QgYnJlYWtwb2ludHNBcnJheSA9IFtdXG4gICAgICBtZWRpYS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgY29uc3QgcGFyYW1zID0gaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV1cbiAgICAgICAgIGNvbnN0IGJyZWFrcG9pbnQgPSB7fVxuICAgICAgICAgY29uc3QgcGFyYW1zQXJyYXkgPSBwYXJhbXMuc3BsaXQoXCIsXCIpXG4gICAgICAgICBicmVha3BvaW50LnZhbHVlID0gcGFyYW1zQXJyYXlbMF1cbiAgICAgICAgIGJyZWFrcG9pbnQudHlwZSA9IHBhcmFtc0FycmF5WzFdID8gcGFyYW1zQXJyYXlbMV0udHJpbSgpIDogXCJtYXhcIlxuICAgICAgICAgYnJlYWtwb2ludC5pdGVtID0gaXRlbVxuICAgICAgICAgYnJlYWtwb2ludHNBcnJheS5wdXNoKGJyZWFrcG9pbnQpXG4gICAgICB9KVxuICAgICAgLy8g0J7RgtGA0LjQvNGD0ZTQvNC+INGD0L3RltC60LDQu9GM0L3RliDQsdGA0LXQudC60L/QvtGW0L3RgtC4XG4gICAgICBsZXQgbWRRdWVyaWVzID0gYnJlYWtwb2ludHNBcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgIHJldHVybiAnKCcgKyBpdGVtLnR5cGUgKyBcIi13aWR0aDogXCIgKyBpdGVtLnZhbHVlICsgXCJweCksXCIgKyBpdGVtLnZhbHVlICsgJywnICsgaXRlbS50eXBlXG4gICAgICB9KVxuICAgICAgbWRRdWVyaWVzID0gdW5pcUFycmF5KG1kUXVlcmllcylcbiAgICAgIGNvbnN0IG1kUXVlcmllc0FycmF5ID0gW11cblxuICAgICAgaWYgKG1kUXVlcmllcy5sZW5ndGgpIHtcbiAgICAgICAgIC8vINCf0YDQsNGG0Y7RlNC80L4g0Lcg0LrQvtC20L3QuNC8INCx0YDQtdC50LrQv9C+0ZbQvdGC0L7QvFxuICAgICAgICAgbWRRdWVyaWVzLmZvckVhY2goYnJlYWtwb2ludCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXNBcnJheSA9IGJyZWFrcG9pbnQuc3BsaXQoXCIsXCIpXG4gICAgICAgICAgICBjb25zdCBtZWRpYUJyZWFrcG9pbnQgPSBwYXJhbXNBcnJheVsxXVxuICAgICAgICAgICAgY29uc3QgbWVkaWFUeXBlID0gcGFyYW1zQXJyYXlbMl1cbiAgICAgICAgICAgIGNvbnN0IG1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShwYXJhbXNBcnJheVswXSlcbiAgICAgICAgICAgIC8vINCe0LEn0ZTQutGC0Lgg0Lcg0L/QvtGC0YDRltCx0L3QuNC80Lgg0YPQvNC+0LLQsNC80LhcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zQXJyYXkgPSBicmVha3BvaW50c0FycmF5LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT09IG1lZGlhQnJlYWtwb2ludCAmJiBpdGVtLnR5cGUgPT09IG1lZGlhVHlwZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBtZFF1ZXJpZXNBcnJheS5wdXNoKHtcbiAgICAgICAgICAgICAgIGl0ZW1zQXJyYXksXG4gICAgICAgICAgICAgICBtYXRjaE1lZGlhXG4gICAgICAgICAgICB9KVxuICAgICAgICAgfSlcbiAgICAgICAgIHJldHVybiBtZFF1ZXJpZXNBcnJheVxuICAgICAgfVxuICAgfVxufVxuXG4vKipcbiAqIEdldHMgYSBoYXNoICgjKSBmcm9tIHRoZSBVUkxcbiAqIEByZXR1cm4ge3N0cmluZ30gLSBUaGUgaGFzaCB3aXRob3V0IHRoZSBsZWFkaW5nIFwiI1wiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRIYXNoKCkge1xuICAgLy8gR2V0cyBhIGhhc2ggKCMpIGZyb20gdGhlIFVSTFxuICAgLy8gQHJldHVybiB7c3RyaW5nfSAtIFRoZSBoYXNoIHdpdGhvdXQgdGhlIGxlYWRpbmcgXCIjXCJcbiAgIGlmIChsb2NhdGlvbi5oYXNoKSB7IHJldHVybiBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJykgfVxufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggKCMpIG9mIHRoZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoIC0gVGhlIGhhc2ggdG8gc2V0LiBJZiBub3QgcHJvdmlkZWQsIHRoZSBVUkwgd2lsbCBiZVxuICogcmVzZXQgdG8gaXRzIGZ1bGwgcGF0aCB3aXRob3V0IGEgaGFzaC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEhhc2goaGFzaCkge1xuICAgLy8gU2V0cyB0aGUgaGFzaCAoIykgb2YgdGhlIFVSTFxuICAgLy8gQHBhcmFtIHtzdHJpbmd9IGhhc2ggLSBUaGUgaGFzaCB0byBzZXQuIElmIG5vdCBwcm92aWRlZCwgdGhlIFVSTCB3aWxsIGJlXG4gICAvLyByZXNldCB0byBpdHMgZnVsbCBwYXRoIHdpdGhvdXQgYSBoYXNoLlxuICAgaGFzaCA9IGhhc2ggPyBgIyR7aGFzaH1gIDogd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVswXVxuICAgLy8gVXBkYXRlcyB0aGUgVVJMIHdpdGhvdXQgcmVsb2FkaW5nIHRoZSBwYWdlIG9yIHRyaWdnZXJpbmcgYSBwb3Agc3RhdGUgZXZlbnRcbiAgIGhpc3RvcnkucHVzaFN0YXRlKCcnLCAnJywgaGFzaClcbn1cblxuLyoqXG4gKiBGb3JtYXR0aW5nIGZpZ3VyZXMgb2YgdHlwZSAxMDAsMDAwLDAwMCwwMDBcbiAqIFJldHVybnMgYSBudW1iZXIgd2l0aCB0aG91c2FuZHMgc2VwYXJhdG9ycy5cbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gaXRlbSAtIFRoZSBudW1iZXIgdG8gZm9ybWF0XG4gKiBAcGFyYW0ge3N0cmluZ30gW3NlcHA9JyAnXSAtIEEgc2VwYXJhdG9yIGZvciBncm91cHMgb2YgdGhvdXNhbmRzXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtIEZvcm1hdHRlZCBudW1iZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERpZ0Zvcm1hdChpdGVtLCBzZXBwID0gJyAnKSB7XG4gICAvKiBGb3JtYXRzIGEgbnVtYmVyIHdpdGggdGhvdXNhbmRzIHNlcGFyYXRvcnMuXG4gICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IGl0ZW0gLSBUaGUgbnVtYmVyIHRvIGZvcm1hdFxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtzZXBwPScgJ10gLSBBIHNlcGFyYXRvciBmb3IgZ3JvdXBzIG9mIHRob3VzYW5kc1xuICAgICogQHJldHVybnMge3N0cmluZ30gLSBGb3JtYXR0ZWQgbnVtYmVyXG4gICAgKi9cbiAgIHJldHVybiBpdGVtLnRvU3RyaW5nKCkucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoW15cXGRdfCQpKS9nLCBgJDEke3NlcHB9YClcbn1cblxuLyoqXG4gKiBSZW1vdmUgY2xhc3MgZnJvbSBhbGwgZWxlbWVudHMgaW4gYXJyYXlcbiAqIEBwYXJhbSB7YXJyYXl9IGFycmF5IC0gQXJyYXkgb2YgZWxlbWVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSBDbGFzcyB0byByZW1vdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMoYXJyYXksIGNsYXNzTmFtZSkge1xuICAgLy8gUmVtb3ZlIGNsYXNzIGZyb20gYWxsIGVsZW1lbnRzIGluIGFycmF5XG4gICAvLyBAcGFyYW0ge2FycmF5fSBhcnJheSAtIEFycmF5IG9mIGVsZW1lbnRzXG4gICAvLyBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gQ2xhc3MgdG8gcmVtb3ZlXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBSZW1vdmVzIHRoZSBjbGFzcyBmcm9tIGEgc2luZ2xlIGVsZW1lbnRcbiAgICAgIGFycmF5W2ldLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKVxuICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVudUluaXQoKSB7XG4gICBjb25zdCBvcGVuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1lbnUtb3Blbl1cIilcbiAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWVudV1cIilcbiAgIGlmIChvcGVuQnV0dG9uKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgIGlmIChib2R5TG9ja1N0YXR1cyAmJiBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1tZW51LW9wZW5dJykpIHtcbiAgICAgICAgICAgIG1lbnVUb2dnbGUoKVxuICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1tZW51LWNsb3NlXScpKSB7XG4gICAgICAgICAgICBtZW51Q2xvc2UoKVxuICAgICAgICAgfVxuICAgICAgfSlcbiAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gbWVudU9wZW4oKSB7XG4gICBib2R5TG9jaygpXG4gICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1lbnUtb3BlblwiKVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVDbG9zZSgpIHtcbiAgIGJvZHlVbmxvY2soKVxuICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LW9wZW5cIilcbn1cbmV4cG9ydCBmdW5jdGlvbiBtZW51VG9nZ2xlKCkge1xuICAgYm9keUxvY2tUb2dnbGUoKVxuICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJtZW51LW9wZW5cIilcbn1cblxuZXhwb3J0IGxldCBib2R5VW5sb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XG4gICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcbiAgICAgIGxldCBsb2NrX3BhZGRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbHBdXCIpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsb2NrX3BhZGRpbmcubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbCA9IGxvY2tfcGFkZGluZ1tpbmRleF1cbiAgICAgICAgICAgIGVsLnN0eWxlLnBhZGRpbmdSaWdodCA9ICcwcHgnXG4gICAgICAgICB9XG4gICAgICAgICBib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcwcHgnXG4gICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICAgIH0sIGRlbGF5KVxuICAgICAgYm9keUxvY2tTdGF0dXMgPSBmYWxzZVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICBib2R5TG9ja1N0YXR1cyA9IHRydWVcbiAgICAgIH0sIGRlbGF5KVxuICAgfVxufVxuXG5leHBvcnQgbGV0IGJvZHlMb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XG4gICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcbiAgICAgIGxldCBsb2NrX3BhZGRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbHBdXCIpXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbG9ja19wYWRkaW5nLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgY29uc3QgZWwgPSBsb2NrX3BhZGRpbmdbaW5kZXhdXG4gICAgICAgICBlbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykub2Zmc2V0V2lkdGggKyAncHgnXG4gICAgICB9XG4gICAgICBib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKS5vZmZzZXRXaWR0aCArICdweCdcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuXG4gICAgICBib2R5TG9ja1N0YXR1cyA9IGZhbHNlXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgIGJvZHlMb2NrU3RhdHVzID0gdHJ1ZVxuICAgICAgfSwgZGVsYXkpXG4gICB9XG59XG5cbmV4cG9ydCBsZXQgYm9keUxvY2tTdGF0dXMgPSB0cnVlXG5leHBvcnQgbGV0IGJvZHlMb2NrVG9nZ2xlID0gKGRlbGF5ID0gNTAwKSA9PiB7XG4gICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbG9jaycpKSB7XG4gICAgICBib2R5VW5sb2NrKGRlbGF5KVxuICAgfSBlbHNlIHtcbiAgICAgIGJvZHlMb2NrKGRlbGF5KVxuICAgfVxufVxuXG5cbiIsImNvbnN0IHVuaXFBcnJheSA9IChhcnJheSkgPT4ge1xuICAgcmV0dXJuIGFycmF5LmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IHNlbGYuaW5kZXhPZihpdGVtKVxuICAgICAgY29uc3QgaXNVbmlxdWUgPSBpdGVtSW5kZXggPT09IGluZGV4XG4gICAgICByZXR1cm4gaXNVbmlxdWVcbiAgIH0pXG59XG5cbmNsYXNzIFNjcm9sbFdhdGNoZXIge1xuICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIGxldCBkZWZhdWx0Q29uZmlnID0ge1xuICAgICAgICAgbG9nZ2luZzogdHJ1ZSxcbiAgICAgIH1cbiAgICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBwcm9wcylcbiAgICAgIHRoaXMub2JzZXJ2ZXJcbiAgICAgICFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd3YXRjaGVyJykgPyB0aGlzLnNjcm9sbFdhdGNoZXJSdW4oKSA6IG51bGxcbiAgIH1cbiAgIC8vIFdlIHVwZGF0ZSB0aGUgY29uc3RydWN0b3JcbiAgIHNjcm9sbFdhdGNoZXJVcGRhdGUoKSB7XG4gICAgICB0aGlzLnNjcm9sbFdhdGNoZXJSdW4oKVxuICAgfVxuICAgLy8gV2Ugc3RhcnQgdGhlIGNvbnN0cnVjdG9yXG4gICBzY3JvbGxXYXRjaGVyUnVuKCkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dhdGNoZXInKVxuICAgICAgdGhpcy5zY3JvbGxXYXRjaGVyQ29uc3RydWN0b3IoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtd2F0Y2hdJykpXG4gICB9XG4gICAvLyBPYnNlcnZlciBkZXNpZ25lclxuICAgc2Nyb2xsV2F0Y2hlckNvbnN0cnVjdG9yKGl0ZW1zKSB7XG4gICAgICBpZiAoaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAvLyBXZSB1bml0ZSB0aGUgcGFyYW1ldGVyc1xuICAgICAgICAgbGV0IHVuaXFQYXJhbXMgPSB1bmlxQXJyYXkoQXJyYXkuZnJvbShpdGVtcykubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7aXRlbS5kYXRhc2V0LndhdGNoUm9vdCA/IGl0ZW0uZGF0YXNldC53YXRjaFJvb3QgOiBudWxsfXwke2l0ZW0uZGF0YXNldC53YXRjaE1hcmdpbiA/IGl0ZW0uZGF0YXNldC53YXRjaE1hcmdpbiA6ICcwcHgnfXwke2l0ZW0uZGF0YXNldC53YXRjaFRocmVzaG9sZCA/IGl0ZW0uZGF0YXNldC53YXRjaFRocmVzaG9sZCA6IDB9YFxuICAgICAgICAgfSkpXG4gICAgICAgICAvLyBXZSBnZXQgb2JqZWN0IGdyb3VwcyB3aXRoIHRoZSBzYW1lIHBhcmFtZXRlcnMsXG4gICAgICAgICAvLyBXZSBjcmVhdGUgc2V0dGluZ3MsIGluaXRpYWxpemluZyB0aGUgb2JzZXJ2ZXJcbiAgICAgICAgIHVuaXFQYXJhbXMuZm9yRWFjaCh1bmlxUGFyYW0gPT4ge1xuICAgICAgICAgICAgbGV0IHVuaXFQYXJhbUFycmF5ID0gdW5pcVBhcmFtLnNwbGl0KCd8JylcbiAgICAgICAgICAgIGxldCBwYXJhbXNXYXRjaCA9IHtcbiAgICAgICAgICAgICAgIHJvb3Q6IHVuaXFQYXJhbUFycmF5WzBdLFxuICAgICAgICAgICAgICAgbWFyZ2luOiB1bmlxUGFyYW1BcnJheVsxXSxcbiAgICAgICAgICAgICAgIHRocmVzaG9sZDogdW5pcVBhcmFtQXJyYXlbMl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBncm91cEl0ZW1zID0gQXJyYXkuZnJvbShpdGVtcykuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICBsZXQgd2F0Y2hSb290ID0gaXRlbS5kYXRhc2V0LndhdGNoUm9vdCA/IGl0ZW0uZGF0YXNldC53YXRjaFJvb3QgOiBudWxsXG4gICAgICAgICAgICAgICBsZXQgd2F0Y2hNYXJnaW4gPSBpdGVtLmRhdGFzZXQud2F0Y2hNYXJnaW4gPyBpdGVtLmRhdGFzZXQud2F0Y2hNYXJnaW4gOiAnMHB4J1xuICAgICAgICAgICAgICAgbGV0IHdhdGNoVGhyZXNob2xkID0gaXRlbS5kYXRhc2V0LndhdGNoVGhyZXNob2xkID8gaXRlbS5kYXRhc2V0LndhdGNoVGhyZXNob2xkIDogMFxuICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgU3RyaW5nKHdhdGNoUm9vdCkgPT09IHBhcmFtc1dhdGNoLnJvb3QgJiZcbiAgICAgICAgICAgICAgICAgIFN0cmluZyh3YXRjaE1hcmdpbikgPT09IHBhcmFtc1dhdGNoLm1hcmdpbiAmJlxuICAgICAgICAgICAgICAgICAgU3RyaW5nKHdhdGNoVGhyZXNob2xkKSA9PT0gcGFyYW1zV2F0Y2gudGhyZXNob2xkXG4gICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsZXQgY29uZmlnV2F0Y2hlciA9IHRoaXMuZ2V0U2Nyb2xsV2F0Y2hlckNvbmZpZyhwYXJhbXNXYXRjaClcblxuICAgICAgICAgICAgLy8gT2JzZXJ2ZXIgaW5pdGlhbGl6YXRpb24gd2l0aCB0aGVpciBzZXR0aW5nc1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxXYXRjaGVySW5pdChncm91cEl0ZW1zLCBjb25maWdXYXRjaGVyKVxuICAgICAgICAgfSlcbiAgICAgIH1cbiAgIH1cbiAgIC8vIFRoZSBzZXR0aW5ncyBmdW5jdGlvblxuICAgZ2V0U2Nyb2xsV2F0Y2hlckNvbmZpZyhwYXJhbXNXYXRjaCkge1xuICAgICAgLy8gQ3JlYXRlIHNldHRpbmdzXG4gICAgICBsZXQgY29uZmlnV2F0Y2hlciA9IHt9XG4gICAgICAvLyBUaGUgZmF0aGVyIGluIHdoaWNoIHRoZSBvYnNlcnZhdGlvbiBpcyBjb25kdWN0ZWRcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtc1dhdGNoLnJvb3QpKSB7XG4gICAgICAgICBjb25maWdXYXRjaGVyLnJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtc1dhdGNoLnJvb3QpXG4gICAgICB9IGVsc2UgaWYgKHBhcmFtc1dhdGNoLnJvb3QgIT09ICdudWxsJykge1xuICAgICAgfVxuICAgICAgLy9SZXRyZWF0aW5nXG4gICAgICBjb25maWdXYXRjaGVyLnJvb3RNYXJnaW4gPSBwYXJhbXNXYXRjaC5tYXJnaW5cbiAgICAgIGlmIChwYXJhbXNXYXRjaC5tYXJnaW4uaW5kZXhPZigncHgnKSA8IDAgJiYgcGFyYW1zV2F0Y2gubWFyZ2luLmluZGV4T2YoJyUnKSA8IDApIHtcbiAgICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLy9UdXJuaW5nIHBvaW50c1xuICAgICAgaWYgKHBhcmFtc1dhdGNoLnRocmVzaG9sZCA9PT0gJ3ByeCcpIHtcbiAgICAgICAgIC8vIHBhcmFsbGF4IG1vZGVcbiAgICAgICAgIHBhcmFtc1dhdGNoLnRocmVzaG9sZCA9IFtdXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAxLjA7IGkgKz0gMC4wMDUpIHtcbiAgICAgICAgICAgIHBhcmFtc1dhdGNoLnRocmVzaG9sZC5wdXNoKGkpXG4gICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcGFyYW1zV2F0Y2gudGhyZXNob2xkID0gcGFyYW1zV2F0Y2gudGhyZXNob2xkLnNwbGl0KCcsJylcbiAgICAgIH1cbiAgICAgIGNvbmZpZ1dhdGNoZXIudGhyZXNob2xkID0gcGFyYW1zV2F0Y2gudGhyZXNob2xkXG5cbiAgICAgIHJldHVybiBjb25maWdXYXRjaGVyXG4gICB9XG4gICAvLyBUaGUgZnVuY3Rpb24gb2YgY3JlYXRpbmcgYSBuZXcgb2JzZXJ2ZXIgd2l0aCB0aGVpciBzZXR0aW5nc1xuICAgc2Nyb2xsV2F0Y2hlckNyZWF0ZShjb25maWdXYXRjaGVyKSB7XG4gICAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsV2F0Y2hlckNhbGxiYWNrKGVudHJ5LCBvYnNlcnZlcilcbiAgICAgICAgIH0pXG4gICAgICB9LCBjb25maWdXYXRjaGVyKVxuICAgfVxuICAgLy9PYnNlcnZlciBpbml0aWFsaXphdGlvbiBmdW5jdGlvbiB3aXRoIHRoZWlyIHNldHRpbmdzXG4gICBzY3JvbGxXYXRjaGVySW5pdChpdGVtcywgY29uZmlnV2F0Y2hlcikge1xuICAgICAgLy8gY3JlYXRpbmcgYSBuZXcgb2JzZXJ2ZXIgd2l0aCB0aGVpciBzZXR0aW5nc1xuICAgICAgdGhpcy5zY3JvbGxXYXRjaGVyQ3JlYXRlKGNvbmZpZ1dhdGNoZXIpXG4gICAgICAvLyBUcmFuc2ZlciB0byB0aGUgb2JzZXJ2ZXIgb2YgZWxlbWVudHNcbiAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB0aGlzLm9ic2VydmVyLm9ic2VydmUoaXRlbSkpXG4gICB9XG4gICAvL0Z1bmN0aW9uIG9mIEJhc2ljIEFjdGlvbnMgUHJvY2Vzc2luZyBQb2ludHNcbiAgIHNjcm9sbFdhdGNoZXJJbnRlcnNlY3RpbmcoZW50cnksIHRhcmdldEVsZW1lbnQpIHtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgLy8gV2Ugc2VlIGFuIG9iamVjdFxuICAgICAgICAgLy8gYWRkIHRoZSBjbGFzc1xuICAgICAgICAgIXRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfd2F0Y2hlci12aWV3JykgPyB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ193YXRjaGVyLXZpZXcnKSA6IG51bGxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAvLyBXZSBkb24ndCBzZWUgYW4gb2JqZWN0XG4gICAgICAgICAvLyBXZSBwaWNrIHVwIHRoZSBjbGFzc1xuICAgICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ193YXRjaGVyLXZpZXcnKSA/IHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX3dhdGNoZXItdmlldycpIDogbnVsbFxuICAgICAgfVxuICAgfVxuICAgLy8gRnVuY3Rpb24gb2Ygc2h1dGRvd24gYnkgb2JqZWN0XG4gICBzY3JvbGxXYXRjaGVyT2ZmKHRhcmdldEVsZW1lbnQsIG9ic2VydmVyKSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUodGFyZ2V0RWxlbWVudClcbiAgIH1cblxuICAgLy8gT2JzZXJ2YXRpb24gcHJvY2Vzc2luZyBmdW5jdGlvblxuICAgc2Nyb2xsV2F0Y2hlckNhbGxiYWNrKGVudHJ5LCBvYnNlcnZlcikge1xuICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGVudHJ5LnRhcmdldFxuICAgICAgLy8gVHJlYXRtZW50IG9mIGJhc2ljIGFjdGlvbnMgb2Ygd29ya3MgcG9pbnRzXG4gICAgICB0aGlzLnNjcm9sbFdhdGNoZXJJbnRlcnNlY3RpbmcoZW50cnksIHRhcmdldEVsZW1lbnQpXG4gICAgICAvLyBJZiB0aGVyZSBpcyBhbiBhdHRyaWJ1dGUgb2YgRGF0YS1XYXRjaC1lbmQgd2UgcmVtb3ZlIHRoZSB0cmFja2luZ1xuICAgICAgdGFyZ2V0RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtd2F0Y2gtb25jZScpICYmIGVudHJ5LmlzSW50ZXJzZWN0aW5nID8gdGhpcy5zY3JvbGxXYXRjaGVyT2ZmKHRhcmdldEVsZW1lbnQsIG9ic2VydmVyKSA6IG51bGxcbiAgICAgIC8vIFdlIGNyZWF0ZSBvdXIgZmVlZGJhY2sgZXZlbnRcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwid2F0Y2hlckNhbGxiYWNrXCIsIHtcbiAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgZW50cnk6IGVudHJ5XG4gICAgICAgICB9XG4gICAgICB9KSlcbiAgIH1cbn1cbi8vIFN0YXJ0IHdhdGNoZXJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgIGNvbnN0IHdhdGNoZXIgPSBuZXcgU2Nyb2xsV2F0Y2hlcih7fSlcbn0pXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIFRGIGZyb20gXCIuL2pzL3NjcmlwdHMvZnVuY3Rpb25zLmpzXCJcblxuLy8gPyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyogR28gVG8gQmxvY2sgKi9cbi8vIERvY3VtZW50YXRpb24gaW5zaWRlIHRoZSBtb2R1bGUgZmlsZSBzY3JvbGwuanNcblxuLy8gaW1wb3J0ICcuL2pzL3NjcmlwdHMvcGFnZU5hdmlnYXRpb24uanMnXG5cbi8vID8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qIFdhdGNoZXIgKi9cbi8vIERvY3VtZW50YXRpb24gaW5zaWRlIHRoZSBtb2R1bGUgZmlsZVxuXG5pbXBvcnQgJy4vanMvc2NyaXB0cy93YXRjaGVyLmpzJ1xuXG4vLyA/ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qIER5bmFtaWMgYWRhcHRpdmUgKi9cbi8vIERvY3VtZW50YXRpb24gb2YgdGhlIHBsdWdpbjogXG5cbi8vIGltcG9ydCBcIi4vanMvc2NyaXB0cy9keW5hbWljX2FkYXB0LmpzXCJcblxuLy8gPyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyogRnVuY3Rpb24gdG8gYWRkIGFuZCByZW1vdmUgY2xhc3NlcyB0byB0aGUgcm9vdCBlbGVtZW50IHdoZW4gc2Nyb2xsaW5nIGRvd24gb3IgdXAqL1xuLy8gRG9jdW1lbnRhdGlvbiBpbnNpZGUgdGhlIG1vZHVsZSBmaWxlOlxuXG4vLyBpbXBvcnQgXCIuL2pzL3NjcmlwdHMvaGVhZGVyLWNsYXNzLXNjcm9sbC5qc1wiXG5cbi8vID8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qIFN3aXBlciBTbGlkZXIgKi9cbi8vIERvY3VtZW50YXRpb24gb2YgdGhlIHBsdWdpbjogaHR0cHM6Ly9zd2lwZXJqcy5jb20vXG5cbi8vIGltcG9ydCBcIi4vanMvbGlicy9zd2lwZXIuanNcIlxuXG4vLyA/ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBNb2RhbHMgUG9wdXBzICovXG4vLyBEb2N1bWVudGF0aW9uOiBodHRwczovL21pY3JvbW9kYWwudmVyY2VsLmFwcC9cblxuLy8gaW1wb3J0IFwiLi9qcy9saWJzL21vZGFsLmpzXCJcblxuLy8gPyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKiBTcG9pbGVyIGZ1bmN0aW9uYWxpdHkgKi9cbi8vIERvY3VtZW50YXRpb24gaW5zaWRlIHRoZSBtb2R1bGUgZmlsZVxuXG4vLyBpbXBvcnQgXCIuL2pzL3NjcmlwdHMvc3BvaWxlcnMuanNcIlxuXG4vLyA/ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qIFNlbGVjdCBmdW5jdGlvbmFsaXR5ICovXG4vLyBEb2N1bWVudGF0aW9uIGluc2lkZSB0aGUgbW9kdWxlIGZpbGVcblxuLy8gaW1wb3J0IFwiLi9qcy9saWJzL3NlbGVjdC5qc1wiXG5cbi8vID8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyogU2V0IGNvb2tpZSB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCB2YWx1ZS4gKi9cbi8vIERvY3VtZW50YXRpb24gaHR0cHM6Ly9naXRodWIuY29tL2pzLWNvb2tpZS9qcy1jb29raWUvdHJlZS9sYXRlc3QjcmVhZG1lXG5cbi8vIGltcG9ydCAnLi9zY3JpcHRzL2Nvb2tpZS5qcydcblxuLy8gPyBDdXN0b20gc2NyaXB0cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgXCIuL2pzL2N1c3RvbS5qc1wiXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwibWFpblBhcmFtcyIsIklTX0xPRyIsImxvZ1N5bWJvbHMiLCJzdWNjZXNzIiwiaW5mbyIsInJvY2tldCIsIndhcm5pbmciLCJlcnJvciIsImNsb2NrIiwicXVlc3Rpb24iLCJhbGFybSIsInN0YXIiLCJsb2dnZXIiLCJtZXNzYWdlIiwibG9nU3ltYm9sIiwiaWNvblR5cGUiLCJnZXRSYW5kb21OdW1iZXIiLCJtaW4iLCJtYXgiLCJjb3VudCIsImZpbmFsVmFsdWUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJ1bmlxQXJyYXkiLCJhcnJheSIsImZpbHRlciIsIml0ZW0iLCJpbmRleCIsInNlbGYiLCJpdGVtSW5kZXgiLCJpbmRleE9mIiwiaXNVbmlxdWUiLCJfc2xpZGVUb2dnbGUiLCJ0YXJnZXQiLCJkdXJhdGlvbiIsImhpZGRlbiIsIl9zbGlkZURvd24iLCJfc2xpZGVVcCIsInNob3dtb3JlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJzdHlsZSIsInJlbW92ZVByb3BlcnR5IiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib3ZlcmZsb3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25EdXJhdGlvbiIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJkb2N1bWVudCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImRhdGFNZWRpYVF1ZXJpZXMiLCJkYXRhU2V0VmFsdWUiLCJtZWRpYSIsImRhdGFzZXQiLCJzcGxpdCIsImJyZWFrcG9pbnRzQXJyYXkiLCJmb3JFYWNoIiwicGFyYW1zIiwiYnJlYWtwb2ludCIsInBhcmFtc0FycmF5IiwidmFsdWUiLCJ0eXBlIiwidHJpbSIsInB1c2giLCJtZFF1ZXJpZXMiLCJtYXAiLCJtZFF1ZXJpZXNBcnJheSIsIm1lZGlhQnJlYWtwb2ludCIsIm1lZGlhVHlwZSIsIm1hdGNoTWVkaWEiLCJpdGVtc0FycmF5IiwiZ2V0SGFzaCIsImxvY2F0aW9uIiwiaGFzaCIsInJlcGxhY2UiLCJzZXRIYXNoIiwiaHJlZiIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJnZXREaWdGb3JtYXQiLCJzZXBwIiwidG9TdHJpbmciLCJyZW1vdmVDbGFzc2VzIiwiY2xhc3NOYW1lIiwiaSIsIm1lbnVJbml0Iiwib3BlbkJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJib2R5TG9ja1N0YXR1cyIsImNsb3Nlc3QiLCJtZW51VG9nZ2xlIiwibWVudUNsb3NlIiwibWVudU9wZW4iLCJib2R5TG9jayIsImRvY3VtZW50RWxlbWVudCIsImJvZHlVbmxvY2siLCJib2R5TG9ja1RvZ2dsZSIsInRvZ2dsZSIsImRlbGF5IiwiYm9keSIsImxvY2tfcGFkZGluZyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbCIsInBhZGRpbmdSaWdodCIsImlubmVyV2lkdGgiLCJvZmZzZXRXaWR0aCIsIlNjcm9sbFdhdGNoZXIiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZGVmYXVsdENvbmZpZyIsImxvZ2dpbmciLCJjb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJvYnNlcnZlciIsInNjcm9sbFdhdGNoZXJSdW4iLCJzY3JvbGxXYXRjaGVyVXBkYXRlIiwic2Nyb2xsV2F0Y2hlckNvbnN0cnVjdG9yIiwiaXRlbXMiLCJ1bmlxUGFyYW1zIiwid2F0Y2hSb290Iiwid2F0Y2hNYXJnaW4iLCJ3YXRjaFRocmVzaG9sZCIsInVuaXFQYXJhbSIsInVuaXFQYXJhbUFycmF5IiwicGFyYW1zV2F0Y2giLCJyb290IiwibWFyZ2luIiwidGhyZXNob2xkIiwiZ3JvdXBJdGVtcyIsIlN0cmluZyIsImNvbmZpZ1dhdGNoZXIiLCJnZXRTY3JvbGxXYXRjaGVyQ29uZmlnIiwic2Nyb2xsV2F0Y2hlckluaXQiLCJyb290TWFyZ2luIiwic2Nyb2xsV2F0Y2hlckNyZWF0ZSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5Iiwic2Nyb2xsV2F0Y2hlckNhbGxiYWNrIiwib2JzZXJ2ZSIsInNjcm9sbFdhdGNoZXJJbnRlcnNlY3RpbmciLCJ0YXJnZXRFbGVtZW50IiwiaXNJbnRlcnNlY3RpbmciLCJzY3JvbGxXYXRjaGVyT2ZmIiwidW5vYnNlcnZlIiwiaGFzQXR0cmlidXRlIiwid2F0Y2hlciIsIlRGIl0sInNvdXJjZVJvb3QiOiIifQ==