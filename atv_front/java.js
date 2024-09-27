const itensMenu = [
    { nome: 'Início', url: 'index.html' },
    { nome: 'Sobre', url: 'sobre.html' },
    { nome: 'Contato', url: 'contato.html' }
];

function criarMenu() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    nav.appendChild(ul);
    header.appendChild(nav);
    document.body.prepend(header);

    adicionarItensMenu(ul);
}

function adicionarItensMenu(lista) {
    itensMenu.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.nome;
        a.href = item.url;

        li.appendChild(a);
        lista.appendChild(li);
    });
}

criarMenu();
