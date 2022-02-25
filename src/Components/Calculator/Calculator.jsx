import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
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
      <Container maxWidth="xs">
        <Paper elevation={24}>
          <div className="wrapper">
            <h1 className="display">{num}</h1>
            <button className="pink" onClick={() => clear(setNum)} value="AC">
              AC
            </button>
            <button
              className="pink"
              onClick={() => backspace(setNum)}
              value=""
            >
              C
            </button>
            <button
              className="pink"
              onClick={() => porcentage(setNum, num)}
              value="%"
            >
              %
            </button>
            <button
              className="purple"
              onClick={(e) =>
                operatorHandler(e, setOperator, setOldNum, setNum, num)
              }
              value="/"
            >
              /
            </button>
            <button
              className="number"
              onClick={(e) => inputNum(setNum, num, e)}
              value="1"
            >
              1
            </button>
            <button
              className="number"
              onClick={(e) => inputNum(setNum, num, e)}
              value="2"
            >
              2
            </button>
            <button
              className="number"
              onClick={(e) => inputNum(setNum, num, e)}
              value="3"
            >
              3
            </button>
            <button
              className="purple"
              onClick={(e) =>
                operatorHandler(e, setOperator, setOldNum, setNum, num)
              }
              value="X"
            >
              X
            </button>
            <button
              className="number"
              onClick={(e) => inputNum(setNum, num, e)}
              value="4"
            >
              4
            </button>
            <button
              className="number"
              onClick={(e) => inputNum(setNum, num, e)}
              value="5" 
            >
              5
            </button>
            <button
              className="number"
              onClick={(e) => inputNum(setNum, num, e)}
              value="6"
            >
              6
            </button>
            <button
              className="purple"
              onClick={(e) =>
                operatorHandler(e, setOperator, setOldNum, setNum, num)
              }
              value="+"
            >
              +
            </button>
            <button
              className="number"
              onClick={(e) => inputNum(setNum, num, e)}
              value="7"
            >
              7
            </button>
            <button
              className="number"
              onClick={(e) => inputNum(setNum, num, e)}
              value="8"
            >
              8
            </button>
            <button
              className="number"
              onClick={(e) => inputNum(setNum, num, e)}
              value="9"
            >
              9
            </button>
            <button
              className="purple"
              onClick={(e) =>
                operatorHandler(e, setOperator, setOldNum, setNum, num)
              }
              value="-"
            >
              -
            </button>
            <button
              className="number"
              onClick={(e) => inputNum(setNum, num, e)}
              value="."
            >
              .
            </button>
            <button
              className="number"
              onClick={(e) => inputNum(setNum, num, e)}
              value="0"
            >
              0
            </button>
            <button
              className="pink"
              onClick={() => positNegative(setNum, num)}
              value="+/-"
            >
              +/-
            </button>
            <button
              className="results"
              onClick={() => results(setNum, oldNum, operator, num)}
              value="="
            >
              =
            </button>
          </div>
        </Paper>
      </Container>
    </Box>
  );
};

export default Calculator;
