const path = require("path");
// module.exports нь яг яаж бидний заасныг хийж ажиллах файлыг bundle Хийхийг зааж өгөхийн тулд хэрэглэнэ
module.exports = {
  //bundle хийх гэж байгаа файлын замыг зааж өгнө.
  entry: "./app/assets/scripts/app.js",
  //dist folder дотор байлгамааргүй бол замыг нь өөрчлөх
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"),
  },
  // Шар алдаа зааж буй бичигийг арилгах
  mode: "development",
  watch: true,
};
