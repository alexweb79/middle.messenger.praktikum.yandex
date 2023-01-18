const { merge } = require('webpack-merge');

const webpackMainConfig = require('./webpack.main');
const webpackProductionConfig = require('./webpack.production');
const webpackDevelopmentConfig = require('./webpack.development');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)

module.exports = () => {
    if (isProduction) {
        return merge(webpackMainConfig, webpackProductionConfig);
    } else {
        return merge(webpackMainConfig, webpackDevelopmentConfig);
    }
};
