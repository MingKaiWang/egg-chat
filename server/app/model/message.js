module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    const ObjectId = mongoose.Schema.Types.ObjectId
    
    const MessageSchema = new Schema({
        rid: { type: ObjectId },
        createBy: { type: ObjectId },
        type: { type: Number },
        content: { type: String }
    }, {
        timestamps: true
    });
    return mongoose.model('Message', MessageSchema)
}