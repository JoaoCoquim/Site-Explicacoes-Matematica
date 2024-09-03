document.addEventListener('DOMContentLoaded', () => {
  const languageSelector = document.getElementById('language-selector');
  let translations = {};

  // Function to fetch and load translations
  async function loadTranslations() {
    try {
      const response = await fetch('../translations/translations.json');
      translations = await response.json();
      updateContent();
    } catch (error) {
      console.log(error);
    }
  }

  // Function to update content based on selected language
  function updateContent() {
    const language = languageSelector.value;
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    elementsToTranslate.forEach(element => {
      const key = element.getAttribute('data-translate');
      element.textContent = translations[language][key] || '';
    });
  }

  // Initial load and content update
  loadTranslations();

  // Event listener for dropdown change
  languageSelector.addEventListener('change', updateContent);
});
