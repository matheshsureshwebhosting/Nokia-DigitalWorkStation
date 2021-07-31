import axios from "axios"
export const checkLogin = async () => {
    const token = localStorage.getItem("token")
    console.log(token);
    if (token !== null) {
        const checkToken = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/token`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then((res) => { return res.data }).catch((error) => { return error.response.data })
        if (checkToken === false) return false
        return true
    } else {
        return false
    }
}

export const getUserinfo = async () => {
    const token = localStorage.getItem("token")
    var userinfo = new Promise(async (resolve, reject) => {
        const users = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/user/single`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then((res) => { return res.data[0] }).catch((error) => { return false })
        return resolve(users)
    })
    const user = await userinfo
    return user
}