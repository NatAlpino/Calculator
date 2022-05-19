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
});
