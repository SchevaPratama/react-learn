import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [excuseData, setExcuseData] = useState("");

  const fetchExcuseData = (typeExcuse) => {
    axios.get(`https://excuser-three.vercel.app/v1/excuse/family/`).then((res) => {
      setExcuseData(res.data[0].excuse)
    })
  };

  return (
    <div className="App">
      <button onClick={fetchExcuseData("Family")}>Generate Family Data</button>
      <button onClick={fetchExcuseData("Party")}>Generate Party Data</button>
      <button onClick={fetchExcuseData("Office")}>Generate Office Data</button>
      <p> anjay {excuseData} </p>
    </div>
  );
}

export default App;
