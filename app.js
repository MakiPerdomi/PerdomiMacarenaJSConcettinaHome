const contenedor = document.getElementById("producto-contenedor");

productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML += `
    <div class="card-image">
      <img src="${producto.img}">
      <span class="card-title"> ${producto.nombre}</span>
      
    </div>
    <div class="card-content">
        <p>${producto.desc}</p>
        <p>${producto.aroma}</p>
        <p>$ ${producto.precio}</p>
        <a class="btn-floating halfway-fab wabes-effect waves-light red" id=boton${producto.id}><i class="material-icons">add_shopping_cart</i></a>
    </div>
    `;
    contenedor.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
        carritoIndex(producto.id)
        Toastify({
            text: `Se agrego ${producto.nombre} al carrito`,
            duration: 3000,
            style: {
            background: "linear-gradient(to right, #75145c, rgba(255, 195, 201, 255))"
            }
        }).showToast();
    });
});