const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    /* [name]: [path] */
    newfile: [
      './src/index.js',
      './src/my-test.js'
    ]
  },// đây là file input(do chúng ta tạo và code nội dung)
  output: {
    filename: '[name].js',// đây là file output (code được Webpack tự động sinh ra)
    path: path.resolve(__dirname, 'dist') // đường dẫn chứa file output, chúng ta hoàn toàn có thể thay đổi đường dẫn này.
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ]
};