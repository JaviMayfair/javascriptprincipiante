precio = 400000;
cantidad = 0;
total = 0;


function sumar() {
    cantidad = cantidad + 1;
    total = precio * cantidad;
    asignarValores();  
}

function restar() {
    cantidad = cantidad - 1;
    total = precio * cantidad;
    asignarValores();
}

function init() {
    precioSpan = document.querySelector(".precio-inicial");
    precioSpan.innerHTML = precio;
    asignarValores();
}

function asignarValores() {
    cantidadSpan = document.querySelector(".cantidad");
    cantidadSpan.innerHTML = cantidad;
    valorTotal = document.querySelector(".valor-total");
    valorTotal.innerHTML = total;  
}