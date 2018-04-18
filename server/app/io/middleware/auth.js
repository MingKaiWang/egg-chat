
module.exports = () => {
    return async (ctx, next) => {
        const { app, socket, logger, helper } = ctx

        const id = socket.id
        const nsp = app.io.of('/')
        const query = socket.handshake.query

        const { token } = query

        const check = (param, msg) => {
            if (!param) {
                let message = msg || no `'${param}' in socket params`
                logger.debug('#chect', param, message)
                socket.emit(id, helper.parseMsg('frog', message))
                socket.disconnect(true)
            }
        }

        check(token)
        await next()

    }
}