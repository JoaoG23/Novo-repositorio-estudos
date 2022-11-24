// let image = document.getElementById("change");

// image.addEventListener("click", function(){
//     image.setAttribute("src","./img/tools.webp")
// })


let lista = document.getElementById("lista");

let num = parseInt( lista.getAttribute("data-num"));

lista.dataset.num = "3";

let conteudo =""
for ( let i = 0 ; i < num; i++){
    conteudo += "<li>" + i + "</li>";
}

lista.innerHTML = conteudo;