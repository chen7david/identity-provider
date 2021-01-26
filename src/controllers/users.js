

module.exports = {

    loadInstance: async (id, ctx, next) => {
        await next()
    },

    index: async (ctx) => {
        ctx.body = 'users'
    }
}