const router = require("express").Router()
const db = require("../database/mySql")

vaccumetable = async () => {
    const vaccumetable = new Promise(async (resolve, reject) => {
        var sql = "CREATE TABLE vaccumetable (date VARCHAR(255),shift VARCHAR(255),machine_Sl_No VARCHAR(255),checked_by VARCHAR(255),pressure_guage_value VARCHAR(255), process1_result VARCHAR(255), process2_result VARCHAR(255), process3_result VARCHAR(255), process4_result VARCHAR(255), process5_result VARCHAR(255), process6_result VARCHAR(255), process7_result VARCHAR(255), process8_result VARCHAR(255), process9_result VARCHAR(255),process1_time VARCHAR(255), process2_time VARCHAR(255), process3_time VARCHAR(255), process4_time VARCHAR(255), process5_time VARCHAR(255), process6_time VARCHAR(255), process7_time VARCHAR(255), process8_time VARCHAR(255), process9_time VARCHAR(255),description VARCHAR(255),status VARCHAR(255),average VARCHAR(255),statuslists VARCHAR(255))";
        await db.query(sql, function (err, result) {
            if (err) {
                return resolve(err.sqlMessage)
            } else {
                return resolve("Vaccume Table Created")
            }

        });
    })
    return await vaccumetable
}

solderingtable = async () => {
    const solderingtable = new Promise(async (resolve, reject) => {
        var sql = "CREATE TABLE solderingtable (date VARCHAR(255),time VARCHAR(255),shift VARCHAR(255),machine_Sl_No VARCHAR(255),station VARCHAR(255),catridge_used VARCHAR(255),temperature VARCHAR(255),checked_by VARCHAR(255),description VARCHAR(255),status VARCHAR(255))";
        await db.query(sql, function (err, result) {
            if (err) {
                return resolve(err.sqlMessage)
            } else {
                return resolve("Soldering Table Created")
            }

        });
    })
    return await solderingtable
}
otatable = async () => {
    const otatable = new Promise(async (resolve, reject) => {
        var sql = "CREATE TABLE otatable (date VARCHAR(255),machine_Sl_No VARCHAR(255),shift VARCHAR(255),checked_by VARCHAR(255), ota1 VARCHAR(255), ota2 VARCHAR(255), ota3 VARCHAR(255), ota4 VARCHAR(255), ota5 VARCHAR(255), ota6 VARCHAR(255), ota7 VARCHAR(255), ota8 VARCHAR(255), ota9 VARCHAR(255),ota10 VARCHAR(255),Otatime1 VARCHAR(255), Otatime2 VARCHAR(255), Otatime3 VARCHAR(255), Otatime4 VARCHAR(255), Otatime5 VARCHAR(255), Otatime6 VARCHAR(255), Otatime7 VARCHAR(255), Otatime8 VARCHAR(255), Otatime9 VARCHAR(255),Otatime10 VARCHAR(255),description VARCHAR(255),status VARCHAR(255),average VARCHAR(255),statuslists VARCHAR(255))";
        await db.query(sql, function (err, result) {
            if (err) {
                return resolve(err.sqlMessage)
            } else {
                return resolve("Ota Table Created")
            }

        });
    })
    return await otatable
}

uwatable = async () => {
    const uwatable = new Promise(async (resolve, reject) => {
        var sql = "CREATE TABLE uwatable (date VARCHAR(255),machine_Sl_No VARCHAR(255),shift VARCHAR(255),checked_by VARCHAR(255), uwa1 VARCHAR(255), uwa2 VARCHAR(255), uwa3 VARCHAR(255), uwa4 VARCHAR(255), uwa5 VARCHAR(255), uwa6 VARCHAR(255), uwa7 VARCHAR(255), uwa8 VARCHAR(255), uwa9 VARCHAR(255),uwa10 VARCHAR(255),uwatime1 VARCHAR(255), uwatime2 VARCHAR(255), uwatime3 VARCHAR(255), uwatime4 VARCHAR(255), uwatime5 VARCHAR(255), uwatime6 VARCHAR(255), uwatime7 VARCHAR(255), uwatime8 VARCHAR(255), uwatime9 VARCHAR(255),uwatime10 VARCHAR(255),description VARCHAR(255),status VARCHAR(255),average VARCHAR(255),statuslists VARCHAR(255))";
        await db.query(sql, function (err, result) {
            if (err) {
                return resolve(err.sqlMessage)
            } else {
                return resolve("Uwa Table Created")
            }

        });
    })
    return await uwatable
}


pvatable = async () => {
    const pvatable = new Promise(async (resolve, reject) => {
        var sql = "CREATE TABLE pvatable (date VARCHAR(255),machine_Sl_No VARCHAR(255),shift VARCHAR(255),checked_by VARCHAR(255),pressure_guage_value VARCHAR(255), pva1 VARCHAR(255), pva2 VARCHAR(255), pva3 VARCHAR(255), pva4 VARCHAR(255), pva5 VARCHAR(255), pva6 VARCHAR(255), pva7 VARCHAR(255), pva8 VARCHAR(255), pva9 VARCHAR(255),pva10 VARCHAR(255),pva11 VARCHAR(255),pva12 VARCHAR(255),pva13 VARCHAR(255),pvatime1 VARCHAR(255), pvatime2 VARCHAR(255), pvatime3 VARCHAR(255), pvatime4 VARCHAR(255), pvatime5 VARCHAR(255), pvatime6 VARCHAR(255), pvatime7 VARCHAR(255), pvatime8 VARCHAR(255), pvatime9 VARCHAR(255),pvatime10 VARCHAR(255),pvatime11 VARCHAR(255),pvatime12 VARCHAR(255),pvatime13 VARCHAR(255),description VARCHAR(255),status VARCHAR(255),average VARCHAR(255),statuslists VARCHAR(255))";
        await db.query(sql, function (err, result) {
            if (err) {
                return resolve(err.sqlMessage)
            } else {
                return resolve("Pva Table Created")
            }

        });
    })
    return await pvatable
}

router.get("/", async (req, res) => {
    const vaccumetables = await vaccumetable()
    const solderingtables = await solderingtable()
    const otatables = await otatable()
    const uwatables = await uwatable()
    const pvatables = await pvatable()
    const tableres = {
        vaccumetable: vaccumetables,
        solderingtable: solderingtables,
        otatable: otatables,
        uwatable: uwatables,
        pvatable: pvatables,
    }
    return res.send(tableres)
})

router.get("/*", (req, res) => {
    return res.send("page not found")
})
module.exports = router