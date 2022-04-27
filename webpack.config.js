const path = require('path');

module.exports = {
  entry: {
    /* [name]: [path] */
    app: './src/index.js',
    print: './src/my-test.js'
  },// đây là file input(do chúng ta tạo và code nội dung)
  output: {
    filename: '[name].bundle.js',// đây là file output (code được Webpack tự động sinh ra)
    path: path.resolve(__dirname, 'dist') // đường dẫn chứa file output, chúng ta hoàn toàn có thể thay đổi đường dẫn này.
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};