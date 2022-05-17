import React from "react";
import { mount } from "enzyme";
import StyledTextField from "./textField";

let value = 0;
const num = (x) => {
  value = x;
};

describe("StyledTextField", () => {
  it("Testando TextField", () => {
    const button = mount(
      <StyledTextField
        placeholder="0"
        variant="outlined"
        disabled={"true"}
        value={num}
      ></StyledTextField>
    );
    expect(value).toEqual(0);
    expect(button.prop("placeholder")).toEqual("0");
    expect(button.prop("variant")).toEqual("outlined");
    expect(button.prop("disabled")).toEqual("true");
  });
});
