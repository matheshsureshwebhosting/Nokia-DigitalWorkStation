const router = require("express").Router()
const db = require("../database/mySql")

const Hash = require("../helpers/bcrypt")
const Token = require("../helpers/jwt")
const getToken = require("../helpers/gettoken")

router.post("/register", async (req, res) => {
    const allusers = await allUsers()
    const checkuser = await allusers.filter((users) => { return users.email == req.body.email })
    if (checkuser.length !== 0) {
        return res.status(401).send("Already Registerd")
    } else {
        const userinfo = req.body
        const newuserid = Date.now().toString()
        const hashpwd = await Hash.createrHashpwd(req.body.password)
        const newtoken = await Token.createToken(newuserid)
        userinfo["userid"] = newuserid
        userinfo["password"] = hashpwd
        userinfo["token"] = newtoken
        userinfo["role"] = "Operators"
        const { name, email, password, userid, token, role } = userinfo
        var createUser = `INSERT INTO users(name,email,password,userid,token,role)VALUES('${name}','${email}','${password}','${userid}','${token}','${role}') `
        db.query(createUser, function (err, result) {
            if (err) {
                console.log(err)
                return res.status(500).send("server error")
            } else {
                if(result.affectedRows===1){
                    const user={
                        token:token,
                        userid:userid
                    }
                    return res.json(user)
                }else{
                    return res.status(500).send("server error")
                }
                
            }
        });
    }

})


router.post("/login", async (req, res) => {
    const {email,password}=req.body
    const allusers = await allUsers()
    const checkuser = await allusers.filter((users) => { return users.email ==email })
    if (checkuser.length == 0) {
        return res.status(401).send("Not Registerd")
    } else {
        const hashpwd=checkuser[0].password
         const hashcheck=await Hash.verifyPwd(password,hashpwd)
        if(hashcheck===false) return res.status(401).send("Check Password")
        return res.send(checkuser[0])
    }

})

router.get("/single",async(req,res)=>{
    var token = req.headers["authorization"]
    const checktoken = await getToken.getToken(token)
    if (checktoken === false) return res.send(false)
    var verifyToken = await Token.verifyToken(checktoken)
    const allusers=await allUsers()
    const singleUser=await allusers.filter((user)=>{return user.userid==verifyToken})
    return res.send(singleUser)
})


allUsers = async () => {
    const allUsers = new Promise(async (resolve, reject) => {
        await db.query("SELECT * FROM users", function (err, result, fields) {
            if (err) {
                return resolve(false)
            } else {
                return resolve(result)
            }
        });
    })
    return await allUsers
}



module.exports = router