import { Container, NavItem, NavLink, Navbar, NavbarBrand, Nav } from 'reactstrap';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { myAxios } from '../network/Api';
import { useEffect, useState } from 'react';

const Template = () => {
    const logout = () => {
        localStorage.clear()
        window.location.href = '/login'
    }

    const [me, setMe] = useState();
    const test = async () => {
        const name = localStorage.getItem("id")
        if (!name) return
        const response = await myAxios("/api/v1/member", "POST", { name })
        setMe(response.body)
    }

    useEffect(() => {
        test()
    }, [])

    const [timer, setTimer] = useState()
    useEffect(() => {
        const now = new Date().getTime()
        const interval = setInterval(() => {
            setTimer(now - new Date().getTime())
        }, 15000)
        return clearInterval(interval)
    }, [me]
    )


    return <>
        {timer}
        <Navbar>
            <NavbarBrand><Link to='/' className='navbar-brand' >Home</Link></NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink>< Link to='/member'>members</Link></NavLink>
                </NavItem>
                {me ?
                    <NavItem>
                        <img src="" ></img>
                        <Button onClick={logout}>logout</Button></NavItem> :
                    <NavItem> <NavLink><Link to='/login'>login</Link></NavLink>
                    </NavItem>
                }
            </Nav>
        </Navbar>
        <Container fluid="md">
            <Outlet></Outlet>
        </Container>
    </>
}

export default Template;