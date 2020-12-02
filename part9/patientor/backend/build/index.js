"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const diagnoseRouter_1 = __importDefault(require("./router/diagnoseRouter"));
const app = express_1.default();
app.use(cors_1.default());
app.get('/api/ping', (_req, res) => {
    console.log('someone pinged');
    res.send('pong');
});
app.use('/api/diagnose', diagnoseRouter_1.default);
app.listen(3001)
    .on('listening', () => {
    console.log('server has started in port 3001');
})
    .on('error', (err) => {
    console.log('An error occured', err.message);
});
