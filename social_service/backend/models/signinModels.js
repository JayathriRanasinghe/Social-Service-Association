const mongoose = require('mongoose')

const signInForm = new mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('social_service',signInForm)