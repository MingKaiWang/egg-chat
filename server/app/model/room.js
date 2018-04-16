module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    
    const RoomSchema = new Schema({
        name: { type: String },
        owner: { type: String },
        managers: [[String]],
        users: [[String]],
        info: { type: String }
    }, {
        timestamps: true
    });
    return mongoose.model('Message', RoomSchema)
}