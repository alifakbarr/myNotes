const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')

// set up express
const app = express()
const port = 3000

// set up express-layouts
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))

// page home
app.get('/', (req,res) => {
    res.render('index',{
        title: 'MyNotes',
        layout: 'layouts/main-layout'
    })
})

// page form add note
app.get('/note/create', (req,res) => {
    res.render('notes/create',{
        title : 'Create My Note',
        layout: 'layouts/main-layout'
    })
})

// listen
app.listen(port,()=>{
    console.log(`myNotes | listen to http://127.0.0.1:${port}`);
})