// script.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('¡Gracias por contactarnos! Pronto te responderemos.');
    form.reset();
  });
});


  let slideIndex = 0;

  function moverSlide(direccion) {
    const slides = document.getElementById('slides');
    const totalSlides = slides.children.length;

    // Asegúrate de no salirse del índice
    slideIndex = (slideIndex + direccion + totalSlides) % totalSlides;

    // Mover el contenedor de slides
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  }


