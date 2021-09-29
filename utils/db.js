const mongoose = require('mongoose')

// connect to db
mongoose.connect('mongodb://127.0.0.1:27017/myNote',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    // useCreateIndex: true
})
