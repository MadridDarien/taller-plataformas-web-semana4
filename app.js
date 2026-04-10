const express = require('express');
const app = express();
const PORT = 3000;

const rutas = require('./routes');

app.use(express.json());

app.use('/', rutas);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
