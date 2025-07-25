let totalItems = 0;
let totalPrecio = 0;
let carrito = [];

function agregarAlCarrito(nombre, precio) {
    totalItems++;
    totalPrecio += precio;
    carrito.push(nombre);

    document.getElementById("total-items").innerText = totalItems;
    document.getElementById("total-precio").innerText = totalPrecio;

    if (totalPrecio > 50) {
        alert("¡Envío gratis aplicado!");
    }

    console.log("Productos en el carrito:", carrito);
}

function vaciarCarrito() {
    totalItems = 0;
    totalPrecio = 0;
    carrito = [];

    document.getElementById("total-items").innerText = 0;
    document.getElementById("total-precio").innerText = 0;

    alert("Carrito vaciado");
}
