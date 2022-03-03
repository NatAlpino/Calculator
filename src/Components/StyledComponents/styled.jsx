import styled from "styled-components";
import { IconButton, Grid, Paper, TextField } from "@material-ui/core";

const StyledTextField = styled(TextField)`
  input {
    width: 100%;
    height: 100%;
    margin-right: 10px;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    text-align: right;
    font-weight: bold;
    font-size: 24px;
    background-color: #c4a7fa;
    border-radius: 0.5em;
    border: none;
  }
  opacity: 0.3;
`;

const StyledButton = styled(IconButton)`
  && {
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
  display: inline-block;
  margin-left: 40%;
  margin-top: 2%;
  align-items: center;
  width: 30%;
  border-radius: 2em;
`;

export { StyledButton, StyledGrid, StyledPaper, StyledTextField };
