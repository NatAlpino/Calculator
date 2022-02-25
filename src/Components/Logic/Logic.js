const inputNum = (setNum, num, e) => {
  var input = e.target.value;
  if (num === 0) {
    setNum(input);
  } else {
    setNum(num + input);
  }
};

const clear = (setNum) => {
  setNum(0);
};

const backspace = (setNum) => {
  setNum(0, -1);
}

const porcentage = (setNum, num) => {
  setNum(num / 100);
};

const positNegative = (setNum, num) => {
  if (num > 0) {
    setNum(-num);
  } else {
    setNum(Math.abs(num)); //math.abs serve para transformar numeros negativos em positivos e vice e versa
  }
};
const operatorHandler = (e, setOperator, setOldNum, setNum, num) => {
  var operatorInput = e.target.value;
  setOperator(operatorInput);
  setOldNum(num);
  setNum(0);
};

const results = (setNum, oldNum, operator, num) => {
  if (operator === "/") {
    setNum(oldNum / num);
  } else if (operator === "X") {
    setNum(oldNum * num);
  } else if (operator === "+") {
    setNum(parseFloat(oldNum) + parseFloat(num));
  } else if (operator === "-") {
    setNum(oldNum - num);
  }
};

export { porcentage, clear, backspace, positNegative, inputNum, operatorHandler, results };
