let productos = [];
let carrito = [];

async function cargarProductos() {
  try {
    const res = await fetch('productos.json');
    productos = await res.json();
    mostrarProductos();
  } catch (error) {
    console.error("Error cargando productos:", error);
  }
}

function mostrarProductos() {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";
  productos.forEach(producto => {
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <button onclick="agregarAlCarrito('${producto.nombre}')">Agregar</button>
    `;
    contenedor.appendChild(div);
  });
}

function agregarAlCarrito(nombreProducto) {
  const item = productos.find(p => p.nombre === nombreProducto);
  carrito.push(item);
  Swal.fire({
    title: '¡Agregado!',
    text: `${item.nombre} fue añadido al carrito.`,
    icon: 'success',
    timer: 1000,
    showConfirmButton: false
  });
  actualizarCarrito();
}

function actualizarCarrito() {
  const contenedor = document.getElementById("carrito");
  if (carrito.length === 0) {
    contenedor.innerText = "Carrito vacío";
    return;
  }
  contenedor.innerHTML = carrito.map(p => `${p.nombre} ($${p.precio})`).join("<br>");
}

function mostrarCarrito() {
  actualizarCarrito();
}

function calcularTotal() {
  const total = carrito.reduce((acc, { precio }) => acc + precio, 0);
  Swal.fire(`El total de tu compra es: $${total}`);
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
  Swal.fire("Carrito vaciado.");
}

cargarProductos();
