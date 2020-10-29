/**
 * @description babel配置
 * @date 2020-01-08
 * @author mayijun
 */
module.exports = {
	presets: [
		['@babel/preset-env']
	],
	plugins: ["@babel/plugin-syntax-dynamic-import","transform-vue-jsx"],
	ignore: ["./static/video_platform/webVideoCtrl.js"],
}
