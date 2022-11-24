//Carne 600gr por pessoa + 6hs 850 gr
//Cerveja 1200 ml por pessoa + 6 hs 2000 ml
//refrigerante/agua = 1000ml por pessoas + 6 hs 1500ml

//Crianças Valen por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas =  document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

// declarou variaveis

function calcular(){
    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao)/2 * criancas);


    console.log(qtdTotalCarne);
    console.log(qtdTotalCerveja);
    console.log(qtdTotalBebida);

    resultado.innerHTML =  `<p>${Math.ceil(qtdTotalCarne / 1000)} Kgs de Carne</p>`
    resultado.innerHTML +=  `<p>${Math.ceil(qtdTotalCerveja /355)}  Latas de Cervejas</p>`
    resultado.innerHTML +=  `<p>${Math.ceil(qtdTotalBebida /2000)} Garrafa de Refrigerante</p>`
}
function carnePP(duracao){

    if (duracao >= 6){
        return 850;
    } else {
        return 600;
    }
}
function cervejaPP(duracao){

    if (duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}
function bebidaPP(duracao){

    if (duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}