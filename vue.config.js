module.exports = {
    devServer: {
        publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
        proxy: {
            '/api': {
                target: 'http://mobilecdnbj.kugou.com/api/v3/rank/song?version=9108&ranktype=3&plat=0&pagesize=100&area_code=5&page=0&volid=40709&rankid=8888&with_res_tag=2',
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true,
            },
            '/foo': {
                target: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?page=detail&tpl=macv4&type=top&topid=26&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0',
                pathRewrite: {
                    '^/foo': ''
                },
                changeOrigin: true,
            },
        }
    }
}