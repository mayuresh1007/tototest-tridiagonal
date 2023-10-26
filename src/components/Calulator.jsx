import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter expression"
      />
      <div className="buttons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="result">
        <button onClick={clearInput}>Clear</button>
        <button onClick={calculateResult}>=</button>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default Calculator;
