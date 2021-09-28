const express = require('express')


const app = express()
const port = 3000

app.get('/', (req,res) => {
    
})

// if page not found
app.use((req,res) => {
    res.status(404).send(404)
})

// listen
app.listen(port,()=>{
    console.log(`myNotes | listen to http://127.0.0.1:${port}`);
})