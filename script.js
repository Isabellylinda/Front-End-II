// const titulo = document.querySelector('h1');
//const titulo = document.querySelectorAll('h1');
// console.log('innerHtml:', titulo.innerHTML)
// console.log('innerText:', titulo.innerText)
// console.log('textContent:', titulo.textContent)

// titulo.textContent = 'Meu novo parágrafo';


// const body = document.querySelector('body');
// const ancora = document.createElement('a');
// ancora.setAttribute('href','https://www.ifro.edu.br');
// ancora.setAttribute('target', '_blank');
// ancora.textContent = 'IFRO';
// ancora.style.color = '#f00';
// ancora.style.textDecoration = 'none';
// ancora.style.fontWeight = 'bold'


// titulo.remove();
// body.appendChild(ancora);
/*const body = document.querySelector('body');
const lista = document.createElement('ul');
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');
item1.textContent = 'item1';
item2.textContent = 'item2';
item3.textContent = 'item3';
lista.append(item1);
lista.append(item2);
lista.append(item3);
body.append(lista);/**/

const body = document.querySelector('body');
const p = document.createElement('p');
p.textContent = 'Meu parágrafo';
p.style.color = 'white';
body.style.backgroundColor = '#0000';
body.prepend(p);

