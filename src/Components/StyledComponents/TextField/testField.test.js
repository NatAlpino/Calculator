import React from "react";
import { mount } from "enzyme";
import StyledTextField from "./textField";

let value = 0;
const num = (x) => {
  value = x;
};

describe("StyledTextField", () => {
  it("Testando TextField", () => {
    const textField = mount(
      <StyledTextField
        placeholder="0"
        variant="outlined"
        disabled={"true"}
        value={num}
      ></StyledTextField>
    );
    //simular o input, parecido com o simulate do click button.
    expect(value).toEqual(0);
    expect(textField.prop("placeholder")).toEqual("0");
    expect(textField.prop("variant")).toEqual("outlined");
    expect(textField.prop("disabled")).toEqual("true");
  });
});
