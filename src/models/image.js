const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
    title: String,
    description: String,
    filename: String,
    path: String,
    originalname: String,
    mimetype: String,
    size: Number,
    create_at: {
        type: Number,
        default: Date.now()
    }

})

module.exports= model('Image',imageSchema);