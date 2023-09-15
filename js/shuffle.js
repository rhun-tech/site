function shuffleText(inputText) {
  var characters = inputText.split('');

  // Create three different versions of shuffled text
  var shuffledText1 = characters.slice().sort(function () { return 0.5 - Math.random(); }).join('');
  var shuffledText2 = characters.slice().sort(function () { return 0.5 - Math.random(); }).join('');
  var shuffledText3 = characters.slice().sort(function () { return 0.5 - Math.random(); }).join('');
  var shuffledText4 = characters.slice().sort(function () { return 0.5 - Math.random(); }).join('');
  var shuffledText5 = characters.slice().sort(function () { return 0.5 - Math.random(); }).join('');
  var shuffledText6 = characters.slice().sort(function () { return 0.5 - Math.random(); }).join('');
  var shuffledText7 = characters.slice().sort(function () { return 0.5 - Math.random(); }).join('');
  var shuffledText8 = characters.slice().sort(function () { return 0.5 - Math.random(); }).join('');
  var shuffledText9 = characters.slice().sort(function () { return 0.5 - Math.random(); }).join('');

  return [shuffledText1, shuffledText2, shuffledText3, shuffledText4, shuffledText5, shuffledText6, shuffledText7, shuffledText8, shuffledText9];
}

function updateshuffledText() {
  var input = document.getElementById('inputText');
  var userInput = input.value;

  var shuffledTextArray = shuffleText(userInput);

  document.getElementById('shuffledText1').textContent = shuffledTextArray[0];
  document.getElementById('shuffledText2').textContent = shuffledTextArray[1];
  document.getElementById('shuffledText3').textContent = shuffledTextArray[2];
  document.getElementById('shuffledText4').textContent = shuffledTextArray[3];
  document.getElementById('shuffledText5').textContent = shuffledTextArray[4];
  document.getElementById('shuffledText6').textContent = shuffledTextArray[5];
  document.getElementById('shuffledText7').textContent = shuffledTextArray[6];
  document.getElementById('shuffledText8').textContent = shuffledTextArray[7];
  document.getElementById('shuffledText9').textContent = shuffledTextArray[8];
}