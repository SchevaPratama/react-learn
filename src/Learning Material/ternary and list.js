import './App.css';
import { User } from './User';
import { Planets } from './Planets';

function App() {
  //? Ternary operator
  // const movieRate = 6.7;
  // const isGreen = false;

  //* List
  // const listPerson = [
  //   { name: "Zio", age: 19 },
  //   { name: "Vei", age: 18 },
  //   { name: "Zordiev", age: 17 }
  // ];

  //* List exercise
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  return (
    <div className="App">
      //? Ternary operator
      {/* {movieRate >= 8.0 ? <h1>Masterpiece</h1> : <h1>Mid movie</h1>}
      <h1 style={{ color: isGreen ? "green" : "red" }}>{isGreen ? "Green" : "Red"}</h1> */}

      //* List
      {/* {listPerson.map((person, key) => {
        return <User name={person.name} age={person.age} key={key} />
      })} */}

      //* List exercise
      {/* {planets.map((planet, key) => {
        return <Planets name={planet.name} isGasPlanet={planet.isGasPlanet} key={key} />
      })} */}
      <Planets />
    </div>
  );
}

export default App;
