import {
  porcentage,
  clear,
  backspace,
  positNegative,
  inputNum,
  operatorHandler,
  results,
} from "./logicButton";

const number = 10;

let value;
const setNum = (x) => {
  value = x;
};

let setOperator = (x) => {
  setOldNum = x;
};

let num;
let setOldNum = (x) => {
  num = x;
};

describe("OperatorHandler", () => {
  test("Testando os operadores", () => {
    operatorHandler(number, setOperator, setOldNum, setNum, 10);
    expect(setOperator).toEqual(0);
    expect(setOldNum).toEqual(10);
    expect(setNum).toEqual(num);
    expect(value).toEqual(number);
  });
});

describe("Porcentage", () => {
  test("extrai a porcentagem do numero indicado na tela de input", () => {
    porcentage(setNum, number);
    expect(value).toEqual(0.1);
  });
});

describe("Clear", () => {
  test("deve limpar a tela de input sempre que o botao clear for acionado", () => {
    clear(setNum);
    expect(value).toEqual(0);
  });
});

describe("Backspace", () => {
  test("deve zerar qualquer operacao para que uma nova seja iniciada", () => {
    backspace(setNum);
    expect(value).toEqual(0);
  });
});

describe("PositNegative", () => {
  test("transforma um numero positivo em negativo", () => {
    positNegative(setNum, number);
    expect(value).toEqual(-10);
  });
  test("transforma um numero negativo em positivo", () => {
    positNegative(setNum, -10);
    expect(value).toEqual(number);
  });
});

describe("InputNum", () => {
  test("carrega na tela de input o numero selecionado", () => {
    inputNum(setNum, 0, number);
    expect(value).toEqual(String(number));
  });
  test("concatena os numeros", () => {
    inputNum(setNum, 10, number);
    expect(value).toEqual("1010");
  });
});


describe("Results", () => {
  test("faz a divisao dos numeros selecionados", () => {
    results(setNum, number, "/", 10);
    expect(value).toEqual(1);
  });
  test("faz a multiplicacao dos numeros selecionados", () => {
    results(setNum, number, "X", 10);
    expect(value).toEqual(100);
  });
  test("faz a soma dos numeros selecionados", () => {
    results(setNum, number, "+", 10);
    expect(value).toEqual(20);
  });
  test("faz a subtracao dos numeros selecionados", () => {
    results(setNum, number, "-", 10);
    expect(value).toEqual(0);
  });
});
