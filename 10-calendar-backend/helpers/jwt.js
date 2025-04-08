const { promisify } = require('util');
const jwt = require('jsonwebtoken');

// Convertir jwt.sign a una version basada en promesas
const signAsync = promisify(jwt.sign);

const generarJWT = async (uid, name) => {

    try {
        const payload = { uid, name };
        const claveSecreta = process.env.SECRET_JWT_SEED;
        const options = {
            expiresIn: '2h'
        }

        const token = await signAsync(payload, claveSecreta, options);

        console.log('Token generado: ', token);
        return token;

    } catch (errors) {
        console.log("Error al generar el token ", errors);
    }

}

module.exports = {
    generarJWT
}