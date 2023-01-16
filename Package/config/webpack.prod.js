const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');


const prodConfig = {
    mode: 'production', 
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/transactions/latest/'
    },
   plugins: [
    new ModuleFederationPlugin({
        name: 'transactions',
        filename: 'remoteEntry.js',
        exposes: {
            './Transactions': '/src/bootstrap'
        },
        //shared: packageJson.dependencies
        shared: {
            react: {
                singleton: true,
            },
            
        }
    })

   ]


};

module.exports = merge(commonConfig, prodConfig);
