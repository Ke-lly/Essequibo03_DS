'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    if (elem[i]) {
      elem[i].addEventListener("click", function () {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
      });
    }
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

if (goTopBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 200) {
      header.classList.add("active");
      goTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      goTopBtn.classList.remove("active");
    }
  });
}

document.getElementById('search-input').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const items = document.querySelectorAll('.item');

  items.forEach(item => {
      if (item.textContent.toLowerCase().includes(searchTerm)) {
          item.style.display = ''; // Exibe o item
      } else {
          item.style.display = 'none'; // Oculta o item
      }
  });
});

document.getElementById('searchBar').addEventListener('input', function() {
  var input = document.getElementById('searchBar').value.toLowerCase();
  console.log('Buscando por: ' + input); // Para verificar o que está sendo digitado
  var paragraphs = document.getElementById('content').getElementsByTagName('p');

  for (var i = 0; i < paragraphs.length; i++) {
      if (paragraphs[i].innerText.toLowerCase().includes(input)) {
          paragraphs[i].style.display = "";  // Mostrar
      } else {
          paragraphs[i].style.display = "none";  // Esconder
      }
  }
});

