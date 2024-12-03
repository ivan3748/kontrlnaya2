const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,


  devServer: {
    proxy: {
 
      '/auth': {
        target: 'https://dummyjson.com',
        changeOrigin: true,             
        secure: false,                 
        pathRewrite: {
          '^/auth': '',                 
        },
      },
    },
  },
});
