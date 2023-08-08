const { foo } = require('./function');
const express = require('express');
app = express()


app.get('/bloqueante', (req, res) => {
    const result = foo(2_000_000_000);
    res.send(`Resultado bloqueante: ${result}`);
});

app.get('/bloqueante-2', (req, res) => {
    const result = foo(2_000_000_000);
    res.send(`Resultado bloqueante: ${result}`);
});

app.get('/no-bloqueante', (req, res) => {
    res.send('Resultado no bloqueante');
});

app.get('/no-bloqueante-2', (req, res) => {
    res.send('Resultado no bloqueante');
});

app.listen("9091", () => {
    console.log(`Servidor escuchando en el puerto 9091`);
});



