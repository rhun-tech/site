// Theme
var themeChanger = document.querySelector('#theme-changer'),
  root = document.querySelector(':root'),
  themeRadios = document.querySelectorAll('input[name="theme"]'),
  currentTheme = localStorage.getItem("theme") || 'default';

themeChanger.classList.remove('hidden');

themeRadios.forEach(function(radio) {
  radio.addEventListener('change', function (e) {
    currentTheme = this.value;
    root.className = currentTheme;
    localStorage.setItem('theme', currentTheme);
  });
});

window.onload = function (e) {
  document.querySelector('input[name="theme"][value="' + currentTheme + '"]').checked = true;
  root.className = currentTheme;
};
