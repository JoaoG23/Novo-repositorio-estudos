
const User = require('../models/User');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { registerValidate , loginValidate } = require('./validate');

const userController = {

    register: async function( req , resp ){

        // Validação do Joi 
        
        const {error} = registerValidate(req.body);
        if (error) { return resp.status(400).send(error.message); }
        
        const selectedUser = await User.findOne({email:req.body.email});
        
        // Verificando de o Usuário já existe no banco. 
        if (selectedUser) {
            return resp.status(400).send(" The email already exists");
        }
        
        const user = new User({
            name:req.body.name,
            email:req.body.email,
            password: bcrypt.hashSync(req.body.password) // Encriptar senha antes de chegar ao banco
        });
        
        try {
            const savedUser = await user.save();
            resp.send(savedUser);
        } catch (error) {
            resp.status(400).send(error); // Status = avisa para o front end que houver um erro 
        }
    },


    

    login: async function( req , resp ){

        const {error} = loginValidate(req.body);
        if (error) { return resp.status(400).send(error.message); }

        const selectedUser = await User.findOne({email:req.body.email}); // Acha usuario pelo email
        if (!selectedUser){ return resp.status(400).send(" The email or Password incorrect")};

        const senhaEuserMatch = bcrypt.compareSync(req.body.password, selectedUser.password); // Compara se e falso ou verdadeiro a senha
        if(!senhaEuserMatch){
            return resp.status(400).send(" The email or Password incorrect");
        }

        const token = jwt.sign({_id:selectedUser._id , admin: selectedUser.admin }, process.env.TOKEN_SECRET); // Gera token segredo

        // TOKEN em header = chave + valor
        resp.header('authorization-token', token); // Inserer no cabecalho
        resp.send(" User Logged !");
        console.log('User Logged !');
        
    }

}

module.exports = userController;