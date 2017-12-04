const webpack = require('webpack');
const path = require('path');
const {HMR, NODE_ENV} = process.env;

const port = process.env.port || 8080;
const extensions = ['.js', '.json'];
let plugins = [];
if (HMR) {
  plugins = [
    ...plugins,
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ];
}
let publicPath = 'https://johnetrent.github.io/resume/dist/';
if (HMR) publicPath = `http://localhost:${port}/dist/`;

module.exports = {
  entry: HMR ? ['react-hot-loader/patch', './index.js'] : './index.js',
  resolve: {
    alias: {
      aphrodite: 'aphrodite/no-important',
    },
    extensions:
      NODE_ENV === 'production'
        ? extensions.concat(['.prod.js', '.prod.json'])
        : extensions.concat(['.dev.js', '.dev.json']),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /fonts/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: path.join(__dirname, 'src'),
            },
          },
          'image-webpack-loader?bypassOnDebug',
        ],
      },
    ],
  },
  output: {
    filename: 'resume.js',
    path: path.join(__dirname, 'dist'),
    publicPath,
  },
  plugins,
  devServer: {
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
