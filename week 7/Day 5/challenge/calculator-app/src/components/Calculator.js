import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Please enter valid numbers");
      return;
    }

    let res;
    switch (operation) {
      case "add":
        res = number1 + number2;
        break;
      case "subtract":
        res = number1 - number2;
        break;
      case "multiply":
        res = number1 * number2;
        break;
      case "divide":
        if (number2 === 0) {
          res = "Cannot divide by zero";
        } else {
          res = number1 / number2;
        }
        break;
      default:
        res = "Invalid operation";
    }

    setResult(res);
  };

  return (
    <div style={{ maxWidth: "300px", margin: "auto", textAlign: "center" }}>
      <h2>React Calculator</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ marginBottom: "10px", width: "100%" }}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ marginBottom: "10px", width: "100%" }}
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        style={{ marginBottom: "10px", width: "100%" }}
      >
        <option value="add">Addition (+)</option>
        <option value="subtract">Subtraction (-)</option>
        <option value="multiply">Multiplication (×)</option>
        <option value="divide">Division (÷)</option>
      </select>

      <button onClick={handleCalculate} style={{ width: "100%" }}>
        Calculate
      </button>

      {result !== null && (
        <h3 style={{ marginTop: "20px" }}>
          Result: {typeof result === "number" ? result.toFixed(4) : result}
        </h3>
      )}
    </div>
  );
}

export default Calculator;
