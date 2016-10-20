const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

const isProductionMode = ~process.argv.indexOf('-production')
const outputDir = isProductionMode ? 'dist' : 'build'

const commandFiles = ['', '-deploy', '-help'].map( command => {
  return `push${command}`;
})

const commonOptions = {

}

const binConfigs = commandFiles.map(commandFile => {
  return {
    entry: `./src/bin/${commandFile}.js`,
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    module: {
      preLoaders: [{
        test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/
      }],
      loaders: [{
        loader: 'babel',
        test: /\.js?$/,
        exclude: /node_modules/
      }]
    },
    plugins: [
      new webpack.BannerPlugin('#!/usr/bin/env node', { raw: true })
    ],
    output: {
      filename: `${outputDir}/bin/${commandFile}`
    },
    externals: [ nodeExternals() ],
    resolve: {
      extensions: ['', '.js'],
      modulesDirectories: ['src', 'node_modules']
    }
  }
})

module.exports = binConfigs
