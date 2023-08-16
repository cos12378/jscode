import axios from "axios"

export const api = async (path, method, body) => {
    const init = method === "GET" ? {} : {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    }
    try {
        const response = { body: "", status: "" }
        await fetch(`http://192.168.0.184:8080/api/v1/member${path}`, init)

        // ).then((res) => {
        //     console.log(res);
        //     return res.json()
        // }).then((member) => {
        //     response.body = member;
        //     response.status = "success"
        // }).catch((err) => {
        //     console.log(err);
        //     response.status = "error";
        // })
        const body = await response.json()
        return { body, status: "success" }
    } catch (error) {
        return { body, status: "error" }
    }
}

axios.defaults.baseURL = "http://192.168.0.184:8080"

export const myAxios = async (url, method, data) => {
    try {
        console.log(await axios({
            method, url, data
        }))
        return { body: data, status: "success" }
    } catch (error) { return { body: null, status: "error" } }

}
