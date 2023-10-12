import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import InvestmentContent from "./components/InvestmentContent";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];
  if (userInput) {
    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlySavings;
    const expectedReturn = +userInput.expectedSavings / 100;
    const duration = +userInput.investmentDuration;
    let totalInterest = 0;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest = totalInterest + yearlyInterest;
      yearlyData.push({
        year: i + 1,
        savingsEndOfYear: currentSavings.toFixed(2),
        yearlyInterest: yearlyInterest.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        yearlyContribution:
          parseFloat(userInput.currentSavings) +
          yearlyContribution * (i + 1).toFixed(2),
      });
    }
  }

  const resetHandler = () => {
    setUserInput(null);
  };

  let message = <p id="message">No Data Entered Yet.</p>;

  if (yearlyData.length > 0) {
    message = <InvestmentContent yearlyData={yearlyData} />;
  }

  return (
    <div>
      <Header />

      <Form calculateHandler={calculateHandler} resetHandler={resetHandler} />

      {message}
    </div>
  );
}

export default App;
