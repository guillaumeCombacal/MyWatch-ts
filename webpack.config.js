const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'resources/[hash][ext][query]'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'GE Template ts',
    template: path.join(process.cwd(), 'src/index.html'),
    filename: 'index.html',
  })],
  devServer: {
    host: '127.0.0.1',
    port: '8080',
  }
};
