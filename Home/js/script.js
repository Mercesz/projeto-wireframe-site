// Seleciona elementos do DOM
const slides = document.querySelectorAll('.slides .item');
const thumbs = document.querySelectorAll('.thumbnail .thumb');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0; 

// Atualiza o ativo e as miniaturas
function updateSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.zIndex = 1; // z-index para overlay
    });

    thumbs.forEach(thumb => thumb.classList.remove('active'));

    slides[index].classList.add('active');
    slides[index].style.zIndex = 2;
    thumbs[index].classList.add('active');

    currentIndex = index;
}

// Próximo slide
function nextSlide() {
    let index = currentIndex + 1;
    if (index >= slides.length) index = 0;
    updateSlide(index);
}

// Slide anterior
function prevSlide() {
    let index = currentIndex - 1;
    if (index < 0) index = slides.length - 1;
    updateSlide(index);
}

// movimento dos botões
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// movimento das miniaturas
thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
        const index = parseInt(thumb.dataset.index);
        updateSlide(index);
    });
});

// Troca automática de slides
setInterval(nextSlide, 5000);

// Inicializa o slider
updateSlide(currentIndex);

document.querySelector('.btn').addEventListener('click', () => {
  window.location.href = '../../produtos/html/produtos.html';
});
