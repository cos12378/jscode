import { Routes, Route } from 'react-router'
import Template from '../template/Template'
import Login from '../components/Login'

const MyRoutes = () => {
    return <Routes>
        <Route element={<Template />}>
            <Route path="/"></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/member"></Route>
            <Route path="/member/:id"></Route>
        </Route>
    </Routes>
}

export default MyRoutes