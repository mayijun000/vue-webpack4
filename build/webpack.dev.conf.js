/**
 * @description 本地配置
 * @date 2020-01-08
 * @author mayijun
 */
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        open: true,
        compress: false,
        port: 9002,
        hot: true,
        historyApiFallback: true, // 任意的 404 响应都被替代为 index.html
        clientLogLevel: 'none',
        stats: 'minimal',
        inline: true,
        proxy: {
            // 代理网关服务
            '/api': {
                target: 'http://192.168.0.181:7070',
                pathRewrite: {
                    '^/api': ''
                }
            },
            
        }
    },
    optimization: {
        usedExports: true,
        runtimeChunk: {
            name: 'runtime'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}