import React, { useState } from "react";
import Signup from "./Signup";

// 1.조건 만족시 회원가입
// 2. 전체 회원가입
// 3. 조건 만족 한 사람만 전체 회원가입 

const ListSignup = () => {

    const [isIdAvailable, setIsIdAvailable] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const isPasswordMatch = password === repassword;

    const [users, setUsers] = useState([{ id: 0, isSuccess: false }]);

    const addUser = () => {
        setUsers(prev => [...prev, { id: prev[prev.length - 1].id + 1, isSuccess: false }]);
    };

    const signupSuccess = (i) => {
        const u = users.map((el, index) => index === i ? { ...el, isSuccess: true } : el);
        setUsers(u);
    };

    const removeUser = () => {
        setUsers(prevUsers => prevUsers.slice(0, prevUsers.length - 1));
    };

    const signupAllUsers = () => {
        const updatedUsers = users.map(user => ({
            ...user,
            isSuccess: isPasswordMatch && isIdAvailable
        }));
        setUsers(updatedUsers);
    };

    const renderButtons = () => {
        return (
            <>
                <button onClick={addUser}>▼</button>
                <button onClick={() => removeUser()}>▲</button>
            </>
        );
    };

    return (
        <div>
            {users.map((el, i) => (
                <Signup
                    key={i}
                    cid={el.id}
                    signupSuccess={() => signupSuccess(el.id)}
                    removeUser={removeUser}
                    isPasswordMatch={isPasswordMatch}
                    isIdAvailable={isIdAvailable}
                />
            ))}
            {users.every(user => user.isSuccess) ? (
                <p>All users signed up!</p>
            ) : (
                <>
                    {renderButtons()}
                    <button onClick={() => signupAllUsers(isIdAvailable, isPasswordMatch)}>전체 회원가입</button>
                </>
            )}
        </div>
    );
};

export default ListSignup;




