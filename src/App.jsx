import React, { useState } from "react";
import "./styles.css";

function Box({ value, onClick }) {
  return (
    <button className="key" onClick={() => onClick(value)}>
      {value}
    </button>
  );
}
export default function App() {
  const [arith, setarith] = useState("0");
  const handleclick = (value) => {
    if (value === "=") {
      setarith(eval(arith).toString());
    } else if (value === "AC") {
      setarith("0");
    } else {
      setarith((prevarith) => {
        if (prevarith === "0") {
          return value;
        } else {
          return prevarith + value;
        }
      });
    }
  };
  return (
    <>
      <h2 className="calculation">{arith}</h2>
      <div className="calculator-row">
        <Box value="1" onClick={handleclick} />
        <Box value="2" onClick={handleclick} />
        <Box value="3" onClick={handleclick} />
        <Box value="AC" onClick={handleclick} />
      </div>
      <div className="calculator-row">
        <Box value="4" onClick={handleclick} />
        <Box value="5" onClick={handleclick} />
        <Box value="6" onClick={handleclick} />
        <Box value="+" onClick={handleclick} />
      </div>
      <div className="calculator-row">
        <Box value="7" onClick={handleclick} />
        <Box value="8" onClick={handleclick} />
        <Box value="9" onClick={handleclick} />
        <Box value="-" onClick={handleclick} />
      </div>
      <div className="calculator-row">
        <Box value="*" onClick={handleclick} />
        <Box value="0" onClick={handleclick} />
        <Box value="/" onClick={handleclick} />
        <Box value="=" onClick={handleclick} />
      </div>
    </>
  );
}
