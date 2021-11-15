const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));


app.get('/cortes', (req, res) => {
    res.send(console.log("teste"));
});

