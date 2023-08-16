import { Input, Spinner } from "reactstrap"
import { useState } from 'react'
import { Alert } from "reactstrap"
import { api, myAxios } from "../network/Api"


const Login = () => {
    const [name, setName] = useState("")
    const [status, setStatus] = useState("idle")
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setStatus("loading")
        const response = await myAxios("api/v1/member", "POST", { name })
        setStatus(response.status)
        if (response.status === "success")
            localStorage.setItem("id", response.body.name)
        console.log(response)
        // fetch("http://192.168.0.184:8080/api/v1/member", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         body: JSON.stringify({ name })
        //     }
        // }).then((res) => {
        //     console.log(res);
        //     return res.json()
        // }).then((member) => {
        //     console.log(member);
        //     setStatus("success")
        // }).catch((err) => {
        //     console.log(err);
        //     setStatus("error");
        // })
    }
    return <>
        {status === "loading" && <Spinner />}
        {status === "success" && <Alert>성공</Alert>}
        {status === "error" && <Alert color="danger">실패</Alert>}
        <form onSubmit={onSubmitHandler}>
            <Input placeholder="name" onChange={(e) => { setName(e.target.value) }}></Input>
            <Input type="submit"></Input>
        </form>
    </>
}
export default Login