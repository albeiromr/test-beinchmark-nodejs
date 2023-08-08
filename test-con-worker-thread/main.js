const { Worker, isMainThread } = require('worker_threads');
const express = require('express');
app = express()

// Ruta de inicio
app.get('/bloqueante', (req, res) => {

    if (isMainThread) {
        const worker = new Worker('./worker.js');

        worker.on('message', message => {
            res.send(`Resultado bloqueante: ${message}`);
            //console.log(`Resultado del hilo secundario: ${message}`);
        });

        worker.postMessage({ limit: 2_000_000_000 });
    }

});

app.get('/bloqueante-2', (req, res) => {

    if (isMainThread) {
        const worker = new Worker('./worker.js');

        worker.on('message', message => {
            res.send(`Resultado bloqueante: ${message}`);
            //console.log(`Resultado del hilo secundario: ${message}`);
        });

        worker.postMessage({ limit: 2_000_000_000 });
    }

});

app.get('/no-bloqueante', (req, res) => {

    res.send('Resultado no bloqueante');

});

app.get('/no-bloqueante-2', (req, res) => {

    res.send('Resultado no bloqueante');

});

// Iniciar el servidor
app.listen("9090", () => {
    console.log(`Servidor escuchando en el puerto 9090`);
});



