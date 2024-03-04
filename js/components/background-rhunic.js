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

function moveArrayRight(textGroup, previousWidth) {
  textGroup.setAttribute("transform", `translate(${previousWidth}, 0)`);
}

function createTextLinesFromArray(textArray, fontSize, randomColor, previousWidth) {
  shuffleArray(textArray);

  const textGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");

  for (let i = 0; i < textArray.length; i++) {
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", "10");
    text.setAttribute("y", i * fontSize);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("font-size", fontSize);
    text.setAttribute("fill", randomColor);
    text.setAttribute("opacity", getRandomNumber(0.3, 1));
    text.textContent = textArray[i];
    textGroup.appendChild(text);
  }

  moveArrayRight(textGroup, previousWidth);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "2000");
  svg.setAttribute("height", "20" + textArray.length * fontSize);

  svg.appendChild(textGroup);
  svg.style.position = "absolute";
  svg.style.left = `0px`;
  svg.style.top = `0px`;
  svg.style.zIndex = 1;

  var rhunfallDiv = document.getElementById('rhunfall');

  if (rhunfallDiv) {
    rhunfallDiv.appendChild(svg);
  } else {
    console.error('The specified div does not exist.');
  }

  let opacityOffset = Math.random();

  setInterval(() => {
    textGroup.childNodes.forEach((text, index) => {
      const waveOpacity = Math.sin(opacityOffset + (index / textArray.length) * Math.PI) * 0.35 + 0.65;
      text.setAttribute("opacity", waveOpacity);
    });

    opacityOffset += 0.1;
  }, 84);

  return previousWidth + 20;
}

const textArray = ["ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "ᚺ", "ᚾ", "ᛁ", "ᛃ", "ᛇ", "ᛈ", "ᛉ", "ᛊ", "ᛏ", "ᛒ", "ᛖ", "ᛗ", "ᛚ", "ᛜ", "ᛞ", "ᛟ"];
const repeatedTextArray = textArray.concat(textArray);
const fontSize = 20;
const colorArray = ["var(--text-color)",
  "var(--text-color-secondary)",
  "var(--text-color-tertiary)",
  "var(--text-color-callout)"];

let previousWidth = 0;

for (let i = 0; i < 100; i++) {
  const randomColor = getRandomColorFromArray(colorArray);
  previousWidth = createTextLinesFromArray(repeatedTextArray, fontSize, randomColor, previousWidth);
}

