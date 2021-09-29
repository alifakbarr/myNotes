const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override') // for make PUT and DELETE method

const { body, validationResult, check} = require('express-validator')

// db
require('./utils/db')
const Note = require('./models/note') 

// set up express
const app = express()
const port = 3000

// set up method-override
app.use(methodOverride('_method'))

// set up ejs layouts
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

// page home
app.get('/', async (req,res) => {
    const notes = await Note.find()
    res.render('index',{
        title: 'MyNotes',
        layout: 'layouts/main-layout',
        notes

    })
})

// page form add note
app.get('/note/create', (req,res) => {
    res.render('notes/create',{
        title : 'Create My Note',
        layout: 'layouts/main-layout'
    })
})

// proses create note
app.post('/note', (req,res) =>{
        Note.insertMany(req.body, (error, result)=>{
            res.redirect('/')
        })
    }
)

// detail note
app.get('/note/detail/:id', async (req,res) => {
    const note = await Note.findOne({ _id : req.params.id})
    res.render('notes/detail',{
        title : note.title,
        layout: 'layouts/main-layout',
        note
    })
})

app.delete('/note', async (req,res) => {
    await Note.deleteOne({_id: req.body._id})
    res.redirect('/')
})

// listen
app.listen(port,()=>{
    console.log(`myNotes | listen to http://127.0.0.1:${port}`);
})