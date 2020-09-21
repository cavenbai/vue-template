const path = require("path");
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

const entryMap = {
	reception: 'src/main-reception.ts',
	backstage: 'src/main-backstage.ts'
};
const outputDirMap = {
	reception: 'dist-reception',
	backstage: 'dist-backstage'
};
const titleMap = {
	reception: '客户端',
	backstage: '配置端'
};

let platform = ''
if (process.argv.indexOf('--reception') > -1) { platform = 'reception' }
if (process.argv.indexOf('--backstage') > -1) { platform = 'backstage' }

module.exports = {
    outputDir: outputDirMap[platform],
    pages: {
      index: {
        entry: entryMap[platform],
        title: titleMap[platform],
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
    },
    publicPath: `/${platform}`,
    assetsDir: 'assets', 
    productionSourceMap: false, 
    lintOnSave: false,
    devServer: {
      open: true,
      host: 'localhost',
      port: 9000,
      https: false,
      hotOnly: false,
      proxy: {
        // 配置跨域
        '/api': {
          target: process.env.VUE_APP_BASE_API,
          ws: true,
          changOrigin: true,
          pathRewrite: {
            '^/api': '/api'
          }
        }
      },
      before: app => {}
    },
    // 修改webpack配置
  chainWebpack: (config) => {
      // 配置加载svg图标
      config.module.rules.delete('svg')
      config.module
        .rule('svg')
        .exclude.add(path.join(__dirname, 'src/assets/svg'))
        .end()
      config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(path.join(__dirname, 'src/assets/svg'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
        .end()
    },
    configureWebpack: {
      performance: {
        hints: false
      },
      resolve: {
        alias: {
          'api': '@/apis'
        }
      },
      devtool: isProduction ? undefined : 'source-map', // 开发环境开启source-map
      plugins: [
        new HardSourceWebpackPlugin() //缓存dll提高编译加载速度
      ],
    },
    pluginOptions: {
      "style-resources-loader": {
        preProcessor: "scss",
        patterns: [
          path.resolve(__dirname, `src/styles/theme.scss`)
        ]
      }
    },
    runtimeCompiler: true
};