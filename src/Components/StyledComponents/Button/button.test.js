import React from "react";
import { mount } from "enzyme";
import StyledButton from "./button";

let value = 0;
const setNum = (x) => {
  value = x;
};

describe("StyledButton", () => {
  it("Testando button AC(Clear)", () => {
    const button = mount(
      <StyledButton
        onClick={() => setNum(10)}
        value="AC"
        size="small"
        color="pink"
      >
        AC
      </StyledButton>
    );
    button.simulate("click");
    expect(value).toEqual(10);
    expect(button.prop("size")).toEqual("small");
    expect(button.prop("color")).toEqual("pink");
    expect(button.prop("value")).toEqual("AC");
    // expect(button.find("button")).toHaveStyleRule("backgroundColor", "#9c325c");
  });
  it("Testando button Backspace(C)", () => {
    const button = mount(
      <StyledButton
        onClick={() => setNum(10)}
        value="C"
        size="small"
        color="pink"
      >
        C
      </StyledButton>
    );
    button.simulate("click");
    expect(value).toEqual(10);
    expect(button.prop("size")).toEqual("small");
    expect(button.prop("color")).toEqual("pink");
    expect(button.prop("value")).toEqual("C");
  });
  it("Testando button Porcentage(%)", () => {
    const button = mount(
      <StyledButton
        onClick={() => setNum(10)}
        value="%"
        size="small"
        color="pink"
      >
        %
      </StyledButton>
    );
    button.simulate("click");
    expect(value).toEqual(10);
    expect(button.prop("size")).toEqual("small");
    expect(button.prop("color")).toEqual("pink");
    expect(button.prop("value")).toEqual("%");
  });
  it("Testando button OperatorHandler(/)", () => {
    const button = mount(
      <StyledButton
        onClick={() => setNum(10)}
        value="/"
        size="small"
        color="purple"
      >
        /
      </StyledButton>
    );
    button.simulate("click");
    expect(value).toEqual(10);
    expect(button.prop("size")).toEqual("small");
    expect(button.prop("color")).toEqual("purple");
    expect(button.prop("value")).toEqual("/");
  });
  it("Testando button InputNum(1)", () => {
    const button = mount(
      <StyledButton
        onClick={() => setNum(10)}
        value="1"
        size="small"
        color="rose"
      >
        1
      </StyledButton>
    );
    button.simulate("click");
    expect(value).toEqual(10);
    expect(button.prop("size")).toEqual("small");
    expect(button.prop("color")).toEqual("rose");
    expect(button.prop("value")).toEqual("1");
  });
  it("Testando button InputNum(2)", () => {
    const button = mount(
      <StyledButton
        onClick={() => setNum(10)}
        value="2"
        size="small"
        color="rose"
      >
        2
      </StyledButton>
    );
    button.simulate("click");
    expect(value).toEqual(10);
    expect(button.prop("size")).toEqual("small");
    expect(button.prop("color")).toEqual("rose");
    expect(button.prop("value")).toEqual("2");
  });
  it("Testando button InputNum(3)", () => {
    const button = mount(
      <StyledButton
        onClick={() => setNum(10)}
        value="3"
        size="small"
        color="rose"
      >
        3
      </StyledButton>
    );
    button.simulate("click");
    expect(value).toEqual(10);
    expect(button.prop("size")).toEqual("small");
    expect(button.prop("color")).toEqual("rose");
    expect(button.prop("value")).toEqual("3");
  });
  it("Testando button OperatorHandler(X)", () => {
    const button = mount(
      <StyledButton
        onClick={() => setNum(10)}
        value="X"
        size="small"
        color="purple"
      >
        X
      </StyledButton>
    );
    button.simulate("click");
    expect(value).toEqual(10);
    expect(button.prop("size")).toEqual("small");
    expect(button.prop("color")).toEqual("purple");
    expect(button.prop("value")).toEqual("X");
  });
  it("Testando button InputNum(4)", () => {
    const button = mount(
      <StyledButton
        onClick={() => setNum(10)}
        value="4"
        size="small"
        color="rose"
      >
        4
      </StyledButton>
    );
    button.simulate("click");
    expect(value).toEqual(10);
    expect(button.prop("size")).toEqual("small");
    expect(button.prop("color")).toEqual("rose");
    expect(button.prop("value")).toEqual("4");
  });
  it("Testando button InputNum(5)", () => {
    const button = mount(
      <StyledButton
        onClick={() => setNum(10)}
        value="5"
        size="small"
        color="rose"
      >
        5
      </StyledButton>
    );
    button.simulate("click");
    expect(value).toEqual(10);
    expect(button.prop("size")).toEqual("small");
    expect(button.prop("color")).toEqual("rose");
    expect(button.prop("value")).toEqual("5");
  });
  it("Testando button InputNum(6)", () => {
    const button = mount(
      <StyledButton
        onClick={() => setNum(10)}
        value="6"
        size="small"
        color="rose"
      >
        6
      </StyledButton>
    );
    button.simulate("click");
    expect(value).toEqual(10);
    expect(button.prop("size")).toEqual("small");
    expect(button.prop("color")).toEqual("rose");
    expect(button.prop("value")).toEqual("6");
  });
  it("Testando button OperatorHandler(+)", () => {
    const button = mount(
      <StyledButton
        onClick={() => setNum(10)}
        value="+"
        size="small"
        color="purple"
      >
        +
      </StyledButton>
    );
    button.simulate("click");
    expect(value).toEqual(10);
    expect(button.prop("size")).toEqual("small");
    expect(button.prop("color")).toEqual("purple");
    expect(button.prop("value")).toEqual("+");
  });
  it("Testando button InputNum(7)", () => {
    const button = mount(
      <StyledButton
        onClick={() => setNum(10)}
        value="7"
        size="small"
        color="rose"
      >
        7
      </StyledButton>
    );
    button.simulate("click");
    expect(value).toEqual(10);
    expect(button.prop("size")).toEqual("small");
    expect(button.prop("color")).toEqual("rose");
    expect(button.prop("value")).toEqual("7");
  });
  it("Testando button InputNum(8)", () => {
    const button = mount(
      <StyledButton
        onClick={() => setNum(10)}
        value="8"
        size="small"
        color="rose"
      >
        8
      </StyledButton>
    );
    button.simulate("click");
    expect(value).toEqual(10);
    expect(button.prop("size")).toEqual("small");
    expect(button.prop("color")).toEqual("rose");
    expect(button.prop("value")).toEqual("8");
  });
  it("Testando button InputNum(9)", () => {
    const button = mount(
      <StyledButton
        onClick={() => setNum(10)}
        value="9"
        size="small"
        color="rose"
      >
        9
      </StyledButton>
    );
    button.simulate("click");
    expect(value).toEqual(10);
    expect(button.prop("size")).toEqual("small");
    expect(button.prop("color")).toEqual("rose");
    expect(button.prop("value")).toEqual("9");
  });
  it("Testando button OperatorHandler(-)", () => {
    const button = mount(
      <StyledButton
        onClick={() => setNum(10)}
        value="-"
        size="small"
        color="purple"
      >
        -
      </StyledButton>
    );
    button.simulate("click");
    expect(value).toEqual(10);
    expect(button.prop("size")).toEqual("small");
    expect(button.prop("color")).toEqual("purple");
    expect(button.prop("value")).toEqual("-");
  });
  it("Testando button InputNum(.)", () => {
    const button = mount(
      <StyledButton
        onClick={() => setNum(10)}
        value="."
        size="small"
        color="pink"
      >
        .
      </StyledButton>
    );
    button.simulate("click");
    expect(value).toEqual(10);
    expect(button.prop("size")).toEqual("small");
    expect(button.prop("color")).toEqual("pink");
    expect(button.prop("value")).toEqual(".");
  });
  it("Testando button InputNum(0)", () => {
    const button = mount(
      <StyledButton
        onClick={() => setNum(10)}
        value="0"
        size="small"
        color="pink"
      >
        0
      </StyledButton>
    );
    button.simulate("click");
    expect(value).toEqual(10);
    expect(button.prop("size")).toEqual("small");
    expect(button.prop("color")).toEqual("pink");
    expect(button.prop("value")).toEqual("0");
  });
  it("Testando button Results(=)", () => {
    const button = mount(
      <StyledButton
        onClick={() => setNum(10)}
        value="="
        size="small"
        color="pink"
      >
        =
      </StyledButton>
    );
    button.simulate("click");
    expect(value).toEqual(10);
    expect(button.prop("size")).toEqual("small");
    expect(button.prop("color")).toEqual("pink");
    expect(button.prop("value")).toEqual("=");
  });
});
