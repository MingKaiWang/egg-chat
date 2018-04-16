module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    
    const MessageSchema = new Schema({
        rid: { type: String },
        createBy: { type: String },
        type: { type: Number },
        content: { type: String }
    }, {
        timestamps: true
    });
    return mongoose.model('Message', MessageSchema)
}