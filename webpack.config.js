const path = require('path');

module.exports = {
  entry: './src/index.js',// đây là file input(do chúng ta tạo và code nội dung)
  output: {
    filename: 'main.js',// đây là file output (code được Webpack tự động sinh ra)
    path: path.resolve(__dirname, 'dist') // đường dẫn chứa file output, chúng ta hoàn toàn có thể thay đổi đường dẫn này.
  }
};