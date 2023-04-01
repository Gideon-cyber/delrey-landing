module.exports = {
  plugins: [
    require("postcss-flexbugs-fixes"),
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
    // tailwindcss: {},
    // autoprefixer: {},
  ],
};
