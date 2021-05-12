let productos = [
    {
        id: "1",
        nombre: "Mango",
        precio: 20,
        descripcion: "aqui va la descripcion xd",
        imgURL: 'https://image.freepik.com/vector-gratis/mangos-estilo-realista_23-2147627882.jpg'

    },
    {
        id: "2",
        nombre: "Manzana",
        precio: 18,
        descripcion: "Delicioso yogurt de manzana roja con trocitos de fruta fresca y fresca.",
        imgURL: 'https://img.freepik.com/foto-gratis/manzanas-mesa_144627-6746.jpg?size=338&ext=jpg'

    },
    {
        id: "3",
        nombre: "Natural",
        precio: 30,
        descripcion: "Este yogurt natural casero es ideal para que le pongas tu fruta favorita para el postre despues de la comida o para que te prepares para tu entrenamiento. Aniade unas nueces para mejorar su sabor y tu rendimiento",
        imgURL: 'https://image.freepik.com/vector-gratis/publicidad-realista-yogurt-taza-plastico-marca-yogurt-natural-cuchara-texto-editable-ilustracion-vectorial_1284-30212.jpg'

    },
    {
        id: "4",
        nombre: "Fresa",
        precio: 30,
        descripcion: "Un desayuno nutritivo no puede estar completo sin yogurt, aporta cantidades considerables de calcio necesario para el buen funcionamiento de los huesos, tiene trozos de fresa natural. Presentación familiar de 1 kilo",
        imgURL: "https://image.freepik.com/foto-gratis/fresa-aislada-fondo-blanco_1232-1974.jpg"

    },
    {
        id: '5',
        nombre: 'piña coco',
        Precio: 20,
        descripcion:
            'Yogurt griego con frutilla de piña y coco en cubos, listo para tu paladar, cero azúcar sin conservadores',
        imgURL:
            'https://image.freepik.com/foto-gratis/fresca-textura-vitamina-fruta-cruda_1172-220.jpg'
    }
];

// console.log(productos);

// console.log(contenedorProductos);

// for (let index = 0; index < productos.length; index++) {
    //     console.log(productos[index].nombre);
    
    //     const element = productos[index];
    //     let producto = document.createElement('p');
    //     producto.innerHTML = element.nombre;
    
    //     console.log(producto);
    
    //     contenedorProductos.appendChild(producto);
    // }
    
let contenedorProductos = document.querySelector('#main');

for (let index = 0; index < productos.length; index++) {
    const producto = productos[index];
    console.log(producto);
    let card = `
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    `
}




