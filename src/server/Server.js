"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const routes_1 = require("./routes");
const server = (0, express_1.default)(); //instancia do servidor
exports.server = server;
server.use(express_1.default.json());
server.use(routes_1.router); //servidor faz uso das rotas que criamos na pasta routes
