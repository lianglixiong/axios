/*
 * @Author: 010693
 * @Date:   2021-04-19 14:39:51
 * @Last Modified by:   010693
 * @Last Modified time: 2021-04-19 15:17:49
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // JavaScript 执行入口文件
    entry: './index.js',
    output: {
        // 把所有依赖的模块合并输出到一个 bundle.js 文件
        filename: 'bundle.js',
        // 输出文件都放到 dist 目录下
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'axios源码解读',
            template: 'assets/index.html',
            // chunks: ['app']
        })
    ]
};