function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomColorFromArray(colorArray) {
  const randomIndex = Math.floor(Math.random() * colorArray.length);
  return colorArray[randomIndex];
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createTextLinesFromArray(textArray, fontSize, randomColor) {
  // Shuffle the textArray randomly
  shuffleArray(textArray);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "200");
  svg.setAttribute("height", textArray.length * fontSize);

  const textGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");

  for (let i = 0; i < textArray.length; i++) {
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", "100");
    text.setAttribute("y", i * fontSize);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("font-size", fontSize);
    text.setAttribute("fill", randomColor);

    // Set initial opacity
    text.setAttribute("opacity", getRandomNumber(0.3, 1));

    text.textContent = textArray[i];

    textGroup.appendChild(text);
  }

  svg.appendChild(textGroup);

  const randomX = getRandomNumber(-100, window.innerWidth - 100);
  const randomY = getRandomNumber(0, window.innerHeight - textArray.length * fontSize);

  svg.style.position = "absolute";
  svg.style.left = `${randomX}px`;
  svg.style.top = `${randomY}px`;
  svg.style.zIndex = -1;

  document.body.appendChild(svg);

  let opacityOffset = Math.random(); // Random offset to create a variation in the wave

  // Set interval to update opacity with a wave effect every 100 milliseconds (adjust as needed)
  setInterval(() => {
    textGroup.childNodes.forEach((text, index) => {
      // Update opacity dynamically in a wave pattern
      const waveOpacity = Math.sin(opacityOffset + (index / textArray.length) * Math.PI) * 0.35 + 0.65;
      text.setAttribute("opacity", waveOpacity);
    });

    opacityOffset += 0.1; // Adjust the speed of the wave effect
  }, 84);
}

const textArray = ["ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "ᚺ", "ᚾ", "ᛁ", "ᛃ", "ᛇ", "ᛈ", "ᛉ", "ᛊ", "ᛏ", "ᛒ", "ᛖ", "ᛗ", "ᛚ", "ᛜ", "ᛞ", "ᛟ"];
const fontSize = 20;
const colorArray = ["var(--text-color)",
  "var(--text-color-secondary)",
  "var(--text-color-tertiary)",
  "var(--text-color-callout)"];

for (let i = 0; i < 20; i++) {
  const randomColor = getRandomColorFromArray(colorArray);
  createTextLinesFromArray(textArray, fontSize, randomColor);
}
