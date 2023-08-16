import { tUser } from "./App";

const User = ({ user, name }: { user: tUser; name: string; }) => {
    return <>
        <p>name : {user.name} </p>
        <p>gender : {user.gender}</p>
        <p>id : {user.id}</p>
        <p>password : {user.password}</p>
    </>
}

export default User;