import './App.css';
import { useState } from 'react';


function App() {
  //? useState track onChange on input
  // const [inputValue, setInputValue] = useState("");
  // const changeInputValue = (event) => {
  //   setInputValue(event.target.value)
  // }

  //? useState to change text color
  // const [textColor, setTextColor] = useState("black");

  // const changeTextColor = (event) => {
  //   setTextColor(textColor === "black" ? "red" : "black")
  // }

  //* useState exercise 
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const setZeroCount = () => {
    setCount(0)
  }

  return (
    <div className="App">
      {/* //? useState track onChange on input */}
      {/* <input type='text' onChange={changeInputValue} />
      <br />
      {inputValue} */}
      {/* //? useState to change text color */}
      {/* <button onClick={changeTextColor}>Change Color</button>
      <h1 style={{ color: textColor }}>Hi my name Zio</h1> */}
      {/* //* useState exercie */}
      <h1>{count}</h1>
      <br />
      <button onClick={decreaseCount} style={{ marginRight: 5 }} disabled={count == 0}>Decrease</button>
      <button onClick={setZeroCount} style={{ marginRight: 5 }}>Set To Zero</button>
      <button onClick={increaseCount} style={{ marginRight: 5 }}>Increase</button>
    </div>
  );
}

export default App;
