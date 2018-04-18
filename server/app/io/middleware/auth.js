
module.exports = () => {
    return async (ctx, next) => {
        const { app, socket } = ctx

        const id = socket.id
        const nsp = app.io.of('/')
        const query = socket.handshake.query

        const { token, room } = query

        const check = (param, msg) => {
            if (!param) {
                let message = msg || no `'${param}' in socket params`
                console.log(message)
                socket.disconnect(true)
            }
        }

        check(token)
        check(room)
        

    }
}