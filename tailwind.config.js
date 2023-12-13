/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      background: {
        "bg_add_button": "linear-gradient(0deg, rgba(155,34,195,1) 0%, rgba(4,0,40,1) 100%);"
      },
      backgroundColor: {
        bg_main: "#060014",
        bg_body: "#101010",
        bg_add_button: "#6f0094",
        bg_login_button: "#000075",
        bg_register_button: "#4f0b4f"
      },
      linearGradientColors: {
        dark_gradient: "rgb(155, 34, 195), linear-gradient(0deg, rgba(155, 34, 195, 1) 0 %, rgba(4, 0, 40, 1) 100 %);"
      },
      colors: {
        color: "#fff",
        border_color: "#ffffff40",
        list_border_color: "#ffffff1a",
        icons_color: "#808080"

      },
      fontSize: {
        title: "36px"
      },
      padding: {
        p_large: "50px",
        p_medium: "30px",
        p_small: "20px",
        p_xsmall: "10px",

      },
      margin: {
        m_large: "50px",
        m_medium: "30px",
        m_small: "20px",
        m_xsmall: "10px",
      },
      width: {
        '128': '32rem',
      },
      borderRadius: {
        default_radius: "30px"
      },
      boxShadow: {
        shadow: "0px 0px 30px -20px #fff;"
      }


    },
  },
  plugins: [

  ],
}

