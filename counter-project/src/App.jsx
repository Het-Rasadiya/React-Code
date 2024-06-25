import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    counter = 0;
    setCounter(counter);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Cunter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value </button>
    </>
  );
}

export default App;
