import express from 'express';
import 'dotenv/config';
import { router } from './routes';

const server = express(); //instancia do servidor

server.use(express.json()); 

server.use(router); //servidor faz uso das rotas que criamos na pasta routes

export {server};