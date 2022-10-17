//1- Operadores Aritiméticos
/*var num1;
var num2;
var soma;

num1 = 30;
num2 = 15;
soma = num1%num2;

num1++; // para somar nun1 + 1

var a = 10;
var b = ++a; //Observe a ordem da operações na folha!

console.log(b);*/


//2- Atribuições
/*var alu = 30

alu %= 5;

console.log(alu);*/

//3- Operadores Comparativos
/* == igual a
=== valor igual e (igual no tipo variávrl)
!= não é igual
!== não igual e no (tipo variavel)
> maior que
< menor que
> = maior que ou igual a
< = menor ou igual a */

//var a = 2;
//var b = 4;

//console.log(a < b);

//4- Ope. lógico

/*&& e
|| ou
negativos 
*/

/*var idade = 35

var maior30 = idade >30;
var menor30 = !maior30;

console.log("Maior que 30 ",maior30)
console.log("Menor que 30 ",menor30)*/

// 5-String

/*var numero = "88" * 2;
var str ="Valor Qualquer";
//str += " Outro Texto ";
console.log(str);
console.log(numero);*/

//6-ParseInt

/*var a ="7.5";
var b = "5";

var c = parseFloat(a) + parseInt(b)
console.log(c);*/

//7-Alert e Prompt

//alert("Bom Dia João");
/*var num = parseInt(prompt(" Digite um Número !"))
var dobro = num + num
alert(" O dobro de " + num + " é "+ dobro)*/


//8- Estrutuar condicional
/*var quant = "150";
var capacid = "500";

var ind = parseFloat(quant)/parseFloat(capacid);
var soma =
 console.log(ind);

if (ind > 0.1 && ind <= 0.3 )
console.log("Critíco");

else if (ind >=0.4  && ind <=0.5)
console.log("Hora de fazer compras");

else if (ind >=0.5 && ind <=0.8)
console.log("Estoque Bom");

else if (ind>= 1)
console.log("No LIMITE");*/

//9- Operador Ternário-------------------------------------

/*var idade = 17
var pode = idade>=18 ? "pode": "Não pode"
console.log(pode)*/

// 10- Aluno----------------------------------------------

/*var nota1 = 100;
var nota2 = 100;
var media = (nota1+nota2)/2;
var conceito;

if (media < 200){
    conceito = "Ruim";
}else if (media >= 200 && media <=500){
    conceito = "Regular";
}else if (media > 500 && media <=700){
    conceito = "Bom";
}else if (media > 700 && media <=1000){
    conceito = "Excelente";}
else
    conceito = "Erro";

    conceito = "Tao ruim"

    {console.log(conceito)
    console.log(media)}
    
    switch (conceito){
        case  "Ruim":
            console.log("Você não tem futuro!VAGABUNDO!");
        break;

        case "Regular":
            console.log("Ah PESTE precisa estudar mais né");
        break;

        case "Bom":
            console.log("Bom aluno continue assim você ficar supreendido consigo mesmo");
        break;

        case "Excelente":
            console.log("Você brilhou meu caro atingindo o 100%");
        break;

        default:
            console.log("Erro de Digitação");
        
    }
*/

//-11 Repetições-----------------------------------

/*var num = 5;

for (var cont = 0; cont < num; cont++){
    console.log("Execultando For " + cont +" Vez ")
}
console.log("Acabou");*/

/*var num2 = 5;
while (num2 < 10){
    console.log("Número "+num2)
    num2++;

}
console.log("Acabou")*/

//-12 Arrays

//var aluno = new Array("João","Maria","Borges","net");

// let alunos = [
//                 {nome:"Elsa", nota:90},
//                 {nome:"Lorenso", nota:142},
//                 {nome:"Camila", nota:45},
//                 {nome:"Jorge", nota:21}
//             ];
//console.log(alunos.length);

// for ( var cont = 0; cont < alunos.length; cont++){
// console.log(alunos[cont]);
// }

// for(var cont in alunos){ //um contador dentro de alunos
//     console.log(cont);
// }
// for (var cont of alunos){//Pega a variável dentro deleou seja o nome dos alunos dentro do vetor!
//     console.log(cont);
// }


// 13 - Funções

// function media(n1,n2){
// var nota1 = n1; 
// var nota2 = n2;
// var media = (nota1 + nota2) / 2;
// return media;

// }
// var resul1 = media(6,8);
// var resul2 = media(5,8);

// console.log(resul1 +" E "+ resul2);

/*var prova = function(n1,n2){
    return (n1 + n2) /2;
}

var p = prova(678,400);

console.log("Sua media é " + p);

if (p > 500 && p  <= 600){
    console.log("Aprovado");
}else{
    console.log(" Reprovado");
}
*/

//Programa de notas Escola JAVALI CANSADO
/*var nome_aluno = ["Carlos M", "José Campos", "Maihra Teudósio"];
var notaA = [100, 80, 80];
var notaB = [78, 50, 80];
var notaC = [32, 50, 41];
var notaD = [25, 19, 33];

function media(n1, n2, n3, n4) {
    return (n1 + n2 + n3 + n4) / 4
}
function aprov(media){
    if (media > 50){
        return "Aprovado";
    }else{
        return "Reprovado";
    }
}

for(var index in nome_aluno){

}*/

//exercices
/*var num1 = 20

for( cont = 0; cont < num1; cont++ ){
    console.log(cont)
}
console.log("Terminou")*/
// var cont = parseInt(prompt("Qual o numero"))
// while(cont < 150){
//     cont++;
//     console.log(cont);
// }
//Exercício 1.2
//Faça um programa que leia 3 números e exiba-os na tela.
/*var index = 1

while(index < 2){
    index++;
    num1 = prompt("Escreva o "+index+" Numero ?");
    num2 = prompt("Escreva o "+index+" Numero ?");
    num3 = prompt("Escreva o "+index+" Numero ?");

}
var arr = [num1,num2,num3]
console.log(arr);*/
/*not1 = parseInt(prompt("Qual valor?"));
not2 = parseInt(prompt("Qual valor?"))
not3 = parseInt(prompt("Qual valor?"))

function soma(no1,no2,no3){
    n1 = no1;
    n2 = no2;
    n3 = no3;
     s = n1+n2+n3;
    console.log("Os Número digitados são "+n1+"-"+n2+"-"+n3);
    console.log("O resultado da soma é  "+s)
}
soma(not1,not2,not3);*/
//Exercices number 2
//faça um senso de pessoas/separes so as que tem ano = 18 e cor negra / e tem sexo feminino

/*alert("HOSPITAL VACINA ")
var num = prompt("Quantas pessoas que analisar ?");
nome =[];
febre = [];
tosse = [];
cansaço = [];
var positivo = 0;
var negativo = 0;


for( var i = 0; i < num; i++){
    alert(" Olá Sou PROGRAMA IMUNOLOGICO DOUTRO COVID! É volte analisar agora! OK?!");
    alert(" ---- Instruções ---- "+" --As resposta da Tela deverão ser (sim ou não)"+"--Sem Letra Maiusculas e sem espaços--"+" --Só isso! Prepare os seus dedos e VAMOS LÁ!");

    nome[i] = prompt("Qual o seu nome ?");
    febre[i] = prompt("Você Sente Febre");
    tosse[i] = prompt(" Tosse Com frequência é ela e Seca?");
    cansaço[i] = prompt(" Se sente Cançado demais?");

    if (febre == "sim" && tosse == "sim" && cansaço == "sim"){
        positivo++;
        console.log("Você está com COVID");
    }else{
        negativo++;
        console.log("Você não tem essa doença!");
    }
}
{
console.log("O Numero de pessoa Com COVID é " + positivo);
console.log("O Numero de sem a doença é  " + negativo);
}*/

/*alert("Bem Vindo ao = Analise Fundamentalista v1.0");
alert(" Agora você irá digitar os indicadores conforme pedido e logo iremos analisar");
alert(" Os critérios são 3 ! Perigoso ! ! Regular ! ! Vale a pena tentar !");

var num = prompt(" Quantas ações você que analisar 1 ou 2 ou ...?");
var indicador = 0;
var selic = prompt(" Quanto está a selic hoje ?") / 100;
var melhor_acao;

PL = [];
PVP = [];
LPA = [];
VPA = [];
Marg_EBIT = [];
Marg_Liquida = [];
ROIC = [];
ROE = [];
Liquidez_Corr = [];
DivBr_Patrim = [];
PEBIT = [];
Div_Yield = [];
EV_EBIT = [];
Cres_rec_5 = [];

for (ind = 0; ind < num; ind++) {
    PL[ind] = prompt("Qual o P/L ?");
    PVP[ind] = prompt("Qual P/VP ?");
    LPA[ind] = prompt("Qual LPA ?");
    VPA[ind] = prompt("Qual a VPA ?");
    Marg_EBIT[ind] = prompt("Qual a margem EBIT ?");
    Marg_Liquida[ind] = prompt("Qual a margem Líquida ?");
    ROIC[ind] = prompt("Qual o ROIC ?");
    ROE[ind] = prompt(" Qual o ROE ?");
    Liquidez_Corr[ind] = prompt("Qual é Liquidez Corrente");
    DivBr_Patrim[ind] = prompt("Qual é Divida Bruta /Patrimônio ?");
    PEBIT[ind] = prompt(" Qual o P/Ebit ?");
    Div_Yield[ind] = prompt("Qual o Dividend yield ?");
    EV_EBIT[ind] = prompt(" Qual o EV/EBIT ?");
    Cres_rec_5[ind] = prompt("Quanto a receita cresceu nos últimos 5 Anos ?");




    if (PL > selic || LPA > 2 || PVP > 2 || VPA > 4) {
        indicador++;
    } else if (Marg_EBIT > 0 && Marg_EBIT < 5) {
        indicador++;
    } else if (Marg_Liquida > 10 && ROIC > 10 && ROE > 10) {
        indicador++;
    } else if (Liquidez_Corr < 0.8 && DivBr_Patrim >= 0.5) {
        indicador++;
    } else if (PEBIT < 5 || Div_Yield > 8) {
        indicador++;
    } else if (EV_EBIT < 10 && Cres_rec_5 >= 2) {
        indicador++;
    } else {
        alert("")
    }
    console.log("Sua pontuação foi de: " + indicador);

}
{
    console.log(PL)
    console.log(PVP)
    console.log(LPA)
    console.log(VPA)
    console.log(Marg_EBIT)
    console.log(Marg_Liquida)
    console.log(ROIC)
    console.log(ROE)
    console.log(Liquidez_Corr)
    console.log(DivBr_Patrim)
    console.log(PEBIT)
    console.log(Div_Yield)
    console.log(EV_EBIT)
    console.log(Cres_rec_5)
}
*/
// 14 - Objetos propriedades
/*var aluno  = {
    nome:"Calebe",
    nota:20
}*/
/*console.log(aluno.nota) // Para indentifica o objeto que esta dentro de nome!
var aluno = {
    nome:"Jorge",
    nota:10 
}
console.log(aluno["nome"]);*/

/*var aluno ={
    nome:"Camilo",
    notas:[7.6,10]
}
console.log(aluno)// Para mostra somente as notas na tela!(aluno.notas[0])
var NovProp = "LastName";

aluno.matricula = 102;
aluno.NovProp = ["Chavantes"]; //Para adcioonar coisas fora das chaves ! */

/*function porcent_estoque(q1,c1){
    return(q1 / c1)
}
var quant_estoque = {
    iten:"Tijolos",
    quant_capacidade:[150,340]
} 

console.log(quant_estoque.iten);
console.log(porcent_estoque(quant_estoque.quant_capacidade[0],quant_estoque.quant_capacidade[1]));*/

/*function conceito_media(){
    return(this.notas[0]+this.notas[1]+ this.notas[2]+this.notas[3])/4
}

var alunos1 = {
    nomes:"José Armando",
    notas:[89,25,30,70],
    media:conceito_media
}
var alunos2 = {
    nomes:"Maria Rosangela Rossi",
    notas:[90,10,35,20],
    media:conceito_media
}


console.log(alunos1.nomes);
console.log(alunos1.media());

console.log(alunos2.nomes);
console.log(alunos2.media())*/



/*var produto = {
    nome:"Tablets",
    tamanho_in:[10,7],
    quant_cap:[80,120],
    por: function(){
        return(this.quant_cap[0] / this.quant_cap[1])  
    }

}
console.log(produto.nome);
console.log(produto.tamanho_in);
console.log(produto.por());
//console.log(produto.por(produto.quant_cap[0],produto.quant_cap[1]));*/

//16- Objetos/Construtores
// A Primeira maneira de instancia um Objeto é :
// function CriarAluno(n, n1, n2) {
//     return {
//         nome: n,
//         nota1: n1,
//         nota2: n2,
//         media: function(){
//             return(this.nota1 + this.nota2) /2
//         }
//     }

// }

// var turma1 = [
//     CriarAluno("Igor Santos",78,54),
//     CriarAluno("Camisa de Paula Ramos",56,90),
//     CriarAluno("Maria Tencheira",50,23),
//     CriarAluno("Jorge Ramos Lemos",21,34)
// ]
// var aluno = turma1[1];

// console.log(aluno);
// console.log(aluno.media());

// turma1.forEach(function(elemento){
//     console.log(elemento);
//     console.log(aluno.media())
// })

// for(var aluno of turma1){
//     console.log(aluno.nome + " - " + aluno.media());
// }
//Segunda Maneira de Instancia um Objeto criar um objeto como variavel

// function aluno(nome, n1, n2) {
//     this.nome = nome;
//     this.nota1 = n1;
//     this.nota2 = n2;

//     this.media = function () {
//         return (this.nota1 + this.nota2) / 2
//     }
// }

// var a = new aluno("Jorge Santos Gama", 56, 98);
// var b = new aluno("Carlos Machado", 76, 90);
// console.log(b)
// console.log(b.media())

// //- Exercicio Criando uma lista de Estoque //
// function add_produto (nome,peso,valor,quant){
//     return{
//         nome:nome,
//         peso:peso,
//         valor:valor,
//         quant:quant,
//         cap:function(){
//             return(quant/1500)
//         }
//     }
// }
// let estoque = [
//     add_produto("Tablets",0.5,156.50,1200),
//     add_produto("Smartphone",0.5,120.50,670),
//     add_produto("Iphone",0.5,200.50,34),
//     add_produto("Headphone",0.5,90.50,130),
// ];

// let lista = document.getElementById("listas");
// console.log(lista);
// estoque.forEach(function(produto){
    
// });
// var lo = estoque;

// for(lo of estoque){
//     // console.log("O seu estoque é de "+ lo + " " +lo.cap())
//     console.log(lo)
//     console.log(lo.cap())
// }

// function jogador(nome,pts){
//     this.nome = nome,
//     this.pts = pts,
//     this.cot = function(){
//         return (pts *10)
//     }
// }

// var a = new jogador("jose",5.6)
// var b = new jogador("Bastião",7)

//-17 The date 

// var tempo = new Date(2019,11,21);
// var tempo = new Date("sep 07 2024 17:30");

// console.log(tempo.getFullYear());


// 18 - Var , Let , const
// var num1 = 6;
// let num2 = 5;
// const num3 = 34; 

// num3 = 32 //Uma constrante não recebe numero outra variável //push) para por um novo numero em um array

// console.log(num1);
// console.log(num2);
// console.log(num3);

//var e uma variável global Acessivel a qualquer canto Código 
//let somente dentro de um escopo local![]

/* Javascript Intermediário 


Tudo dentro do console é um objeto, então tags (document) são validas para o regitro.

doc.ElementsbyID(Acessar pelo console o o Que esta dentro do ID colocado entre aspas "")

doc.ElementsbyClassName(Acessar pelo console o o Que esta dentro das classes colocado entre aspas "")

doc.ElementsbyTagName(Acessar pelo console o o Que esta dentro das classes colocado entre aspas "")

let doc = document(atribução feita de pela variavel)

innerHTML(Modifica o texto dentro desse textos)*/



