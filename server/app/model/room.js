module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    const ObjectId = mongoose.Schema.Types.ObjectId
    
    const RoomSchema = new Schema({
        name: { type: String },
        owner: { type: ObjectId },
        managers: [ObjectId],
        users: [ObjectId],
        info: { type: String }
    }, {
        timestamps: true
    });
    return mongoose.model('Room', RoomSchema)
}