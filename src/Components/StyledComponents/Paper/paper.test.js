import React from "react";
import { mount } from "enzyme";
import StyledPaper from "./paper";

describe("StyledPaper", () => {
  it("Testando Paper", () => {
    const button = mount(
      <StyledPaper
      elevation={"10"}
      >
      </StyledPaper>
    );
    expect(button.prop("elevation")).toEqual("10");
  });
});