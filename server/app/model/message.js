module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    
    const MessageSchema = new Schema({
        room: { type: String },
        createBy: { type: String },
        messageType: { type: Number },
        messageContent: { type: String }
    }, {
        timestamps: true
    });
    return mongoose.model('Message', MessageSchema)
}