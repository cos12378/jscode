import React, { useState } from "react";
import BoxInput from "../playcolor/BoxInput";
import ListSignup from "./ListSignup";


const Signup = ({ cid, signupSuccess }) => {
    const users = [{ id: '1q2w3e' }, { id: 'park' }, { id: '1234' }];
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [isIdAvailable, setIsIdAvailable] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const onBlurId = () => {
        const idAvailable = users.every(user => user.id !== id);
        setIsIdAvailable(idAvailable);
    };

    const onChangeId = (e) => {
        setId(e.target.value);
        setIsIdAvailable(true);
    };

    const onChangePassword = (e) => setPassword(e.target.value);
    const onChangeRepassword = (e) => setRepassword(e.target.value);

    const isPasswordMatch =
        password === repassword;

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center" }}>
            <input name="id" placeholder="아이디" onChange={onChangeId} onBlur={onBlurId} />
            <div>{isIdAvailable ? "" : <p style={{ color: "red" }}>"아이디가 이미 존재합니다"</p>}</div>
            <input name="password" type={showPassword ? "text" : "password"} placeholder="비밀번호" onChange={onChangePassword} />
            <input name="repassword" type={showPassword ? "text" : "password"} placeholder="비밀번호 확인" onChange={onChangeRepassword} />
            {!isPasswordMatch && <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다</p>}
            <button onClick={toggleShowPassword}>
                {showPassword ? "비밀번호 감추기" : "비밀번호 보여주기"}
            </button>
            <button onClick={() => signupSuccess(cid)}>회원가입</button>
            <button onClick={<ListSignup />}>취소</button>

        </div>

    );
};

export default Signup;

