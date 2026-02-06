import React, { useState } from "react";
import "./Calculator.css";
import { Parser } from "expr-eval";

function Calculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setExpression("");
      setResult("");
    } 
    else if (value === "=") {
      if (!expression) {
        setResult("Error");
      } else {
        try {
          const evalResult = eval(expression);
          setResult(evalResult);
        } catch {
          setResult("Error");
        }
      }
    } 
    else {
      setExpression((prev) => prev + value);
    }
  };

  const buttons = [
    "7","8","9","+",
    "4","5","6","-",
    "1","2","3","*",
    "C","0","=","/"
  ];

  return (
    <div className="wrapper">
      <div className="calculator">
        <h1>React Calculator</h1>

        <input type="text" value={expression} readOnly />

        <div className="result">{result}</div>

        <div className="grid">
          {buttons.map((btn, index) => (
            <button key={index} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
