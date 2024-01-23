/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
