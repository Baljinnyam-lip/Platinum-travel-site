const path = require("path");
const postCSSPlugins = [
  require('postcss-loader'),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer"),
];
// module.exports нь яг яаж бидний заасныг хийж ажиллах файлыг bundle Хийхийг зааж өгөхийн тулд хэрэглэнэ
module.exports = {
  //bundle хийх гэж байгаа файлын замыг зааж өгнө.
  entry: "./app/assets/scripts/app.js",
  //dist folder дотор байлгамааргүй бол замыг нь өөрчлөх
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"),
  },
  // Шар алдаа зааж буй бичгийг арилгах
  mode: "development",
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: { postcssOptions: { plugins: postCSSPlugins } },
          },
        ],
      },
    ],
  },
};
