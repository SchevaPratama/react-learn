import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <br />
            <Link to={"/listperson"}>List Person</Link>
            <br />
            <Link to={"/contact"}>Contact</Link>
        </div>
    )
}