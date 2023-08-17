import { useNavigate } from 'react-router';
import { Input } from "reactstrap"
import { useState } from "react"
import { apiNoToken } from './Api';
import '../login.css'

const Signup = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
        name: ""
    })

    const [message, setMessage] = useState('');

    const nav = useNavigate()

    const onChangeHandler = (e) => {
        const { value, name } = e.target
        setUser({ ...user, [name]: value })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(user)
        try {
            await apiNoToken('/api/v1/auth/register', 'POST', user)
            alert('회원가입 성공')
            nav('/login')
        } catch (error) {
            console.log(error.response.data)
            alert('회원가입 실패')
        }
    }
    return <div>
        <form onSubmit={onSubmitHandler}>
            <Input required name="email" placeholder="email" onChange={onChangeHandler} minLength={4}></Input>
            <p style={{ color: 'red' }}>{message}</p>
            <Input required name="password" placeholder="password" type="password" onChange={onChangeHandler} minLength={4}></Input>
            <Input required name="name" placeholder="name" onChange={onChangeHandler}></Input>
            <Input type="submit" value="회원가입" onSubmit={onSubmitHandler}></Input>
        </form>
    </div >
}

export default Signup