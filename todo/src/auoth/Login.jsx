import { useNavigate } from 'react-router-dom';
import { Input } from "reactstrap";
import { useState } from 'react'
import { apiNoToken } from './Api';
import '../login.css'

const Login = ({ setMe }) => {
    const nav = useNavigate()
    const goToSignup = () => {
        nav('/signup')
    }

    const [user, setUser] = useState({
        email: "",
        password: "",
        name: ""
    })

    const [message, setMessage] = useState('');


    const onChangeHandler = (e) => {
        const { value, name } = e.target
        setUser({ ...user, [name]: value })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(user)
        try {
            const member = await apiNoToken('/api/v1/auth/login', 'POST', user)
            setMessage("")
            alert('성공')
            localStorage.setItem('token', member.data.token)
            setMe(member.data)
            nav('/home')
        } catch (error) {
            console.log(error.response.data)
        }
    }
    return <div>
        <form onSubmit={onSubmitHandler}>
            <Input required name="email" placeholder="email" onChange={onChangeHandler} minLength={4}></Input>
            <p style={{ color: 'red' }}>{message}</p>
            <Input required name="password" placeholder="password" type="password" onChange={onChangeHandler} minLength={4}></Input>
            <Input className="signup-button" type='submit' value="로그인"></Input>
        </form>
        <button className="signup-button" onClick={goToSignup}>회원가입</button>
    </div >
}

export default Login;
