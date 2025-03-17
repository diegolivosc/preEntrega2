const productos = [
    { nombre: "Computador", precio: 1500 },
    { nombre: "Mouse", precio: 50 },
    { nombre: "Teclado", precio: 100 },
    { nombre: "Monitor", precio: 300 }
];

let carrito = [];

function simularCompra() {
    let producto;
    while ((producto = prompt(`¿Qué producto agregar? (fin para salir)\n${productos.map(p => p.nombre).join(", ")}`)) && producto.toLowerCase() !== 'fin') {
        let item = productos.find(p => p.nombre.toLowerCase() === producto.toLowerCase());
        item ? (carrito.push(item), alert(`Agregado: ${item.nombre}`)) : alert("Producto no encontrado.");
    }
    mostrarCarrito();
}

function mostrarCarrito() {
    let contenido = carrito.length ? carrito.map(p => `${p.nombre} ($${p.precio})`).join(", ") : "Carrito vacío";
    alert(contenido);
    document.getElementById("carrito").innerText = "Carrito: " + contenido;
}

function buscarProducto() {
    let criterio = prompt("Buscar producto:");
    let resultado = productos.filter(p => p.nombre.toLowerCase().includes(criterio.toLowerCase()));
    alert(resultado.length ? "Encontrados: " + resultado.map(p => p.nombre).join(", ") : "No encontrado");
}
