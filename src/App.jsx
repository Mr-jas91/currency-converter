import { useState } from "react";
import Input from "./components/Input";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("npr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        convert();
      }}
    >
      <div className="border rounded bg-secondary position-absolute top-50 start-50 translate-middle p-3">
        <Input
          label="from"
          amount={amount}
          currentOption={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          onAmountChange={(amount) => {
            amount >= 0 ? setAmount(amount) : setAmount(0);
            console.log(amount)
          }}
        />
        <Input
          label="to"
          amount={convertedAmount}
          currentOption={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          amountDisable
        />
        <div className="d-grid">
          <button className="btn btn-primary">convert</button>
        </div>
      </div>
    </form>
  );
}

export default App;
