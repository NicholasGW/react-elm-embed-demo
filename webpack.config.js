module.exports = {
  entry: "./src/js/main.jsx",
  output: {
    filename: "bundle.js"
  },
  module: {
  loaders: [
    { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"}
  ]
},
devtool: 'inline-source-map'
}
