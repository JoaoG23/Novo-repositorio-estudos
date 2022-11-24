// 1 Dolar Vale 5,15 Reais

let inputReais = document.getElementById("real");

let resultado = document.getElementById("resultado")

function converter(){
    let reais = inputReais.value;
    let dolar = 5.15;

    let totConvert = (reais * dolar);
    console.log(totConvert);

    resultado.innerHTML += `<p> Você Receberá</p>`
    resultado.innerHTML = `<p>${Math.round(totConvert)} <img src=""> R$ Reais</p>`
    
}