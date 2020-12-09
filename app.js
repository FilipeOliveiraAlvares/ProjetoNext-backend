var express = require('express');
var app = express();

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

app.use("/home", (req, res) => {
    return res.json({
        error: false,
        mensage: "info pg home"
    });
});

app.listen(8081, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8081")
});