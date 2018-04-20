'use strict';

const Service = require('egg').Service

class RoomService extends Service {
    constructor(ctx) {
        super(ctx)
    }

    async createGroupRoom({ name, users, info }) {
        const { Room } = this.ctx.model
        const room = await Room.create({ 
            name,
            owner: this.ctx.state.user._id,
            managers: [this.ctx.state.user._id],
            users,
            info
        })
        return room
    }

    async createDirectRoom({ name, user, info }) {
        const { Room } = this.ctx.model
        const room = await Room.create({
            name,
            owner: this.ctx.state.user._id,
            managers: [this.ctx.state.user._id, user],
            users: [this.ctx.stale.user._id, user],
            info
        })
    }


}

module.exports = RoomService