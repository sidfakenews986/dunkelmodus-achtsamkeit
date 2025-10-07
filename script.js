const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const bgColorInput = document.getElementById('bg-color');
const textColorInput = document.getElementById('text-color');

// Function to toggle the theme
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.textContent = body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

// Save and load colors from local storage
const loadTheme = () => {
    const darkMode = localStorage.getItem('dark-mode') === 'true';
    body.classList.toggle('dark-mode', darkMode);
    toggleButton.textContent = darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';

    const savedBgColor = localStorage.getItem('bg-color');
    const savedTextColor = localStorage.getItem('text-color');
    if (savedBgColor) body.style.backgroundColor = savedBgColor;
    if (savedTextColor) body.style.color = savedTextColor;
};

loadTheme();

// Adjust colors and save
bgColorInput.addEventListener('input', (event) => {
    body.style.backgroundColor = event.target.value;
    localStorage.setItem('bg-color', event.target.value);
});

textColorInput.addEventListener('input', (event) => {
    body.style.color = event.target.value;
    localStorage.setItem('text-color', event.target.value);
});