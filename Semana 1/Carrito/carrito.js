function eliminarProductoDelCarrito(idx, event) {
  if (event) event.stopPropagation();
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.splice(idx, 1);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarDetalleCarrito();
  actualizarContadorCarrito();
}

function mostrarDetalleCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const contenedor = document.getElementById('carrito-detalle');
  if (!contenedor) return;
  let html = '<h3>Productos en el carrito</h3><ul style="list-style:none; padding:0;">';
  carrito.forEach((prod, idx) => {
    html += `<li>
      ${prod.nombre} x${prod.cantidad || 1} - $${prod.precio * (prod.cantidad || 1)}
      <button onclick="eliminarProductoDelCarrito(${idx}, event)" style="color:red; border:none; background:none; font-size:16px; margin-left:10px; cursor:pointer;">✖</button>
    </li>`;
  });
  html += '</ul>';
  html += `<button onclick="window.location.href='CarritoCompra.html'" style="margin-top:10px; padding:8px 16px;">Ir al carrito</button>`;
  contenedor.innerHTML = html;
  contenedor.style.display = 'block';
}

function actualizarContadorCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const total = carrito.reduce((sum, prod) => sum + (prod.cantidad || 1), 0);
  const contador = document.getElementById('cart-count');
  if (contador) contador.textContent = total;
}

window.onload = actualizarContadorCarrito;

document.addEventListener('DOMContentLoaded', function() {
  const cartImg = document.querySelector('.cart img');
  if (cartImg) {
    cartImg.addEventListener('click', function(e) {
      e.stopPropagation();
      mostrarDetalleCarrito();
    });
  }
  document.addEventListener('click', function(e) {
    const contenedor = document.getElementById('carrito-detalle');
    if (contenedor && !contenedor.contains(e.target) && !document.querySelector('.cart').contains(e.target)) {
      contenedor.style.display = 'none';
    }
  });
});