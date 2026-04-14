const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.cookies?.token;

    if (!token) {
        return res.status(401).json({ message: "No autorizado. Token no encontrado." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Guardamos los datos del usuario en req.user
        req.user = decoded;

        next(); // continuar a la ruta protegida
    } catch (error) {
        return res.status(401).json({ message: "Token inválido o expirado." });
    }
};
