/*
* time 2018-12-14
* */
'use strict'
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin // Webpack包文件分析器
const path = require('path')

const resolve = (dir) => {
	return path.join(__dirname, dir)
}

const port = process.env.port || process.env.npm_config_port || 9527 // dev port

function addStyleResource(rule) {
	rule.use('style-resource')
		.loader('style-resources-loader')
		.options({
			patterns: [
				path.resolve(__dirname, 'src/styles/variables.less'), // 需要全局导入的less
				path.resolve(__dirname, 'src/styles/utils.less')
			]
		})
}

module.exports = {
	publicPath: process.env.baseUrl,
	productionSourceMap: false,
	filenameHashing: process.env.NODE_ENV === 'development',
	outputDir: process.env.outputDir,
	lintOnSave: process.env.NODE_ENV === 'development',

	configureWebpack: (config) => {
		// 入口文件
		config.entry = ['babel-polyfill', './src/main.js']
		// 别名
		config.resolve.alias = {
			'@': resolve('src'),
			'@assets': resolve('src/assets'),
			'@layouts': resolve('src/layouts'),
			'@pages': resolve('src/pages'),
			'@comp': resolve('src/components'),
			'@api': resolve('src/api'),
			'@plug': resolve('src/plugins'),
			'@native': resolve('src/native'),
			'@utils': resolve('src/utils'),
			'@styles': resolve('src/styles')
		}
		// 打包分离
		config.optimization = {
			splitChunks: {
				cacheGroups: {
					vendor: {
						chunks: 'all',
						test: /node_modules/,
						name: 'chunk-vendors',
						minChunks: 1,
						maxInitialRequests: 5,
						minSize: 0,
						priority: 100
					}
					/* common: {
						chunks:"all",
							test:/[\\/]src[\\/]js[\\/]/,
							name: "common",
							minChunks: 2,
							maxInitialRequests: 5,
							minSize: 0,
							priority:60
					}*/
				}
			}
		}
		/*
		// 生产and测试环境
		let pluginsPro = [
			// new BundleAnalyzerPlugin(),
			/!* new CompressionWebpackPlugin({
			   algorithm: 'gzip',
			   test: /\.js$|\.html$|\.css/,
			   threshold: 10240,
			   minRatio: 0.8
			 })*!/
		]
		// 开发环境
		let pluginsDev = []

		if (process.env.NODE_ENV === 'development') { // 为开发环境修改配置...
			config.plugins = [...config.plugins, ...pluginsDev]
		} else { // 为生产环境修改配置...process.env.NODE_ENV !== 'development'
			config.plugins = [...config.plugins, ...pluginsPro]
		}*/
	},

	chainWebpack: config => {
		config.plugins.delete('preload') // 移除preload
		config.plugins.delete('prefetch') // 移除prefetch

		config.module
			.rule('images')
			.use('url-loader')
			.tap(options => Object.assign(options, { limit: 500 }))
			.end()

		config.module
			.rule('vue')
			.use('vue-loader')
			.loader('vue-loader')
			.tap(options => {
				options.compilerOptions.preserveWhitespace = true
				return options
			})
			.end()
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
		types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
	},

	devServer: {
		port,
		https: false,
		open: false, // 配置自动启动浏览器
		hotOnly: true, // 热更新
		overlay: {
			warnings: false,
			errors: true
		},
		proxy: {
			'/pathfinder': {
				target: 'http://192.168.0.98:8881',
				// target: 'http://47.112.1.31',
				changeOrigin: true
			},
			'/api': {
				target: 'http://localhost:3000/',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
		// after: require('./mock/mock-server.js')
	},

	css: {
		extract: process.env.NODE_ENV === 'production',
		loaderOptions: { // 向 CSS 相关的 loader 传递选项
			less: {
				javascriptEnabled: true
			}
		}
	}
}
