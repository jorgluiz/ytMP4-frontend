const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
dotenv.config()

// Servir os arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
