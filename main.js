const popup = document.querySelector('.contact-popup');
const closeButton = document.getElementById('close-popup');
const experience = document.querySelector('.experience');

experience.addEventListener('click', () => {
  window.location.href = './experience.html';
});

closeButton.addEventListener('click', (e) => {
  // Prevent triggering other events
  e.stopPropagation();
  popup.style.display = 'none';
});


let isDragging = false;
let startX, startY, transformX = 0, transformY = 0;

// Make popup draggable
popup.addEventListener('mousedown', (e) => {
  isDragging = true;
  const rect = popup.getBoundingClientRect();
  startX = e.clientX;
  startY = e.clientY;
  popup.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    transformX += dx;
    transformY += dy;
    popup.style.transform = `translate(${transformX}px, ${transformY}px)`;
    startX = e.clientX;
    startY = e.clientY;
  }
});

document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    popup.style.cursor = 'grab';
  }
});

// Make popup draggable on touch devices
popup.addEventListener('touchstart', (e) => {
  isDragging = true;
  const touch = e.touches[0];
  const rect = popup.getBoundingClientRect();
  startX = touch.clientX;
  startY = touch.clientY;
  popup.style.cursor = 'grabbing';
});

document.addEventListener('touchmove', (e) => {
  if (isDragging) {
    const touch = e.touches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;
    transformX += dx;
    transformY += dy;
    popup.style.transform = `translate(${transformX}px, ${transformY}px)`;
    startX = touch.clientX;
    startY = touch.clientY;
  }
});

document.addEventListener('touchend', () => {
  if (isDragging) {
    isDragging = false;
    popup.style.cursor = 'grab';
  }
});


// Function to load content dynamically
function loadContent(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText);
    }
  };
  xhr.send();
}

// Handle dynamic content loading
function handleNavigation(e) {
  e.preventDefault();
  const target = e.target.getAttribute('href');
  if (target && target !== '#') {
    loadContent(target, function (content) {
      document.getElementById('dynamic-content').innerHTML = content;
    });
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('language-switcher');
  let translations = {};

  // Function to fetch and load translations
  async function loadTranslations() {
      try {
          const response = await fetch('translations.json');
          translations = await response.json();
          updateContent();
      } catch (error) {
          console.error('Error loading translations:', error);
      }
  }

  // Function to update content based on selected language
  function updateContent() {
      const language = checkbox.checked ? 'en' : 'pt';
      const elementsToTranslate = document.querySelectorAll('[data-translate]');

      elementsToTranslate.forEach(element => {
          const key = element.getAttribute('data-translate');
          element.textContent = translations[language][key] || '';
      });

      checkbox.nextElementSibling.textContent = checkbox.checked ? 'Switch to English' : 'Switch to Portuguese';
  }

  // Initial load and content update
  loadTranslations();

  // Event listener for checkbox change
  checkbox.addEventListener('change', updateContent);
});