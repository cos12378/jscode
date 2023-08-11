import React, { useState } from "react";
import Signup from "./Signup";

const ListSignup = () => {
    const [users, setUsers] = useState([{ id: 0, isSuccess: false }]);

    const addUser = () => {
        setUsers(prevUsers => [...prevUsers, { id: prevUsers.length, isSuccess: false }]);
    };

    const signupSuccess = (i) => {
        const u = users.map((el, index, arr) => index === i ?
            { ...el, isSuccess: true } : el)
        setUsers(u)
    };

    const removeUser = (i = prevUsers.length - 1) => {
        setUsers(prevUsers => prevUsers.slice(0, i));
    }



    return (
        <>
            {users
                .filter(el => !el.isSuccess)
                .map(el => (
                    <Signup
                        key={el.id}
                        cid={el.id}
                        signupSuccess={() => signupSuccess(el.id)}
                        removeUser={removeUser}
                    />
                ))}
            <button onClick={addUser}>▼</button>
            <button onClick={() => removeUser()}>▲</button>
        </>
    );
};

export default ListSignup;
