import React from "react";

function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currentOption = [],
  selectCurrency = "inr",
  amountDisable = false,
  currentDisable = false,
}) {
  return (
    <div>
      <label htmlFor="inputPassword5" className="form-label">
        {label}
      </label>
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          aria-label="Text input with dropdown button"
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
        <select
          className="bg-info rounded-end"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currentDisable}
        >
          {currentOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
