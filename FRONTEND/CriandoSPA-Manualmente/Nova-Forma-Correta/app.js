const roteamento = (evento) => {

    evento = evento || window.evento;
    evento.preventDefault();
    window.history.pushState({}, " ", evento.target.href);
    handleLocation();
};

const rotas = {
    
    404: "/pages/404.html",
    "/": "/pages/index.html",
    "/about": "/pages/about.html",
    "/lorem": "/pages/lorem.html",
};

const handleLocation = async () => {
  
    const caminho = window.location.pathname;
    const rota = rotas[caminho] || rotas[404];
    const html = await fetch(rota).then( (data) => data.text() );

    document.getElementById('main-page').innerHTML = html;
    
};

window.onpopstate = handleLocation;
window.route = roteamento;

handleLocation(); 