//commonJS暴露
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      //
    },
  },

  lintOnSave: false, //关闭语法检查

  //配置代理服务器 (方式一)
  /* devServer:{
    proxy:'http://localhost:5000'
  } */

  //配置代理服务器 (方式二)
  devServer: {
    proxy: {
      '/atguigu': {  //请求前缀
        target: 'http://localhost:5000',
        pathRewrite:{'^/atguigu':''},
        ws: true, //用于支持webSocket 
        changeOrigin: false
      },

      '/demo': {  //请求前缀
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''},
        ws: true, //用于支持webSocket 
        changeOrigin: false
      },
    }
  }
}
