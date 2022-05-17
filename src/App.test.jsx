import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

describe("App", () => {
  test("Renderiza de forma correta e sem travar", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});
