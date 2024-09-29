/*
Slider Documentation: https://swiperjs.com/
*/
import Swiper from 'swiper'

// Base styles ====================================================================================


// Modules: =======================================================================================
// Navigation, Pagination, Autoplay, EffectFade, Lazy, Manipulation

import { Navigation, Autoplay } from 'swiper/modules'

//=================================================================================================

function initSliders() {
   const sliders = document.querySelectorAll('.swiper')
   if (sliders.length > 0) {
      sliders.forEach(slider => {
         new Swiper(slider, {
            modules: [Navigation, Autoplay],
            spaceBetween: 26,
            slidesPerView: 3,
            loop: true,
            speed: 800,
            // autoHeight: true,
            autoplay: {
               delay: 3500,
               disableOnInteraction: false,
            },
            navigation: {
               prevEl: slider.querySelector('.navigation__btn_prev'),
               nextEl: slider.querySelector('.navigation__btn_next'),
            },
            breakpoints: {
               320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
               },
               767.98: {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
               991.98: {
                  slidesPerView: 3,
                  spaceBetween: 26,
               },
            },
            on: {
               init() {
                  slider.addEventListener('mouseenter', () => {
                     this.autoplay.stop()
                  })
                  slider.addEventListener('mouseleave', () => {
                     this.autoplay.start()
                  })
               }
            }
         })
      })
   }
}
window.addEventListener("load", function () {
   initSliders()
})
