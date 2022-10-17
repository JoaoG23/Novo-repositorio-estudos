// let dobro = function () { return 2 * n};
//Variavel com o argumento de uma função

// CallBack

// function ola(){
//     console.log("ola");
// }

// function tchau() {
//     console.log("Tchaw");
// }

// function saudacao(s,nome) {
//     s();// Callback 
//     console.log(nome);
// }

// saudacao(tchau,"joao");

// CallBack e quando Funcão com argumento de uma Funcão!
// Uma funcão dentro de uma Funcão! ou seja uma funcão como atributo

// let usuarios = ["Adriano","Marcia","joao"];

// function inserirUsuarios(nome,callback){
//     setTimeout(() => { 
//     usuarios.push(nome);
//     callback();
//     }, 1000);
// }

// function listUsuarios(){
//     console.log(usuarios);
// }

// inserirUsuarios("Jamiel Campos",listUsuarios);

// Atributo = o que a função recebe para processar.
//Ex: function(atributo)
//Propriedade o que esta dentro do objeto
//Ex: gama= { nome:GM, tamanho:60px}
//Metodos =  Construtores, são as funções que estao
//dentro objsto
//Ex: Salario = {nome:valor desconto:funcao(){ return:nome.valor * 10 /valor }}
let usuarios = ["Adriano","Marcia","joao"];
// Promise e igual o callback que recebe como argumento uma função
// Dentro da Promise ela tem 2 argumentos resolve,reject
function inserirUsuarios(nome) {
    
    let promise = new Promise(function(resolve,reject){

        setTimeout(() => { 
            usuarios.push(nome);
            

            let error = false;

            if (!error){
                resolve();
            } else {
                reject({msg: "Erro em algo esta bem"})
            }
        }, 1000);
    })
    return promise;
}

function listUsuarios(){
    console.log(usuarios);
}

async function execultar(){
    await inserirUsuarios("igor");
    listUsuarios();
}
execultar();