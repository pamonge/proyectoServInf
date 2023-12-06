// Header sticky

// Selecciona el elemento del encabezado
const header = document.getElementById('sticky-header');

// Agrega un detector de eventos de desplazamiento a la ventana
window.addEventListener('scroll', () => {
  // Obtiene la posición actual de desplazamiento
  const scrollTop = window.scrollY;

  // Comprueba si el usuario está en la parte superior de la página
  if (scrollTop === 0) {
    // Si es así, quita la clase "scrolled"
    header.classList.remove('scrolled');
  } else {
    // Si no está en la parte superior, agrega la clase "scrolled" al encabezado
    header.classList.add('scrolled');
  }
});

// slider

// variables
const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const slideIcons = document.querySelectorAll('.slideIcon');
const numberOfSlides = slides.length;
var slideNumber = 0;

// Botón next imagen
nextBtn.addEventListener('click', () => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove('active');
  });

  slideNumber++;

  if (slideNumber > numberOfSlides - 1) {
    slideNumber = 0;
  }

  slides[slideNumber].classList.add('active');
  slideIcons[slideNumber].classList.add('active');
});

// Botón prev imagen
prevBtn.addEventListener('click', () => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove('active');
  });

  slideNumber--;

  if (slideNumber < 0) {
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add('active');
  slideIcons[slideNumber].classList.add('active');
});

// slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function() {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove('active');
    });
  
    slideNumber++;
  
    if (slideNumber > numberOfSlides - 1) {
      slideNumber = 0;
    }
  
    slides[slideNumber].classList.add('active');
    slideIcons[slideNumber].classList.add('active');
  }, 4000);
}
repeater();

// detener autoplay del slider con mouse hover
slider.addEventListener('mouseover', () => {
  clearInterval(playSlider);
});

// reiniciar autoplay al quitar mouse hover
slider.addEventListener('mouseout', () => {
  repeater();
});

// Función carrito de compras
const botonesAgregar = document.querySelectorAll('.agregarCarrito');
const modalListaCarrito = document.getElementById('lista-carrito-modal');
const totalModal = document.getElementById('total-modal');
const carritoContador = document.getElementById('carritoContador');

let productosEnCarrito = 0;
let totalPrecio = 0;

// Función para actualizar el total en el carrito
function actualizarTotal() {
    if (totalPrecio === 0) {
        totalModal.textContent = '$0';
    } else {
        totalModal.textContent = '$' + totalPrecio.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0});
    }
}

botonesAgregar.forEach((boton) => {
    boton.addEventListener('click', () => {
        const producto = boton.parentElement.querySelector('h2').textContent;
        const precio = boton.parentElement.querySelector('.precioProducto').textContent;
        const caracteristicas = boton.parentElement.querySelector('.caracteristicas').textContent;
        const precioNumerico = parseFloat(precio.replace('$', '').replace(',', '').replace('.', '').replace('.', ''));
        const imagen = boton.parentElement.parentElement.querySelector('.fotoProducto img').src;
        agregarAlCarrito(producto, precioNumerico, imagen, caracteristicas);
    });
});

function agregarAlCarrito(producto, precio, imagen, caracteristicas) {
    productosEnCarrito++;
    carritoContador.textContent = productosEnCarrito; // Actualiza el contador en el botón
    totalPrecio += precio; // Agrega el precio del producto al total

    const elementoCarrito = document.createElement('li');

    // Crea una imagen para el producto
    const imagenProducto = document.createElement('img');
    imagenProducto.src = imagen;

    // Agrega la imagen al elemento <li>
    elementoCarrito.appendChild(imagenProducto);

    // Crea un div para contener el nombre del producto, características y precio
    const contenedorInfo = document.createElement('div');

    // Crea un párrafo para el nombre del producto
    const nombreProducto = document.createElement('p');
    nombreProducto.textContent = producto;

    // Crea un párrafo para las características
    const parrafoCaracteristicas = document.createElement('p');
    parrafoCaracteristicas.classList.add('cr'); // Agrega la clase "cr" al elemento <p>
    parrafoCaracteristicas.textContent = `Características: ${caracteristicas}`;

    // Crea un párrafo para el precio
    const precioProducto = document.createElement('p');
    const precioFormateado = '$' + precio.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0});
    precioProducto.textContent = precioFormateado;

    // Agrega los párrafos al div contenedor
    contenedorInfo.appendChild(nombreProducto);
    contenedorInfo.appendChild(parrafoCaracteristicas);
    contenedorInfo.appendChild(precioProducto);

    // Agrega el botón para eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        eliminarDelCarrito(elementoCarrito, precio);
    });
    contenedorInfo.appendChild(botonEliminar);

    // Agrega el div contenedor al elemento <li>
    elementoCarrito.appendChild(contenedorInfo);

    modalListaCarrito.appendChild(elementoCarrito);

    actualizarTotal(); // Llama a la función para actualizar el total
}

function eliminarDelCarrito(elemento, precio) {
    productosEnCarrito--;
    carritoContador.textContent = productosEnCarrito; // Actualiza el contador en el botón
    totalPrecio -= precio; // Resta el precio del producto al total
    elemento.style.display = 'none'; // Oculta el elemento en lugar de eliminarlo
    actualizarTotal(); // Llama a la función para actualizar el total
}

// Obtén el botón "Ver carrito"
const botonVerCarrito = document.querySelector('.cabeceraTienda button');

// Obtén el modal y el botón para cerrar
const modal = document.getElementById('miModal');
const cerrarModal = document.getElementById('cerrarModal');

// Agrega un listener al botón "Ver carrito" para abrir el modal
botonVerCarrito.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Agrega un listener al botón de cierre para cerrar el modal
cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cierra el modal si el usuario hace clic fuera de él
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Menú responsive

const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.r__menu');
const cerrar = document.querySelector('.fa-circle-xmark');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

cerrar.addEventListener('click', () => {
  menu.classList.remove('show');
});