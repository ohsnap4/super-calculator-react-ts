import { useState } from "react";
import "./App.css";
const App = () => {
  const [calculate, setCalculate] = useState("");
  const [result, setResult] = useState("");
  const operators = ["/", "*", "+", "-"];
  const updateCalculator = (value: string) => {
    if (
      (operators.includes(value) && calculate == "") ||
      (operators.includes(value) && operators.includes(calculate.slice(-1)))
    ) {
      return;
    }
    setCalculate(calculate + value);
    if (!operators.includes(value)) {
      setResult(eval(calculate + value).toString());
    }
  };
  const calculateAsnwer = () => {
    setCalculate(eval(calculate).toString());
  };
  const removeLastDigit = () => {
    if (calculate == "") {
      return;
    }
    const value = calculate.slice(0, -1);
    setCalculate(value);
  };
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalculator(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };
  return (
    <>
      <div
        style={{
          fontSize: "4rem",
          fontWeight: "900",
          textAlign: "center",
          paddingTop: "3rem",
        }}
      >
        Super Calculator
      </div>
      <div className="App">
        <div className="calculator">
          <div className="display">
            {result ? <span>({result})</span> : ""}
            {calculate || "0"}
          </div>
          <div className="operators">
            <button onClick={() => updateCalculator("/")}>/</button>
            <button onClick={() => updateCalculator("*")}>*</button>
            <button onClick={() => updateCalculator("+")}>+</button>
            <button onClick={() => updateCalculator("-")}>-</button>

            <button onClick={() => removeLastDigit()}>DEL</button>
          </div>
          <div className="digits">
            {createDigits()}
            <button onClick={() => updateCalculator("0")}>0</button>
            <button onClick={() => updateCalculator(".")}>.</button>
            <button onClick={() => calculateAsnwer()}>=</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
