function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomColorFromArray(colorArray) {
  const randomIndex = Math.floor(Math.random() * colorArray.length);
  return colorArray[randomIndex];
}

function createTextLinesFromArray(textArray, fontSize, randomColor) {
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
    text.setAttribute("opacity", .3)
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
