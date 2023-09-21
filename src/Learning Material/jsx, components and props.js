import './App.css';

function App() {
  const name = <h1>Zio</h1>;
  return (
    <div className="App">
      <Job salary={15000} position="Junior Developer" company="Meta" />
      <Job salary={20000} position="Intermediate Developer" company="Netflix" />
      <Job salary={30000} position="Senior Developer" company="Google" />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1> Salary: ${props.salary} </h1>
      <h1> Position: {props.position} </h1>
      <h1> Company: {props.company} </h1>
    </div>
  )
}

export default App;
