import { Link } from "react-router-dom"
import { useNavigate } from 'react-router';
import { api } from "../auoth/Api";
import { useEffect } from "react"

const MyHeader = ({ me, setMe }) => {
    const nav = useNavigate();
    const logout = () => {
        localStorage.clear()
        setMe({
            id: "",
            money: 0,
            name: "",
            token: ""
        });
        nav('/login')
    }

    const getMe = async () => {
        try {
            const data = await api('/api/v1/users/me', 'GET')
            setMe(data)
        } catch (error) {
            nav(
                '/login'
            )
        }
    }
    useEffect(() => {
        getMe()
    }, [])

    return <header>
        <Link to="/home"><h1>Home</h1></Link>
        <p>{me.name}</p>
        <p>잔고: {me.money}</p>
        <button onClick={logout}>로그아웃</button>
    </header>
}

export default MyHeader