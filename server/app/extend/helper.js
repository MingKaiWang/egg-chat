'use strict'

module.exports = {
    parseMsg(action, payload={}, metadata={}) {
        const meta = Object.assign({}, {
            timestamp: Date.now(),
        }, metadata)
        return {
            meta,
            data: { action, payload }
        }
    },
    parseResult(action, payload={}, metadata={}) {
        const meta = Object.assign({}, {
            timestamp: Date.now(),
        }, metadata)
        return {
            meta,
            reault: { action, payload }
        }
    },
    parseRes(payload={}, metadata={}) {
        const meta = Object.assign({},{
            timestamp: Date.now(),
        }, metadata)
        return {
            meta,
            result: { payload }
        }
    }
}