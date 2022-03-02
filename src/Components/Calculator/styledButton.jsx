import styled from "styled-components";
import { IconButton, Grid, Paper } from "@material-ui/core";

const StyledButton = styled(IconButton)`
  && {
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
      0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
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
      if (color === "wrapper") {
        return "#0e0036";
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

export { StyledButton, StyledGrid, StyledPaper };