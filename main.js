let frutas = ['banana', 'laranja', 'uva', 'mamão', 'abacaxi', 'melancia', 'melão', 'morango', 'manga'];
let mixto = ["Saul",true,24,1.70,{ciudad: "Ciudad de Mexico"}];
let numeros = Array(1,2,3,4,5,6,7,8,9,10);

//frutas = ["prera","uva",'coco'];
frutas.pop();
frutas.push('mango');
console.log(frutas[2]);

//frutas.forEach(fruta => console.log(fruta));
let mayores = numeros.filter(numero => numero >= 2.5);
let cuadrados = numeros.map(numero => numero * numero);

console.log(mayores);
console.log(cuadrados);

//metodos básicos
let fila = ['Pedro','Juan','Diego','Maria','Ana'];
fila.unshift('Saul');
console.log(fila);
fila.push('Luis');
console.log(fila);
console.log(fila.length);

//find
let decimales = [10,20,30,40,50,60,70,80,90,100];
let resultado = decimales.find(decimal => decimal > 50);
console.log(resultado);

let usuarios = [
    {id: 21, nombre: 'Saul', edad: 24},
    {id: 212, nombre: 'Juan', edad: 25},
    {id: 343, nombre: 'Maria', edad: 26},
    {id: 41, nombre: 'Ana', edad: 27}
]
let busqueda = usuarios.find(usuario => usuario.id === 212);
console.log(busqueda);

//Map
let users = [
    {id: 21, nombre: 'Saul', edad: 24},
    {id: 212, nombre: 'Juan', edad: 25},
    {id: 343, nombre: 'Maria', edad: 26},
    {id: 41, nombre: 'Ana', edad: 27}
]
let nombres = users.map(user => user.nombre);
console.log(nombres);

let productos = [
    {id: 1, nombre: 'Arroz', precio: 20},
    {id: 2, nombre: 'Frijol', precio: 30},
    {id: 3, nombre: 'Aceite', precio: 40},
    {id: 4, nombre: 'Azucar', precio: 50}
]
let productoIva = productos.map(producto => ({
    ...producto, //clonar el objeto producto con sus propiedades originales 
    precioIva: producto.precio * 1.16 //agregar el precio con iva como propiedad
}));
console.log(productoIva);
 
let pacientes = [
    {id: 1, nombre: 'Saul', edad: 24},
    {id: 2, nombre: 'Juan', edad: 25},
    {id: 3, nombre: 'Maria', edad: 26},
    {id: 4, nombre: 'Ana', edad: 27}
]
let menoresEdad = pacientes.map(paciente => paciente.edad < 18);
console.log(menoresEdad);

let palabras = ['hola','mundo','como','estas']; 
let conLetraE = palabras.filter(palabra => palabra.includes('e'));
console.log(conLetraE);

//sort
let ordenar = [10,20,30,40,50,60,70,80,90,100];
ornedar.sort((a,b) => a - b); //de menor a mayor
ordenar.sort((a,b) => b - a); //de mayor a menor
console.log(ordenar);

let words = ['Amor','Casa','Dinero','Amistad','Familia'];
words.sort();
console.log(words);

pacientes.sort((a,b) => a.edad - b.edad);
console.log(pacientes);

let numerosAleatorios = [10,20,30,40,50,60,70,80,90,100];