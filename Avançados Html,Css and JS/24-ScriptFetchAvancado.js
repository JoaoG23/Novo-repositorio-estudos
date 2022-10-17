const inicializacao = () =>{
    console.log("Carregando ...");
    
    let inputLogin = document.getElementById("login");
    let inputSenha = document.getElementById("senha");
    let botaoLogar = document.querySelector("#logar");
    let url = 'https://reqres.in/api/login';


    if(botaoLogar){
        botaoLogar.addEventListener('click', (event) => {
            event.preventDefault();

            fetch(url ,
                {
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: inputLogin.value,
                        password: inputSenha.value,
                    })
                }).then((resposta)=>{
                    return resposta.json();
                }).then((dados)=>{
                    console.log(dados);
                    if(email == "admin" && password == "admin"){
                        exibirInterface();
                    } else if( email == "" && password == ""){
                        alert("Erro voce não digitou nada!");
                    } else {
                        alert("Errro Generico !");
                    }
                    
                })
        })
    }

    function exibirInterface(){
        alert("Usuario Validado Com sucesso!!");
        window.location.replace("./2_iframe.html");
    }
}

window.onload = inicializacao;
