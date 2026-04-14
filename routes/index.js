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

router.get('/api/viajes', (req, res) => {
    const viajes = [
        { id: 1, destino: 'París', dias: 7 },
        { id: 2, destino: 'Puerto Montt', dias: 4 },
        { id: 3, destino: 'Nueva York', dias: 6 }
    ];

    res.json(viajes);
});

module.exports = router;
