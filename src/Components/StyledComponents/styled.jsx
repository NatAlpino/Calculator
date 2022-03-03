import styled from "styled-components";
import { IconButton, Grid, Paper } from "@material-ui/core";

const StyledButton = styled(IconButton)`
  && {
    box-shadow: 1px 1px, 0px 1px 1px 0px;
    margin-right: 8px;
    height: 44px;
    width: 44px;

    background-color: ${({ color }) => {
      if (color === "pink") {
        return "#9c325c";
      }
      if (color === "rose") {
        return "#4c264b";
      }
      if (color === "purple") {
        return "#412973";
      }
    }};
  }
`;

const StyledGrid = styled(Grid)`
  margin-bottom: 16px;
`;

const StyledPaper = styled(Paper)`
  width: 30%;
  height: 40%;
`;

const background = `
  background-color: #0e0036;
  border-radius: 1em;
  padding: 1em;
`;

export { StyledButton, StyledGrid, StyledPaper, background };
