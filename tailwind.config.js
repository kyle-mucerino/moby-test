/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "off-white": "#FDFDFD",
        "off-black": "#272727",
        "sierra-blue": "#0066DD",
        "learn-blue": "#003261",
        'accent': "#3F4360",
        'legal-disclaimer': "#7B7B7B",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      fontSize: {
        h1: ["44px", { lineHeight: "54px", fontWeight: "600" }],
        h2: ["36px", { lineHeight: "48px", fontWeight: "600" }],
        h3: ["30px", { lineHeight: "44px", fontWeight: "500" }],
        h4: ["16px", { lineHeight: "24px", fontWeight: "700" }],
        button: ["20px", { lineHeight: "30px", fontWeight: "600" }],
        subtext1: ["20px", { lineHeight: "30px", fontWeight: "600" }],
        subtext2: ["16px", { lineHeight: "24px", fontWeight: "500" }],
        p1: ["16px", { lineHeight: "24px", fontWeight: "600" }],
        p2: ["16px", { lineHeight: "24px", fontWeight: "400" }]
      },
      backgroundImage: {
        "text-gradient":
          "radial-gradient(106.75% 134.55% at -6.75% 0%, rgba(255, 255, 255, 0.83) 0%, rgba(255, 255, 255, 0.1) 100%)"
      }
    }
  },
  plugins: []
};
