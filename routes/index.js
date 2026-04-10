const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Ruta principal funcionando');
});

router.post('/login', (req, res) => {
    const { usuario, password } = req.body;

    if (usuario === 'admin' && password === '1234') {
        res.send('Login correcto');
    } else {
        res.send('Credenciales incorrectas');
    }
});

module.exports = router;
