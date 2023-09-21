import { Link } from "react-router-dom"
const listPerson = [
    { name: "Zio", age: 19 },
    { name: "Vei", age: 18 },
    { name: "Zordiev", age: 17 }
];
export const ListPerson = () => {
    return (
        <div>
            <h1>This is the ListPerson page</h1>
            <h3>List Person</h3>
            <ul>
                {listPerson.map((person, key) => {
                    return <li>
                        <h1><Link to={`/profile/${person.name}`} key={key}>{person.name}</Link></h1>
                        <h1>{person.age}</h1>
                    </li>
                })}
            </ul>
        </div>
    )
}