/* 
    Rutas de Usuario / Auth
    host + /api/auth
*/

const express = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/authController')
const { validarJWT } = require('../middlewares/validar-jwt')

const router = express.Router();


router.post('/new',
    [ // middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', "El email es obligatorio").isEmail(),
        // check('password', 'El password es obligatorio').not().isEmpty(),
        check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario);

router.post('/',
    [ // middlewares
        check('email', "El email es obligatorio").isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario);

router.get('/renew', validarJWT, revalidarToken);


module.exports = router;