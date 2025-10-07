const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const bgColorInput = document.getElementById('bg-color');
const textColorInput = document.getElementById('text-color');

// Funktion zum Umschalten des Themas
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.textContent = body.classList.contains('dark-mode') ? 'Wechsel zu Hellmodus' : 'Wechsel zu Dunkelmodus';
});

// Farben im lokalen Speicher speichern und laden
const loadTheme = () => {
    const darkMode = localStorage.getItem('dark-mode') === 'true';
    body.classList.toggle('dark-mode', darkMode);
    toggleButton.textContent = darkMode ? 'Wechsel zu Hellmodus' : 'Wechsel zu Dunkelmodus';

    const savedBgColor = localStorage.getItem('bg-color');
    const savedTextColor = localStorage.getItem('text-color');
    if (savedBgColor) body.style.backgroundColor = savedBgColor;
    if (savedTextColor) body.style.color = savedTextColor;
};

loadTheme();

// Farben anpassen und speichern
bgColorInput.addEventListener('input', (event) => {
    body.style.backgroundColor = event.target.value;
    localStorage.setItem('bg-color', event.target.value);
});

textColorInput.addEventListener('input', (event) => {
    body.style.color = event.target.value;
    localStorage.setItem('text-color', event.target.value);
});