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
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <ResultsTable results={data} />
    </>
  );
}

export default App;
