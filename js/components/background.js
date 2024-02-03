function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function createBlurredCircle(color, stdDeviation) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "200");
  svg.setAttribute("height", "200");

  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
  filter.setAttribute("id", "blurFilter");
  filter.setAttribute("x", "-50%");
  filter.setAttribute("y", "-50%");
  filter.setAttribute("width", "200%");
  filter.setAttribute("height", "200%");

  const feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
  feGaussianBlur.setAttribute("in", "SourceGraphic");
  feGaussianBlur.setAttribute("stdDeviation", stdDeviation);

  filter.appendChild(feGaussianBlur);
  defs.appendChild(filter);
  svg.appendChild(defs);

  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", "100");
  circle.setAttribute("cy", "100");
  circle.setAttribute("r", "50");
  circle.setAttribute("fill", color);
  circle.setAttribute("filter", "url(#blurFilter)");

  svg.appendChild(circle);

  const randomX = getRandomNumber(0, window.innerWidth - 200);
  const randomY = getRandomNumber(0, window.innerHeight - 200);

  svg.style.position = "absolute";
  svg.style.left = `${randomX}px`;
  svg.style.top = `${randomY}px`;
  svg.style.zIndex = -1;

  document.body.appendChild(svg);
}

createBlurredCircle("var(--text-color)", "20");
createBlurredCircle("var(--text-color-secondary)", "15");
createBlurredCircle("var(--text-color-tertiary)", "25");