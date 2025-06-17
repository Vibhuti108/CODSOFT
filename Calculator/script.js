const display = document.getElementById('display');
const historyBox = document.getElementById('history');
const sound = document.getElementById('clickSound');
let memory = 0;

function playSound() {
  sound.currentTime = 0;
  sound.play();
}

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function memoryAdd() {
  try {
    memory += eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function memoryRecall() {
  display.value += memory;
}

function calculate() {
  try {
    const expr = display.value
      .replace(/sin/g, 'Math.sin')
      .replace(/cos/g, 'Math.cos')
      .replace(/tan/g, 'Math.tan')
      .replace(/log/g, 'Math.log10')
      .replace(/ln/g, 'Math.log')
      .replace(/sqrt/g, 'Math.sqrt')
      .replace(/π/g, 'Math.PI')
      .replace(/e/g, 'Math.E')
      .replace(/\^/g, '**');
    const result = eval(expr);
    historyBox.innerHTML += `<div>${display.value} = ${result}</div>`;
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}

function updateClock() {
  const now = new Date();
  document.getElementById("clock").innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

function deleteHistory() {
  historyBox.innerHTML = '';
}

document.addEventListener('keydown', (event) => {
  const key = event.key;
  const allowed = /[0-9\.\+\-\*\/\(\)\[\]\{\}\^%]/;
  if (allowed.test(key)) {
    playSound();
    appendValue(key);
  } else if (key === 'Enter') {
    playSound();
    calculate();
  } else if (key === 'Backspace') {
    playSound();
    deleteLast();
  }
});