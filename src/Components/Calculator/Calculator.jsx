import React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import "./Calculator.css";

const colorButton = createTheme({
  palette: {
    primary: {
      main: '#9c325c',
    },
  }
})

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState(0);

  function inputNum(e) {
    var input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }

  function porcentage() {
    setNum(num / 100);
  }

  function positNegative() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num)); //math.abs serve para transformar numeros negativos em positivos e vice e versa
    }
  }
  function operatorHandler(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function results() {
    if (operator === "/") {
      setNum(oldNum / num);
    } else if (operator === "X") {
      setNum(oldNum * num);
    } else if (operator === "+") {
      setNum(parseFloat(oldNum) + parseFloat(num));
    } else if (operator === "-") {
      setNum(oldNum - num);
    }
  }

  return (
    <Box m={5}>
      <Container maxWidth="xs">
        <Paper elevation={24}>
          <div className="wrapper">
            <h1 className="display">{num}</h1>
            <ThemeProvider theme={colorButton}>
            <button className="pink" onClick={clear}>
              AC
            </button>
            <button className="pink">Clear</button>
            <button className="pink" onClick={porcentage}>
              %
            </button>
            <button className="purple" onClick={operatorHandler} value="/">
              /
            </button>
            <button className="number" onClick={inputNum} value={1}>
              1
            </button>
            <button className="number" onClick={inputNum} value={2}>
              2
            </button>
            <button className="number" onClick={inputNum} value={3}>
              3
            </button>
            <button className="purple" onClick={operatorHandler} value="X">
              X
            </button>
            <button className="number" onClick={inputNum} value={4}>
              4
            </button>
            <button className="number" onClick={inputNum} value={5}>
              5
            </button>
            <button className="number" onClick={inputNum} value={6}>
              6
            </button>
            <button className="purple" onClick={operatorHandler} value="+">
              +
            </button>
            <button className="number" onClick={inputNum} value={7}>
              7
            </button>
            <button className="number" onClick={inputNum} value={8}>
              8
            </button>
            <button className="number" onClick={inputNum} value={9}>
              9
            </button>
            <button className="purple" onClick={operatorHandler} value="-">
              -
            </button>
            <button className="number" onClick={inputNum} value={"."}>
              .
            </button>
            <button className="number" onClick={inputNum} value={0}>
              0
            </button>
            <button className="pink" onClick={positNegative}>
              +/-
            </button>
            <button className="results" onClick={results} value="=">
              =
            </button>
            </ThemeProvider>
          </div>
        </Paper>
      </Container>
    </Box>
  );
}
