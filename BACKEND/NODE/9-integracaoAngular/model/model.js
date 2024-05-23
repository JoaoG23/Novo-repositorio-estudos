
//*******Prototype of Databases********

module.exports =  {

     contatos : [
        { nome: "João Horta", telefone: "999992992" },
        { nome: "Ana Santana", telefone: "919992002" },
        { nome: "Maria Slsa", telefone: "999993492" },
        { nome: "Antônio José", telefone: "999993492" },
        { nome: "Gloria Do Santos", telefone: "32132133" },
    ],

    operadoras : [
        { nome: "Oi", codigo: "14" },
        { nome: "Vivo", codigo: "15" },
        { nome: "Tim", codigo: "41" }
    ],

    listaContatos(){
        return this.contatos;
    },

    listaOperadoras(){
        return this.operadoras;
    },

    adicionarContatos( nome , telefone ){
        this.contatos.push({ nome , telefone});
    },


}