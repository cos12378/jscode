import MyFooter from "./MyFooter";
import MyHeaders from "./MyHeaders";
import { Outlet } from "react-router";

const Template = () => {
    return <div className="App-header">
        <MyHeaders></MyHeaders>
        <Outlet></Outlet>
        <MyFooter></MyFooter>
    </div>
}

export default Template;