import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import {
  StyledButton,
  StyledGrid,
  StyledPaper,
  StyledTextField,
} from "../StyledComponents/exports";
import {
  porcentage,
  clear,
  backspace,
  positNegative,
  inputNum,
  operatorHandler,
  results,
} from "../Buttons/logicButton";

const Calculator = () => {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState(0);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <StyledPaper elevation={10}>
        <StyledGrid>
          <StyledTextField
            placeholder="0"
            variant="outlined"
            disabled={true}
            value={num}
          ></StyledTextField>
        </StyledGrid>

        <StyledGrid
          container
          maxWidth="xs"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <StyledButton
            onClick={() => clear(setNum)}
            value="AC"
            size="small"
            color="pink"
          >
            AC
          </StyledButton>
          <StyledButton
            onClick={() => backspace(setNum)}
            value="C"
            size="small"
            color="pink"
          >
            C
          </StyledButton>
          <StyledButton
            onClick={() => porcentage(setNum, num)}
            value="%"
            size="small"
            color="pink"
          >
            %
          </StyledButton>
          <StyledButton
            onClick={() =>
              operatorHandler("/", setOperator, setOldNum, setNum, num)
            }
            size="small"
            color="purple"
          >
            /
          </StyledButton>
        </StyledGrid>
        <StyledGrid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <StyledButton
            onClick={() => inputNum(setNum, num, 1)}
            size="small"
            color="rose"
          >
            1
          </StyledButton>
          <StyledButton
            onClick={() => inputNum(setNum, num, 2)}
            size="small"
            color="rose"
          >
            2
          </StyledButton>
          <StyledButton
            onClick={() => inputNum(setNum, num, 3)}
            size="small"
            color="rose"
          >
            3
          </StyledButton>
          <StyledButton
            onClick={() =>
              operatorHandler("X", setOperator, setOldNum, setNum, num)
            }
            size="small"
            color="purple"
          >
            X
          </StyledButton>
        </StyledGrid>
        <StyledGrid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <StyledButton
            onClick={() => inputNum(setNum, num, 4)}
            size="small"
            color="rose"
          >
            4
          </StyledButton>
          <StyledButton
            onClick={() => inputNum(setNum, num, 5)}
            size="small"
            color="rose"
          >
            5
          </StyledButton>
          <StyledButton
            onClick={() => inputNum(setNum, num, 6)}
            size="small"
            color="rose"
          >
            6
          </StyledButton>
          <StyledButton
            onClick={() =>
              operatorHandler("+", setOperator, setOldNum, setNum, num)
            }
            size="small"
            color="purple"
          >
            +
          </StyledButton>
        </StyledGrid>
        <StyledGrid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <StyledButton
            onClick={() => inputNum(setNum, num, 7)}
            size="small"
            color="rose"
          >
            7
          </StyledButton>
          <StyledButton
            onClick={() => inputNum(setNum, num, 8)}
            size="small"
            color="rose"
          >
            8
          </StyledButton>
          <StyledButton
            onClick={() => inputNum(setNum, num, 9)}
            size="small"
            color="rose"
          >
            9
          </StyledButton>
          <StyledButton
            onClick={() =>
              operatorHandler("-", setOperator, setOldNum, setNum, num)
            }
            size="small"
            color="purple"
          >
            -
          </StyledButton>
        </StyledGrid>
        <StyledGrid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <StyledButton
            onClick={() => inputNum(setNum, num, ".")}
            size="small"
            color="pink"
          >
            .
          </StyledButton>
          <StyledButton
            onClick={() => inputNum(setNum, num, 0)}
            size="small"
            color="rose"
          >
            0
          </StyledButton>
          <StyledButton
            onClick={() => positNegative(setNum, num)}
            value="+/-"
            size="small"
            color="pink"
          >
            +/-
          </StyledButton>
          <StyledButton
            onClick={() => results(setNum, oldNum, operator, num)}
            value="="
            size="small"
            color="pink"
          >
            =
          </StyledButton>
        </StyledGrid>
      </StyledPaper>
    </Grid>
  );
};

export default Calculator;
