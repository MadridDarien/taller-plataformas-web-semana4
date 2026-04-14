const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 3000;

require("dotenv").config(); // leer variables de entorno

// Middlewares globales
app.use(express.json());
app.use(cookieParser()); // <-- NECESARIO para leer cookies

// Rutas antiguas (las de tu compañero)
const rutas = require('./routes');
app.use('/', rutas);

// Rutas nuevas de autenticación
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
