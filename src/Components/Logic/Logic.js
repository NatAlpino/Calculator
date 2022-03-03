const inputNum = (setNum, num, value) => {
  var input = value //valor digitado
  if(num === 0) { //se estiver com valor 0
    setNum(input); //entao o setNum substitui o zero e recebe o input
  }else {
    setNum(num + input); //se o input nao for 0 ai ele mantem e vai acrescentando o input novo
  }
  

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

export { porcentage, clear, backspace, positNegative, inputNum, operatorHandler, results };
