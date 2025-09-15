// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["'Nunito Sans'", "sans-serif"],
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "25%": { transform: "translate(-48%, -52%) rotate(-1deg)" },
          "50%": { transform: "translate(-50%, -50%) rotate(1deg)" },
          "75%": { transform: "translate(-52%, -48%) rotate(-1deg)" },
        },
      },
      animation: {
        "shake-slow": "shake 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
