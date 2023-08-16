import { useParams } from "react-router";

const User = ({ props }) => {
    const params = useParams()
    const user = props.users.find(u => params.name === u.name)
    console.log(useParams())
    return <ul>
        <li>{user?.name}</li>
        <li>{user?.id}</li>
        <li>{user?.password}</li>
    </ul>

}

export default User;