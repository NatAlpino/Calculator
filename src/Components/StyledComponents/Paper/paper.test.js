import React from "react";
import { mount } from "enzyme";
import StyledPaper from "./paper";

describe("StyledPaper", () => {
  it("Testando Paper", () => {
    const paper = mount(
      <StyledPaper
      elevation={"10"}
      >
      </StyledPaper>
    );
    expect(paper.prop("elevation")).toEqual("10");
  });
});