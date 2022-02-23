import React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import "./Calculator.css";

const pink = createTheme({
  palette: {
    primary: {
      main: '#9c325c',
    },
  }
})

const number = createTheme({
  palette: {
    primary: {
      main: '#4c264b',
    },
  }
})

const purple = createTheme({
  palette: {
    primary: {
      main: '#412973',
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
            <ThemeProvider theme={pink}>
            <Button onClick={clear}>
              AC
            </Button>
            <Button>Clear</Button>
            <Button onClick={porcentage}>
              %
            </Button>
            </ThemeProvider>
            <ThemeProvider theme={purple}> 
            <Button onClick={operatorHandler} value="/">
              /
            </Button>
            </ThemeProvider>
            <ThemeProvider theme={number}> 
            <Button onClick={inputNum} value={1}>
              1
            </Button>
            <Button onClick={inputNum} value={2}>
              2
            </Button>
            <Button onClick={inputNum} value={3}>
              3
            </Button>
            </ThemeProvider>
            <ThemeProvider theme={purple}> 
            <Button onClick={operatorHandler} value="X">
              X
            </Button>
            </ThemeProvider>
            <ThemeProvider theme={number}> 
            <Button onClick={inputNum} value={4}>
              4
            </Button>
            <Button onClick={inputNum} value={5}>
              5
            </Button>
            <Button onClick={inputNum} value={6}>
              6
            </Button>
            </ThemeProvider>
            <ThemeProvider theme={purple}> 
            <Button onClick={operatorHandler} value="+">
              +
            </Button>
            </ThemeProvider>
            <ThemeProvider theme={number}>
            <Button onClick={inputNum} value={7}>
              7
            </Button>
            <Button onClick={inputNum} value={8}>
              8
            </Button>
            <Button onClick={inputNum} value={9}>
              9
            </Button>
            </ThemeProvider>
            <ThemeProvider theme={purple}>
            <Button onClick={operatorHandler} value="-">
              -
            </Button>
            </ThemeProvider>
            <ThemeProvider theme={number}>
            <Button onClick={inputNum} value={"."}>
              .
            </Button>
            <Button onClick={inputNum} value={0}>
              0
            </Button>
            </ThemeProvider>
            <ThemeProvider theme={pink}>
            <Button onClick={positNegative}>
              +/-
            </Button>
            <Button onClick={results} value="=">
              =
            </Button>
            </ThemeProvider>
          </div>
        </Paper>
      </Container>
    </Box>
  );
}
