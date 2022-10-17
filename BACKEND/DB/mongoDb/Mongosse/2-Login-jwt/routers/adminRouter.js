const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');

router.get('/', auth ,( req, resp) => {

    if (req.user.admin) {
        
        resp.send('Essses Dados somente visto pelo admin');

    } else {
    
        resp.status(401).send('Not admin: Acesso Negado');
    }

});

router.get('/free', auth , (req , resp) =>{

    resp.send('Essses Dados somente visto por Que passar na rota FREE Logado !!');// Mais não e admin
});

module.exports = router;