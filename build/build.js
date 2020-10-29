/**
 * @description 构建命令配置
 * @date 2020-01-08
 * @author mayijun
 */
const webpack = require('webpack')
const chalk = require('chalk')
const Spinner = require('cli-spinner').Spinner
const {
    generateWebpackConfig,
    webpackStatsPrint,
    resolve
} = require('./utils')

// 环境传参
const env = process.argv[2]
    // 生产环境
const production = env === 'production'
    // 模块环境
const mod = env === 'mod'

if (production) {
    let config = generateWebpackConfig('production')
    let spinner = new Spinner('building: ')
    spinner.start()
    webpack(config, (err, stats) => {
        if (err || stats.hasErrors()) {
            try {
                const info = stats.toJson();
                webpackStatsPrint(info.errors)
            } catch (error) {
                console.log('---容错--', error, 'webpack 处理-----', err);
            }


            console.log(chalk.red('× Build failed with errors.\n'))
            process.exit()
        }

        webpackStatsPrint(stats)

        spinner.stop()

        console.log('\n')
        console.log(chalk.cyan('√ Build complete.\n'))
        console.log(
            chalk.yellow(
                '  Built files are meant to be served over an HTTP server.\n' +
                '  Opening index.html over file:// won\'t work.\n'
            )
        )
    })
} else {
    module.exports = generateWebpackConfig('development')
}