const inputNum = (setNum, num, value) => {
  // var input = value;
  const input =  num.toString() + value.toString();
  // console.log(input)
  //if (num === 0) {
   // setNum(input);
 // } else {
    setNum(input);
  //}
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
    setNum(Math.abs(num));
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
