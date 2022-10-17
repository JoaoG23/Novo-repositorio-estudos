// ano/salario   produto
//   135    x      10
//   1045           x

let inputValor = document.getElementById("antigo_valor");
let inputAno = document.getElementById("ano");
let inputProduto = document.getElementById("nome_produto");
let resultado = document.getElementById("resultado");


function calc(){
    let real = inputValor.value;
    let ano = inputAno.value;
    let nomeP = inputProduto.value;
    let SalAtual = 1045;

    let calcResul = ((real * SalAtual) /ano );

    console.log(calcResul)
    resultado.innerHTML = `<p>O valor do seu(a) ${nomeP}</p>`
    resultado.innerHTML+= `<p> Seria HOJE! ${Math.round(calcResul)} R$ Reais</p>`
}