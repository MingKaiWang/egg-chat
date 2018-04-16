module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    
    const UserSchema = new Schema({
        username: { type: String },
        password: { type: String },
        name: { type: String, default: 'user' },
        avatar: { type: String, default: '' },
        status: { type: Number, default: 0 },
        allowMultitermimalLogin: { type: Boolean, default: false }
    }, {
        timestamps: true
    });
    return mongoose.model('User', UserSchema)
}