let result = "";

function appendToResult(value) {
  result += value;
  document.getElementById("result").value = result;
}

function clearResult() {
  result = "";
  document.getElementById("result").value = result;
}

function backspace() {
  result = result.slice(0, -1);
  document.getElementById("result").value = result;
}

function calculateResult() {
  result = eval(result);
  document.getElementById("result").value = result;
}


/* <div id="calculator">
  <input type="text" id="result" disabled>
  <button onclick="clearResult()">C</button>
  <button onclick="backspace()"><</button>
  <button onclick="appendToResult('/')">/</button>
  <button onclick="appendToResult('*')">*</button>
  <button onclick="appendToResult('-')">-</button>
  <button onclick="appendToResult('+')">+</button>
  <button onclick="calculateResult()">=</button>
  <button onclick="appendToResult('.')">.</button>
  <button onclick="appendToResult('0')">0</button>
  <button onclick="appendToResult('1')">1</button>
  <button onclick="appendToResult('2')">2</button>
  <button onclick="appendToResult('3')">3</button>
  <button onclick="appendToResult('4')">4</button>
  <button onclick="appendToResult('5')">5</button>
  <button onclick="appendToResult('6')">6</button>
  <button onclick="appendToResult('7')">7</button>
  <button onclick="appendToResult('8')">8</button>
  <button onclick="appendToResult('9')">9</button>
</div> */