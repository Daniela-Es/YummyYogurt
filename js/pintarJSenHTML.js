//DOM
// manipular el HTML
//selectores
// id , class, tagName
//document.getElementById()
let caja = document.getElementById('main');
/* let parrafo = document.querySelector('.prueba');
*parrafo.innerHTML = 'cambie el contenido';
*console.log(parrafo); */
/*
setTimeout(, 3000); */
//crear elemento (etiqeutas de HTML)

/* let hijo = document.createElement('p');
hijo.innerHTML = " contenido creado desde js ";
// hijo.setAttribute('style', 'background: purple; font-size: 40px');
hijo.style.background = 'purple';
hijo.style.fontSize = '40px';
//agregar o djuntar un hijo
caja.appendChild(hijo); */

//recuperar por id
let contenedor = document.getElementById('main');
//crear las etiquetas
//se llena con mas etiquetas creadas

let card = document.createElement('div');

//se lleva con template strings
let card2 = document.createElement('div');
let h3 = document.createElement('h3');
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let img = document.createElement('img');

//poner contenido
h3.innerHTML = 'nombre del producto';
p1.innerHTML = ' precio';
p2.innerHTML = 'descripción';

//estilos
card.classList.add('card');
card.classList.add('col-6');
card.classList.add('bg-dark');

//backstikcs template string js ecmascript6
card2.innerHTML = `

<div class="card" style="width: 18rem;">
        <img src=${'https://images.pexels.com/photos/7480003/pexels-photo-7480003.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} class="card-img-top" alt="...">
<div class="card-body">

<h5 class="card-title">Card title</h5>

<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

<a href="#" class="btn btn-primary">Go somewhere</a>

</div>

</div>

`;

//crear nodos o parentesco
contenedor.appendChild(card);
card.appendChild(h3);
card.appendChild(p1);
card.appendChild(p2);
contenedor.appendChild(card2);



