const path = require("path")
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./docs/"),
    // path: path.resolve(__dirname, "./public/dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "./docs"),
    // contentBase: path.join(__dirname, "./public/dist"),
    watchContentBase: true
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "sass-resources-loader",
            // global resources of SCSS
            options: {
              resources: [
                "./src/assets/css/resources.scss",
                "./src/assets/css/default.scss",
                "./src/assets/css/mixin.scss",
                "./src/assets/css/page.scss"
              ]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            scss: "vue-style-loader!css-loader!sass-loader"
          }
        }
      },
      {
        test: /\.png$/i,
        use: [
          "file-loader"
        ],
      }
      // {
      //   test: /\.js$/,
      //   loader: ""
      // }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}