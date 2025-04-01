/**
Crea un arreglo vacío llamado listaDeCompras.
Implementa una función agregarProducto(producto) que agregue un nuevo producto al final de la lista.
Implementa una función eliminarProducto(producto) que elimine un producto de la lista.
Implementa una función mostrarLista() que imprima todos los productos de la lista.
Asegúrate de que no haya productos duplicados en la lista.
Puedes usar arrow functions para la funcionalidad solicitada así como otras características del estandar ECMAScript.
 */

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

var listaDeCompras = [];

const agregarProducto = (producto, precio) => {
  if (typeof producto === "string" && typeof precio == "number")
    listaDeCompras.push(new Producto(producto, precio));
};

const eliminarProducto = (producto) => {
    let nombres = [];
  if (typeof producto !== "string") {
    console.log("Ingresa el nombre del producto");
    return;
  }
  var item = listaDeCompras.map((item) => item.nombre).indexOf(producto);
  if (item >= 0) {
     listaDeCompras.splice(item, 1);
   } else {
     console.log("El elemento no existe en el array.");
   }
};

const mostrarLista = () => {
  listaDeCompras.forEach((producto) =>
    console.log(`${producto.nombre} - ${producto.precio} \n`)
  );
};

const cuenta = () => {
  return listaDeCompras.reduce((a, b) => a + b.precio, 0);
};

agregarProducto("manzanas", 63);
agregarProducto("melones", 56);
agregarProducto("totis flaminjot", 23);
agregarProducto("totis flaminjot", 23);
agregarProducto("totis flaminjot", 23);
agregarProducto("USB 5Gb", 60);
agregarProducto("RTX 3080", 18200);

eliminarProducto("totis flaminjot");
eliminarProducto("totis flaminjot");

mostrarLista();

console.log(cuenta());
