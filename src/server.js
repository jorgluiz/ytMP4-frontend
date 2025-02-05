const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const dotenv = require('dotenv');
dotenv.config()
const { io } = require('socket.io-client')

// Servir os arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Substitua pela URL gerada pelo Ngrok
// const socket = io('https://strongly-singular-moray.ngrok-free.app', {
//   reconnection: true,           // Habilita reconexão automática
//   reconnectionAttempts: 5,      // Número máximo de tentativas de reconexão
//   reconnectionDelay: 1000,      // Atraso entre tentativas de reconexão (em ms)
// });

// socket.on('connect', () => {
//   console.log('Conectado ao servidor WebSocket:', socket.id);
// });

// socket.on('progress', (data) => {
//   console.log(data.progress)
// })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running port web http://localhost:${PORT}`);
});
