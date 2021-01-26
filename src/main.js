global.c = (val) => console.log(val)
const Koa = require('koa')
const app = new Koa()
const cors = require('kcors')
const bodyparser = require('koa-bodyparser')
const router = require('./routes')
const { server } = require('config')

/* APP MIDDLEWARE */
app.use(cors())
app.use(bodyparser())

/* APP ROUTES */
for(let key of Object.keys(router)){
    app.use(router[key].routes())
}

/* SERVER */
app.listen(server.port, () => {
    const url = require('url').format(server)
    console.log('server running at:', url)
})