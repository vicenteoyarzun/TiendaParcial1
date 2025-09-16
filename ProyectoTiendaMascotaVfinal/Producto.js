
document.getElementById('categoriaFiltro').addEventListener('change', function() {
  const categoria = this.value;
  const productos = document.querySelectorAll('.product');
  productos.forEach(producto => {
    if (categoria === 'todos' || producto.getAttribute('data-categoria') === categoria) {
      producto.style.display = '';
    } else {
      producto.style.display = 'none';
    }
  });
});

// Carrito de compras
let carrito = [];

document.querySelectorAll('.add-button').forEach((btn) => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    const productDiv = btn.closest('.product');
    const nombre = productDiv.querySelector('.product-title').textContent;
    const precio = parseInt(productDiv.querySelector('.price').textContent.replace(/[^0-9]/g, ''));
    carrito.push({ nombre, precio });
    actualizarCarrito();
  });
});

function actualizarCarrito() {
  const lista = document.getElementById('carrito-lista');
  lista.innerHTML = '';
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.nombre + ' - $' + item.precio;
    lista.appendChild(li);
  });
  const total = carrito.reduce((sum, item) => sum + item.precio, 0);
  document.getElementById('carrito-total').textContent = 'Total: $' + total;
}

document.querySelector('.cart').addEventListener('click', function() {
  document.getElementById('carrito-detalle').style.display = 'block';
});