const router = require("express").Router()
const JWT = require("../helpers/jwt")
const getToken = require("../helpers/gettoken")

router.get("/", async (req, res) => {
    var token = req.headers["authorization"]
    const checktoken = await getToken.getToken(token)
    if (checktoken === false) return res.send(false)
    var verifyToken = await JWT.verifyToken(checktoken)
    if (verifyToken === false) return res.send(false)
    return res.send(verifyToken)
})

module.exports = router