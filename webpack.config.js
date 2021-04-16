const path = require(`path`);

module.exports = {
  entry: `./src/index.js`,
  mode: 'development',
  output: {
    filename: `bundle.js`,
  },
  devServer: {
    contentBase: path.resolve(__dirname, `build`),
    open: false,
    port: 1337,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  resolve: {
    extensions: [`.js`, `.jsx`]
  },
  devtool: `source-map`,
};
