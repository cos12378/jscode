import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Signup from '../auoth/Signup';
import Login from '../auoth/Login';
import Home from '../components/name/Home';
import { useState } from 'react'
import Template from '../template/Template';

const MyRouters = () => {
    const [me, setMe] = useState({
        id: "",
        money: 0,
        name: "",
        token: ""

    })

    return <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login setMe={setMe} />} />
            <Route path='/signup' element={<Signup></Signup>} />
            <Route element={<Template me={me} setMe={setMe}></Template>}>
                <Route path='/home' element={<Home></Home>} />
            </Route>
        </Routes>
    </BrowserRouter>

}

export default MyRouters;