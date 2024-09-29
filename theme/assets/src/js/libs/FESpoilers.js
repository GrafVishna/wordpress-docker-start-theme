const FESpoilers = (selector, options = {}) => {
   const defaultOptions = {
      selector: selector ? selector : "[data-spoiler]",
      contentSelector: "[data-spoiler-content]",
      titleSelector: "[data-spoiler-title]",
      resizeAttribute: "data-spoiler-resize",
      stateAttribute: "data-spoiler-state",
      groupAttribute: "data-spoiler-group",
      showClass: 'spoiler-open',
      activeContentClass: 'show',
      hideAttr: 'hide',
      showAttr: 'show',
      initClass: 'init',
      initShowClass: 'init-show',
      initHiddenClass: 'init-hidden',
      duration: 350,
      initDelay: 0,
   }

   const settings = { ...defaultOptions, ...options }

   const spoilers = document.querySelectorAll(settings.selector)
   if (!spoilers.length) return

   const closeGroup = (spoiler, target) => {
      spoilers.forEach(spoiler => {
         if (spoiler.group && spoiler.getAttribute(settings.groupAttribute) === spoiler.group) {
            if (target !== spoiler) {
               close(spoiler)
            } else {
               if (spoiler.classList.contains(settings.activeContentClass)) {
                  close(spoiler)
               } else {
                  open(spoiler)
               }
            }
         }
      })
   }

   const toggle = (spoiler) => {
      if (getIsOpenState(spoiler)) {
         close(spoiler)
      } else {
         open(spoiler)
      }
   }

   const open = (spoiler) => {
      spoiler.setAttribute(settings.stateAttribute, settings.showAttr)
      spoiler.classList.add(settings.activeContentClass)
      animation(spoiler)
   }

   const close = (spoiler) => {
      spoiler.setAttribute(settings.stateAttribute, settings.hideAttr)
      animation(spoiler)
   }

   const getIsOpenState = (spoiler) => {
      return spoiler.getAttribute(settings.stateAttribute) === settings.showAttr
   }

   const animation = (() => {
      const timeoutMap = new WeakMap()

      const setTransitionStyles = (element, height) => {
         element.style.height = height
         element.style.transition = `height ${settings.duration}ms ease`
      }

      const resetStyles = (element) => {
         element.style.height = ''
         element.style.transition = ''
      }

      const handleTimeout = (element, callback) => {
         const previousTimeoutId = timeoutMap.get(element)
         if (previousTimeoutId) {
            clearTimeout(previousTimeoutId)
         }

         const timeoutId = setTimeout(() => {
            callback()
            timeoutMap.delete(element)
         }, settings.duration)

         timeoutMap.set(element, timeoutId)
      }

      return (spoiler) => {
         const currentState = getIsOpenState(spoiler)

         const openContent = () => {
            const height = spoiler.content.offsetHeight
            setTransitionStyles(spoiler.content, '0')
            spoiler.content.offsetHeight
            setTransitionStyles(spoiler.content, `${height}px`)
            handleTimeout(spoiler.content, resetStyles.bind(null, spoiler.content))
         }

         const closeContent = () => {
            setTransitionStyles(spoiler.content, `${spoiler.content.offsetHeight}px`)
            spoiler.content.offsetHeight
            setTransitionStyles(spoiler.content, '0')

            handleTimeout(spoiler.content, () => {
               resetStyles(spoiler.content)
               spoiler.classList.remove(settings.activeContentClass)
            })
         }

         if (currentState) {
            spoiler.classList.add(settings.activeContentClass, settings.showClass)
            openContent()
         } else {
            spoiler.classList.remove(settings.showClass)
            closeContent()
         }
      }
   })()

   const clickHandler = (spoiler) => {
      if (spoiler.group) {
         console.log(spoiler.group)
         closeGroup(spoiler, spoiler)
      } else {
         toggle(spoiler)
      }
   }

   const init = (spoiler) => {
      const isOpen = getIsOpenState(spoiler)
      const handler = () => clickHandler(spoiler)

      if (!spoiler.titleBtn || !spoiler.content) return
      if (isOpen) open(spoiler)
      spoiler.content.style.transition = `all 0ms ease`
      spoiler.classList.add(settings.initClass)

      spoiler.titleBtn.addEventListener('click', handler)
      spoiler._clickHandler = handler
   }

   const startClasses = (spoiler) => {
      const initState = spoiler.hasAttribute(settings.stateAttribute) ? spoiler.getAttribute(settings.stateAttribute) : settings.hideAttr
      if (initState === settings.showAttr) {
         spoiler.classList.add(settings.initShowClass)
         spoiler.classList.add(settings.initShowClass)
      } else if (initState === settings.hideAttr) {
         spoiler.classList.add(settings.initHiddenClass)
      }
   }

   const destroy = (spoiler) => {
      spoiler.classList.remove(settings.initClass)
      spoiler.setAttribute(settings.stateAttribute, settings.hideAttr)

      if (spoiler._clickHandler) {
         spoiler.titleBtn.removeEventListener('click', spoiler._clickHandler)
         delete spoiler._clickHandler
      }
   }

   const resizeHandler = (spoiler) => {
      let isInit = false

      const initAction = () => {
         init(spoiler)
         isInit = true
      }

      const destroyAction = () => {
         destroy(spoiler)
         isInit = false
      }

      window.innerWidth <= spoiler.screen ? initAction() : () => { }
      window.addEventListener('resize', () => {
         if (window.innerWidth <= spoiler.screen && !isInit) {
            initAction()
         } else if (window.innerWidth > spoiler.screen && isInit) {
            destroyAction()
         }
      })
   }

   spoilers.forEach(spoiler => {
      spoiler.screen = spoiler.hasAttribute(settings.resizeAttribute) ? parseInt(spoiler.getAttribute(settings.resizeAttribute)) : null
      spoiler.group = spoiler.hasAttribute(settings.groupAttribute) ? spoiler.getAttribute(settings.groupAttribute) : null
      spoiler.content = spoiler.querySelector(settings.contentSelector)
      spoiler.titleBtn = spoiler.querySelector(settings.titleSelector)

      startClasses(spoiler)
      if (spoiler.screen) {
         resizeHandler(spoiler)
      } else {
         init(spoiler)
      }
   })
}

export default FESpoilers