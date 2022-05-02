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
const setNum = () => {
  value
}

describe("Porcentage", () => {
  test("extrai a porcentagem do numero indicado na tela de input", () => {
    setNum = number / 100
    value = 0.01;
  });
});

describe("Clear", () => {
  test("deve limpar a tela de input sempre que o botao clear for acionado", () => {
    expect(clear);
  });
});

describe("Backspace", () => {
  test("deve zerar qualquer operacao para que uma nova seja iniciada", () => {
    expect(backspace);
  });
});

describe("PositNegative", () => {
  test("transforma um numero positivo em negativo e vice versa", () => {
    expect(positNegative);
  });
});

describe("InputNum", () => {
  test("carrega na tela de input o numero selecionado", () => {
    expect(inputNum);
  });
});

describe("OperatorHandler", () => {
  test("faz a divisao dos numeros selecionados", () => {
    expect(operatorHandler);
  });
  test("faz a multiplicacao dos numeros selecionados", () => {
    expect(operatorHandler);
  });
  test("faz a soma dos numeros selecionados", () => {
    expect(operatorHandler);
  });
  test("faz a subtracao dos numeros selecionados", () => {
    expect(operatorHandler);
  });
});

describe("Results", () => {
  test("apresenta na tela de input, o resultado da operacao anterior", () => {
    expect(results);
  });
});

