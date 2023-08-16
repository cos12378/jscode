import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ members, handleLogin }) => {
    const [loginInfo, setLoginInfo] = useState({
        id: "",
        password: ""
    });

    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setLoginInfo({ ...loginInfo, [name]: value });
    };

    const login = (e) => {
        e.preventDefault();

        const matchedMember = members.find(
            (m) =>
                m.name == loginInfo.id && m.number == loginInfo.password
        );

        if (matchedMember) {
            localStorage.setItem("loggedInUser", JSON.stringify(matchedMember));
            alert("로그인 성공!");
            handleLogin(matchedMember.id);
            navigate(`/members/${matchedMember.id}`);
        } else {
            alert("로그인 실패!");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <input
                    name="id"
                    value={loginInfo.id}
                    onChange={onChangeHandler}
                ></input>
                <input
                    name="password"
                    value={loginInfo.password}
                    onChange={onChangeHandler}
                ></input>
                <input type="submit" value="login"></input>
            </form>
        </div>
    );
};

export default Login;
