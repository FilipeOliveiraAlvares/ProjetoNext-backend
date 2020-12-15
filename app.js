var express = require('express');
const mongoose = require('mongoose');


require('./models/home');
const Home = mongoose.model('Home');

var app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/backenddb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Conexao com MongDB ok.");
    }).catch((erro) => {
        console.log("erro: conexão com MongoDB não realizada." + erro);
    });

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

app.get("/home", (req, res) => {
    return res.json({
        error: false,
        mensage: "info pg home"
    });
});

app.post("/home", (req, res) => {
    Home.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Conteudo da página home não cadastrado com sucesso!"
        })
    })
    return res.json({
        error: false,
        message: "Conteudo da página home cadastrado com sucesso!"
    })
});

app.listen(8081, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8081")
});