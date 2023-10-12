import { useState } from "react";

const initialInput = {
  currentSavings: "",
  yearlySavings: "",
  expectedSavings: "",
  investmentDuration: "",
};

const Form = (props) => {
  const [investment, setInvsetment] = useState(initialInput);

  const handleSubmit = (e) => {
    e.preventDefault();

    props.calculateHandler(investment);
  };

  const handleReset = (e) => {
    e.preventDefault();

    setInvsetment(initialInput);

    props.resetHandler();
  };

  const inputHandleChange = (input, value) => {
    setInvsetment((prevValue) => {
      return { ...prevValue, [input]: +value };
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit} onReset={handleReset}>
      <div className="input-group">
        <p>
          <label htmlFor="currentSavings">Current Savings ($)</label>
          <input
            value={investment.currentSavings}
            onChange={(event) =>
              inputHandleChange("currentSavings", event.target.value)
            }
            type="number"
            id="currentSavings"
          />
        </p>
        <p>
          <label htmlFor="yearlySavings">Yearly Savings ($)</label>
          <input
            value={investment.yearlySavings}
            onChange={(event) =>
              inputHandleChange("yearlySavings", event.target.value)
            }
            type="number"
            id="yearlySavings"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedSavings">
            Expected Interest (%, per year)
          </label>
          <input
            value={investment.expectedSavings}
            onChange={(event) =>
              inputHandleChange("expectedSavings", event.target.value)
            }
            type="number"
            id="expectedSavings"
          />
        </p>
        <p>
          <label htmlFor="investmentDuration">
            Investment Duration (years)
          </label>
          <input
            value={investment.investmentDuration}
            onChange={(event) =>
              inputHandleChange("investmentDuration", event.target.value)
            }
            type="number"
            id="investmentDuration"
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
