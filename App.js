const express = require('express');

const App =  express();

const middlewareOne = (req,res,next) => {
    console.log("A");
    next();
}

const middlewareTwo = (req,res,next) => {
    console.log("My Second middleware");
    next();
}

App.get('/',(req,res)=>{
    // res.send(res)
    // res.send('Hello')
    res.send('Amit Kumar')
})

App.get('/About', (req, res) => {
    // res.send(res)
    // res.send('Hello')
    res.send('Amit');
})

App.get("/contact",middlewareTwo,(req,res) => {
    res.send("dsfd");
})

App.get("/link",middlewareOne,(req,res) => {
    res.send("B");
})


App.listen('5000',(req,res)=>{
    console.log(req)
})