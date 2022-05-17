import React from "react";
import { mount } from "enzyme";
import StyledGrid from "./grid";

describe("StyledGrid", () => {
  it("Testando Grid", () => {
    const button = mount(
      <StyledGrid
      container
      maxWidth="xs"
      display="flex"
      justifyContent="center"
      alignItems="center"
      >
      </StyledGrid>
    );
    expect(button.prop("maxWidth")).toEqual("xs");
    expect(button.prop("display")).toEqual("flex");
    expect(button.prop("justifyContent")).toEqual("center");
    expect(button.prop("alignItems")).toEqual("center");
  });
});
