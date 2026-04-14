// controllers/viajesController.js

exports.obtenerViajes = (req, res) => {
    const viajes = [
        { id: 1, destino: "Santiago", precio: 45000 },
        { id: 2, destino: "Valparaíso", precio: 35000 },
        { id: 3, destino: "Punta Arenas", precio: 120000 },
        { id: 4, destino: "Osorno", precio: 60000 }
    ];

    res.json({
        message: "Acceso autorizado. Lista de viajes:",
        usuario: req.user.usuario,
        rol: req.user.rol,
        viajes
    });
};
