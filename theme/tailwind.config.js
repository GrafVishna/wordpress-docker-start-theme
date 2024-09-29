/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./*{.php,html}",
      "./**/*{.php,html}",
      "./assets/src/**/*.{scss,js}",
      "!./node_modules/**"],
   theme: {
      extend: {},
   },
   plugins: [],
}