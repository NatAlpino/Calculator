const inputNum = (setNum, num, value) => {
  if (num === 0) {
    setNum(String(value));
  } else {
    setNum(String(num) + String(value));
  }
};

const clear = (setNum) => {
  setNum(0);
};

const backspace = (setNum) => {
  setNum(0, -1);
};

const porcentage = (setNum, num) => {
  setNum(num / 100);
};

const positNegative = (setNum, num) => {
  if (num > 0) {
    setNum(-num);
  } else {
    setNum(Math.abs(num));
  }
};
const operatorHandler = (value, setOperator, setOldNum, setNum, num) => {
  var operatorInput = value;
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

export {
  porcentage,
  clear,
  backspace,
  positNegative,
  inputNum,
  operatorHandler,
  results,
};
