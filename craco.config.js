const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (config) => {
      config.resolve.fallback = {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify')
      };
      return config;
    }
  }
};
