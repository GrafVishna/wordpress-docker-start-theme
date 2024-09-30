/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

export default {
   content: [
      './**/*.{php,html}',
      './assets/src/**/*.{scss,js}',
      '!./assets/dist/**',
      '!./languages/**',
      '!./webpack/**',
      '!./node_modules/**',
   ],

   theme: {
      extend: {},
   },
   plugins: [typography, forms, containerQueries],
}
