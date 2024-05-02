import express from 'express';

const server = express(); //instancia do servidor

server.get('/', (req, res) => {
    return res.send('Olá, dev!');
});

export {server};