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
      <Header />
      <UserInput />
      <ResultsTable results={INITIAL_RESULTS_TABLE} />
    </>
  );
}

export default App;
