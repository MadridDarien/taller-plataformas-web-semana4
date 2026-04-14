const jwt = require("jsonwebtoken");
const users = require("./users");

// LOGIN
exports.login = (req, res) => {
    const { usuario, password } = req.body;

    // Buscar usuario en el arreglo
    const user = users.find(u => u.usuario === usuario && u.password === password);

    if (!user) {
        return res.status(401).json({ message: "Credenciales incorrectas. No autorizado." });
    }

    // Crear payload del JWT
    const payload = {
        id: user.id,
        usuario: user.usuario,
        rol: user.rol
    };

    // Generar token
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h"
    });

    // Enviar cookie httpOnly
    res.cookie("token", token, {
        httpOnly: true,
        secure: false, // cambiar a true si usas HTTPS
        maxAge: 60 * 60 * 1000 // 1 hora
    });

    res.json({
        message: "Login exitoso",
        rol: user.rol
    });
};

// LOGOUT
exports.logout = (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Sesión cerrada correctamente" });
};
