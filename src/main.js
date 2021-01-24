global.c = (val) => console.log(val)
const Koa = require('koa')
const app = new Koa()
const cors = require('kcors')
const { server } = require('config')






app.listen(server.port, () => {
    const url = require('url').format(server)
    console.log('server running at:', url)
})