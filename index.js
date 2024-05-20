require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;


app.get('/', (req, res)=>{
    res.send("Hello World");
})

app.get('/info', (req, res)=>{
    res.send("My name is Amrit Kandel.");
})

app.listen(port, (req, res)=>{
    console.log(`Example app listening to port on ${port}`)
})
