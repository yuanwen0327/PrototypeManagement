var path = require("path");
var Zip = require("node-7z");

module.exports = function (file) {
  var fileName = path.parse(file.path).name
  return new Promise((resolve) => {
    if (file.name.indexOf('.md.') !== -1) {
      // 墨刀逻辑
      var mdDir = ''
      new Zip().list(file.path)
        .progress(function (files) {
          if (!mdDir) {
            mdDir = files[0].name
          }
        })
        .then(() => {
          resolve(`/web/${fileName}/${mdDir}/index.html`)
        })
    } else {
      //axure和其他
      resolve(`/web/${fileName}/index.html`)
    }
  })
}
