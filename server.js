const express = require('express');
const conectDb = require('./database');
const routes = require("./routes");

const app = express();
const port = 3000;

conectDb();
app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Conectado na porta ${port}`);
});

