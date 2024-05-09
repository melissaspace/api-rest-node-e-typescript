"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const controllers_1 = require ("./../controllers");

const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (_, res) => {
    return res.send('Olá, dev!');
});

router.post('/cidades', controllers_1.CidadesController.create);
/*router.post('/cidades', (req, res) => {
    console.log(req.params);
    return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json(req.body);
});*/
