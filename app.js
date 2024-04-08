const express = require('express');
const app = express();
const port = 3000;

app.get('/' , ( req,res ) => {
    res.send("olá, mundo")
});

app.get(port , (req,res) => {
    console.log(`Conectado na porta ${port}`)
});