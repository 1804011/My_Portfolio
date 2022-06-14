module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4458dc",
          secondary: "#854fee",
          accent: "#141313",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
