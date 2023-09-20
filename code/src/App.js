import Header from "./components/Header/Header";
import ResultTable from "./components/ResultTable/ResultTable";
import FromInput from "./components/FormInput/FormInput";
import {useState} from "react";
function App() {
  const [userInput, setYearlyData] = useState(null);
  console.log(userInput);
  const calculateHandler = (userInput) => {
    setYearlyData(userInput);
  }
  const resetHandler = () => {
    setYearlyData(null);
  }

    const yearlyData = []; // per-year results
  if(userInput){
    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header/>

      <FromInput onAddData={calculateHandler} onResetData={resetHandler}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {!userInput && <p style={{textAlign: 'center'}}>No investment calculated yet.</p>}
      {userInput && <ResultTable data={yearlyData} current={userInput['current-savings']}/>}
    </div>
  );
}

export default App;
