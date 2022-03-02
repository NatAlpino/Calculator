import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { StyledButton, StyledGrid, StyledPaper } from "./styledButton";
import {
  porcentage,
  clear,
  backspace,
  positNegative,
  inputNum,
  operatorHandler,
  results,
} from "../Logic/Logic";
import "./Calculator.css";

const Calculator = () => {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState(0);

  return (
    <Box m={5}>
      <StyledPaper elevation={10}>
        <div className="wrapper">
          <h1 className="display">{num}</h1>
          <StyledGrid
            container
            direction="row"
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
              onClick={(e) =>
                operatorHandler(e, setOperator, setOldNum, setNum, num)
              }
              value="/"
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
              onClick={(e) => inputNum(setNum, num, e)}
              value="2"
              size="small"
              color="rose"
            >
              2
            </StyledButton>
            <StyledButton
              onClick={(e) => inputNum(setNum, num, e)}
              value="3"
              size="small"
              color="rose"
            >
              3
            </StyledButton>
            <StyledButton
              onClick={(e) =>
                operatorHandler(e, setOperator, setOldNum, setNum, num)
              }
              value="X"
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
              onClick={(e) => inputNum(setNum, num, e)}
              value="4"
              size="small"
              color="rose"
            >
              4
            </StyledButton>
            <StyledButton
              onClick={(e) => inputNum(setNum, num, e)}
              value="5"
              size="small"
              color="rose"
            >
              5
            </StyledButton>
            <StyledButton
              onClick={(e) => inputNum(setNum, num, e)}
              value="6"
              size="small"
              color="rose"
            >
              6
            </StyledButton>
            <StyledButton
              onClick={(e) =>
                operatorHandler(e, setOperator, setOldNum, setNum, num)
              }
              value="+"
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
              onClick={(e) => inputNum(setNum, num, e)}
              value="7"
              size="small"
              color="rose"
            >
              7
            </StyledButton>
            <StyledButton
              onClick={(e) => inputNum(setNum, num, e)}
              value="8"
              size="small"
              color="rose"
            >
              8
            </StyledButton>
            <StyledButton
              onClick={(e) => inputNum(setNum, num, e)}
              value="9"
              size="small"
              color="rose"
            >
              9
            </StyledButton>
            <StyledButton
              onClick={(e) =>
                operatorHandler(e, setOperator, setOldNum, setNum, num)
              }
              value="-"
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
              onClick={(e) => inputNum(setNum, num, e)}
              value="."
              size="small"
              color="pink"
            >
              .
            </StyledButton>
            <StyledButton
              onClick={(e) => inputNum(setNum, num, e)}
              value="0"
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
        </div>
      </StyledPaper>
    </Box>
  );
};

export default Calculator;
