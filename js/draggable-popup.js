const popup = document.querySelector('.contact-popup');
const closeButton = document.getElementById('close-popup');
let isDragging = false;
let startX, startY, transformX = 0, transformY = 0;

// Close popup
closeButton.addEventListener('click', (e) => {
    popup.style.display = 'none';
  });

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
