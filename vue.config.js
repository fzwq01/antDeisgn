module.exports = {
    lintOnSave: false,
    devServer:{
        proxy:'http://192.168.4.25:8080'
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
              }
        },
    },
}