import { useState } from "react";
import Header from "./assets/components/Header";
import UserInput from "./assets/components/UserInput";
import Results from "./assets/components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;
  return (
    <>
      <Header />
      <UserInput userInputObject={userInput} onChangeInput={handleChange} />
      {inputIsValid ? <Results userInputObject={userInput} /> : <p className="center">Please enter a duration greater than 0</p>}
    </>
  );
}

export default App;
