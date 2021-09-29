const mongoose = require('mongoose')

const Note = mongoose.model('Note',{
    title:{
        type:String,
        required:true,
    },
    note:{
        type:String,
        required:true
    }
})

module.exports = Note