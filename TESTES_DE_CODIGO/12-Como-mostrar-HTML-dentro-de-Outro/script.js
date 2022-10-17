
        const desmostrador = document.querySelector('[root]');
        const caminhoPaginas = document.querySelectorAll('[caminho]');

        caminhoPaginas.forEach(( botaoPagina ) => {

            botaoPagina.addEventListener('click', () => {
                let caminhoSelecionado = botaoPagina.getAttribute('caminho');
                incluirPaginas( caminhoSelecionado );
            });

        });

        const incluirPaginas = ( caminhoDaPagina ) =>{
           
                fetch(caminhoDaPagina)
                .then((resp) => resp.text())
                .then((dados) => {
    
                    desmostrador.innerHTML = dados;
                }).catch((erro) =>{
                    console.log(erro)
                });
        }

        // ---- Incluir Pagina inicial 

        incluirPaginas('./Pagina-1.html'); 
