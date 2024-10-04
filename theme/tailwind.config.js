/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

export default {
   content: [
      './**/*.{php,html}',
      './assets/src/**/*.{scss,js}',
      '!./assets/dist/**/*.*',
      '!./languages/**/*.*',
      '!./webpack/**/*.*',
      '!./node_modules/**',
   ],

   plugins: [
      typography,
      forms,
      containerQueries,
   ],

   theme: {
      extend: {
         colors: {
            primary: '#1DA1F2',
            secondary: '#444444',
         },
         fontFamily: {
            sans: ['Helvetica', 'Arial', 'sans-serif'],
         },
      },
   },

}
