const express = require('express');
const { send } = require('process');
const router = express.Router();
const linkController = require("../controllers/LinkControllers");

router.get("/", linkController.allLinks); // Se fosse por baixo do Titulo ele ira dar erro. /add , all acima das demais rotas antes da /:titulo
router.get('/:titulo', linkController.redirect);// OBS se criar uma Rota /all
router.get("/add", ( req , resp ) => { resp.render('add',{ error:false ,body:{}})});
router.get('/edit/:id' , linkController.loadLink); // Ir ao DB e pegar o link
router.post("/" , express.urlencoded({extended:true}),linkController.addLink);
router.post("/edit/:id" , express.urlencoded({extended:true}),linkController.editLink);

router.delete("/:id", linkController.deleteLink);
router.delete("/", express.json(), linkController.deleteLink);
// Acima esta como se faz delete com Body

module.exports = router;