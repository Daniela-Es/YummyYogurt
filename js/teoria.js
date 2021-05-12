// date regresa arreglos: dias y meses
// diccionario codigo <--> usuario
/*//array es un conjunto de daot tanto primitiovs ocmo complejos

//obj = {}
//array = []
//IMPORTANTE los arreglos incian en el indice 0
var meses = ['Enero', 'Feb', 'marzo', 'abril'];

var dia = ['dom', 'lun', 'martes'];

var edad = [1, 2, 3, 4, 5, 6];

var persons = [
  { nombre: 'carlos', edad: 30 },
  { nombre: 'juan', edad: 50 },
  { nombre: 'angela', edad: 20 },
  { nombre: 'montse', edad: 40 },
];

//acceder al arreglo p0r medio del indice ocupamos [] corchetes seguido del nombre del arreglo sin espacio y entro del corchete indicamos el indice al que queremos apuntar
console.log(persons[3]);

//notación de punto par objetos 

console.log(persons[3].edad); */

console.log('app');

let productos = ['yogurt mango','yogurt fresa', 'yogurt manzana', 'yogurt pinia coco', 'yogurt natural' ];

//recuperar un elemento del array
let producto = productos[2];
console.log(producto);

//ciclos for, while, do while, foreach, forin, forof...

//iteracion es una accion de principio a fin, del punto x al punto y o de 0 a 100

// for (para) 
//sintaxis: necesita de 3 parametros separados por un punto y coma ; para funcionar

//1- inicializar un contador o variable 
//2- fijar un limite de repeticiones (uso de operadores logicos < > <= >= ==)
//3- incremento x=x+1, x++ 

// for (let a = 0; a < 70; a++) {
//     //instrucciones
//     console.log('usuario',(a+1));
    
// }

// para cada a empezando en cero, y menor que 7000, imprime el mensaje y aumenta 1 al contador

// for para recorrer el arreglo de productos

for (let indice = 0; indice < productos.length; indice++) {
    let producto = productos[indice];
    console.log(producto);
}




