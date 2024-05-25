/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
     fontFamily:{
      title:['Space Grotes'],
      tes:['TESLA']
     },
     screens:{
      "tablet": "2900px",
      "smalls": "909px",
      "another": "900px",
      "and":"800",
      "again":"1700px"
    },
    colors:{
      "grey":"#222"
    }
    },
  },
  plugins: [],
}

