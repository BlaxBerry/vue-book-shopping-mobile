module.exports = {
    devServer: {
        // 设置端口号 
        port: 8080,
        // 配置代理 ，解决跨域
        // proxy: {
        //     '/api': {
        //         target: "http://kumanxuan1.f3322.net:8001/",
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }
    },
    publicPath: "./",
    // folder /docs is used to build GitHub Pages
    outputDir: 'docs/'

}