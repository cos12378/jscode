import MyHeader from "../header/MyHeader"
import { Outlet } from "react-router"

const Template = ({ me, setMe }) => {
    return <div>
        <MyHeader me={me} setMe={setMe}></MyHeader>
        <Outlet></Outlet>
    </div>

}

export default Template