const itensMenu = [
    { nome:'Inicio', url: 'index.html' },
    {nome: 'Sobre', url: 'sobre.html' },
    {nome: 'Contato', url: 'contato.html'}
]

function Menuitens (){
    
   
    const body = document.querySelector('body')
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    nav.appendChild(ul);
    header.appendChild(nav);
    header.appendChild(body);

    return itensMenu;
}


    function adicionarItensMenu(itensMenu) {
        const itensMenu = document.querySelector('ul');
        itensMenu.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = item.texto.toUpperCase();
            a.href = item.url;
            a.style.textDecoration = 'none';
            a.style.color = 'white';
            li.appendChild(a);
        listaNavegacao.appendChild(li);
    });
}
function estilizarElementos() {
    const cabecalho = document.querySelector('header');
    cabecalho.style.backgroundColor = '#071D41';
    cabecalho.style.fontFamily = 'Arial';
    const listaNaoOrdenada = document.querySelector('ul');
    listaNaoOrdenada.style.height = '40px';
    listaNaoOrdenada.style.display = 'flex';
    listaNaoOrdenada.style.justifyContent = 'center';
    listaNaoOrdenada.style.alignItems = 'center';
    listaNaoOrdenada.style.gap = '20px';
    listaNaoOrdenada.style.listStyleType = 'none';
}
