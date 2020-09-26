module.exports = {
  lintOnSave: false,
  devServer: {
    publicPath:"/",
    port: 3000,
    // 可以自动打开浏览器
    open:true,
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [ "./src/common/less/variable.less"] // 引入全局样式变量
    }
  }

}
