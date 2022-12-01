const path = require('path');
const webpack = require('webpack');

const environment = process.env.ENVIRONMENT;

if (environment === 'production') {
  ENVIRONMENT_VARIABLES = {
    'process.env.ENVIRONMENT': JSON.stringify('production'),
    'process.env.PORT': JSON.stringify('8090'),
    'process.env.MONGO_CONNECTION_STRING': JSON.stringify('mongodb+srv://abrar2545:x1T8KeCDJ7nEA0ka@ekscluster.kkc5zw6.mongodb.net/eks')
  };
}

module.exports = {
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.bundle.js',
  },
  target: 'node',
  plugins: [
    new webpack.DefinePlugin(ENVIRONMENT_VARIABLES),
  ],
};