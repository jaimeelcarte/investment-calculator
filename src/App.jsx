import React, { useState } from "react";
import UserInput from "./UserInput";
import ResultsTable from "./ResultsTable";

const INITIAL_RESULTS_TABLE = [
  {
    year: 1,
    investmentValue: 0,
    interest: 0,
    totalInterest: 0,
    investedCapital: 0,
  },
  {
    year: 1,
    investmentValue: 0,
    interest: 0,
    totalInterest: 0,
    investedCapital: 0,
  },
  {
    year: 1,
    investmentValue: 0,
    interest: 0,
    totalInterest: 0,
    investedCapital: 0,
  },
  {
    year: 1,
    investmentValue: 0,
    interest: 0,
    totalInterest: 0,
    investedCapital: 0,
  },
  {
    year: 1,
    investmentValue: 0,
    interest: 0,
    totalInterest: 0,
    investedCapital: 0,
  },
];

function App() {
  return (
    <>
      <div id="header">
        <img src="src/assets/investment-calculator-logo.png" />
        <h1>React Investment Calculator</h1>
      </div>
      <UserInput />
      <ResultsTable results={INITIAL_RESULTS_TABLE} />
    </>
  );
}

export default App;
