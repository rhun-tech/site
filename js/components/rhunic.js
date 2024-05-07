//const textArray = ["ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "ᚺ", "ᚾ", "ᛁ", "ᛃ", "ᛇ", "ᛈ", "ᛉ", "ᛊ", "ᛏ", "ᛒ", "ᛖ", "ᛗ", "ᛚ", "ᛜ", "ᛞ", "ᛟ"];
const textArray = ["*"]
const colorArray = ["var(--text-color)", "var(--text-color-secondary)", "var(--text-color-tertiary)", "var(--text-color-callout)"];

class RhunicComponent extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    const text = this.generateText();
    this.innerHTML = text;
  }

  generateText() {
    let result = '';
    for (let i = 0; i < 84; i++) {
      const randomChar = textArray[Math.floor(Math.random() * textArray.length)];
      const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
      const randomSpace = Math.random() < 0.3 ? ' ' : ''; // Randomly include space with 30% probability
      const randomOpacity = Math.random(); // Random opacity between 0 and 1
      result += `<span class="rhun-char" style="color: ${randomColor}; opacity: ${randomOpacity}">${randomChar}</span>${randomSpace}`;
    }
    return result;
  }

  setupEventListeners() {
    const chars = this.querySelectorAll('.rhun-char');
    chars.forEach(char => {
      char.addEventListener('mouseover', () => {
        char.style.opacity = 1;
      });
      char.addEventListener('mouseout', () => {
        char.style.opacity = Math.random(); // Restore random opacity
      });
    });
  }
}

// Define the custom element
customElements.define('rhunic-component', RhunicComponent);