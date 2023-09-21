import { useParams, useNavigate } from "react-router-dom"
export const Profile = () => {
    let { username } = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <h1>This is the profile page for {username} </h1>
            <button onClick={() => navigate('/listperson')}>Go to list person page</button>
        </div>
    )
}