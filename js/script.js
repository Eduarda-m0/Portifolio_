document.addEventListener("DOMContentLoaded", function () {

  // MENU MOBILE
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => menu.classList.toggle("active"));
  }

  // HEADER SCROLL
  const header = document.getElementById("header");
  if (header) {
    header.classList.add("transparent");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("solid");
        header.classList.remove("transparent");
      } else {
        header.classList.add("transparent");
        header.classList.remove("solid");
      }
    });
  }


window.onload = function() {
    const titleText = "Dudinha.dev"; // emoji + nome
    let i = 0;

    function typeTitle() {
        document.title = titleText.substring(0, i);
        i++;
        if (i <= titleText.length) {
            setTimeout(typeTitle, 150); // velocidade da digitação
        } else {
            setTimeout(() => {
                i = 0;
                typeTitle(); // reinicia a animação
            }, 2000);
        }
    }

    typeTitle();
};

  
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  let index = 0;

  if (slides.length > 0) {

    // Função para mostrar o slide atual
    function mostrarSlide(i) {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[i].classList.add("active");
    }

    mostrarSlide(index); // Mostra o primeiro slide inicialmente

    // Botão next
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        mostrarSlide(index);
      });
    }

    // Botão prev
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        mostrarSlide(index);
      });
    }

    // Troca automática a cada 5 segundos
    setInterval(() => {
      index = (index + 1) % slides.length;
      mostrarSlide(index);
    }, 5000);
  }

});