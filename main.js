const productos = [
    { nombre: "Computador", precio: 1500 },
    { nombre: "Mouse", precio: 50 },
    { nombre: "Teclado", precio: 100 },
    { nombre: "Monitor", precio: 300 }
];

let carrito = [];

function simularCompra() {
    let producto = prompt(`¿Qué producto agregar? (Escribe 'fin' para salir)\n${productos.map(({ nombre }) => nombre).join(", ")}`);
    while (producto !== 'fin') {
        let item = productos.find(({ nombre }) => nombre.toLowerCase() === producto.toLowerCase());
        item ? carrito.push(item) : alert("Producto no encontrado.");
        item && alert(`Producto agregado: ${item.nombre}`);
        producto = prompt(`¿Qué producto agregar? (Escribe 'fin' para salir)\n${productos.map(({ nombre }) => nombre).join(", ")}`);
    }
    mostrarCarrito();
}

function mostrarCarrito() {
    const contenido = carrito.length ? carrito.map(({ nombre, precio }) => `${nombre} ($${precio})`).join(", ") : "Carrito vacío";
    alert(contenido);
    document.getElementById("carrito").innerText = `Carrito: ${contenido}`;
}

function buscarProducto() {
    let criterio = prompt("Buscar producto:");
    let resultado = productos.filter(({ nombre }) => nombre.toLowerCase().includes(criterio.toLowerCase()));
    alert(resultado.length ? `Productos encontrados: ${resultado.map(({ nombre }) => nombre).join(", ")}` : "No se encontró el producto.");
}

function calcularTotal() {
    const total = carrito.reduce((acc, { precio }) => acc + precio, 0);
    alert(`El total de tu compra es: $${total}`);
}

function eliminarProducto() {
    let producto = prompt("¿Qué producto deseas eliminar del carrito?");
    const index = carrito.findIndex(({ nombre }) => nombre.toLowerCase() === producto.toLowerCase());
    index !== -1 ? (carrito.splice(index, 1), alert(`Producto eliminado: ${producto}`)) : alert("Producto no encontrado en el carrito.");
    mostrarCarrito();
}

function vaciarCarrito() {
    carrito.length ? (carrito = [], alert("Carrito vaciado.")) : alert("El carrito ya está vacío.");
    mostrarCarrito();
}
