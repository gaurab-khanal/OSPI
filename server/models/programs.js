const mongoose = require('mongoose');


const programSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    link: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    logo: {
            type: String, // store url of logo and displays it
            trim: true
    },
    description : {
        type: String,
        trim: true
    },
    isPaid: {
        type: Boolean,
        default: false
    },
    duration: {
        type: String,
        trim: true
    },
    organization: {
        type: String,
        trim: true
    },
    location: {
        type: String, // remote / not remote
        trim: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Programs", programSchema);