/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        sh_paleViolet:"hsl(276, 100%, 81%)",
        chatleft_modViolet:"hsl(276, 55%, 52%)",
        chatright_darkViolet:"hsl(271, 15%, 43%)",
        grey:"hsl(206, 6%, 79%)",
        mainhead_veryDarkViolet:"hsl(271, 36%, 24%)",
        para_darkGrey:"hsl(270, 7%, 64%)",
        magenta:"hsl(293, 100%, 63%)",
        lightViolet:"sl(264, 100%, 61%)",
        white:"hsl(0, 0%, 100%)",
        bg_lightGreyViolet:"hsl(270, 20%, 96%)",
        buttonbg_darkViolet:"hsl(271, 36%, 24%)",
        radio_lightMagenta:"hsl(289, 100%, 72%)"
      }
    },
    fontFamily:{
      web_text:"url()"
    }

  },

  plugins: [],
}
