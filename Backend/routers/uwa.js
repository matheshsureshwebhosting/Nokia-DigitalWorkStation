const router = require("express").Router()
const db = require("../database/mySql")
const moment=require("moment")
const fs = require("fs")
const util = require("util")
const removeFile = util.promisify(fs.unlink)

router.post("/send", (req, res) => {
    const {  shift, operator_name, uwa1, uwa2, uwa3, uwa4, uwa5, uwa6, uwa7, uwa8, uwa9, uwa10, uwatime1, uwatime2, uwatime3, uwatime4, uwatime5, uwatime6, uwatime7, uwatime8, uwatime9, uwatime10, description, status, avg, statuslists } = req.body
    var date = moment().format("YYYY-MM-DD")
    var sql = `INSERT INTO uwatable (date,machine_Sl_No,shift, checked_by, uwa1, uwa2, uwa3, uwa4, uwa5, uwa6, uwa7, uwa8,uwa9,uwa10,uwatime1,uwatime2,uwatime3,uwatime4,uwatime5,uwatime6,uwatime7,uwatime8,uwatime9,uwatime10,description,status,average,statuslists) VALUES ('${date}','Not Provide','${shift}','${operator_name}','${uwa1}','${uwa2}','${uwa3}','${uwa4}','${uwa5}','${uwa6}','${uwa7}','${uwa8}','${uwa9}','${uwa10}','${uwatime1}','${uwatime2}','${uwatime3}','${uwatime4}','${uwatime5}','${uwatime6}','${uwatime7}','${uwatime8}','${uwatime9}','${uwatime10}','${description}','${status}','${avg}','${statuslists}')`;
    db.query(sql, function (err, result) {
        if (err) {
            console.log(err)
            return res.send(false)
        } else {
            return res.send(true)
        }
    });
})

router.get("/", (req, res) => {
    db.query("SELECT * FROM uwatable", function (err, result, fields) {
        if (err) {
            return res.send(err)
        } else {
            return res.send(result)
        }
    });
})

router.get("/tempeview", async (req, res) => {    
    var tempeview = new Promise((resolve, reject) => {
        const daterange11 = `SELECT * FROM uwatable`
        db.query(daterange11, function (err, result, fields) {
            if (err) {
                return resolve(false)
            } else {
                return resolve(result)
            }
        });
    })
    var tempeviews=await tempeview
    var chartData=[['Day', 'Total Points', 'No OK Points', 'No NOK Points']]
    for(var i=0;i<tempeviews.length;i++){
        var allaverage=tempeviews[i].average
        var nokp=allaverage.split("/")[0]
        var okp=Number(10)-Number(nokp)
        chartData.push([tempeviews[i].date,9,okp,Number(nokp)])
    }
    return res.send(chartData)

})

router.post("/datefilter", (req, res) => {
    const { from, to } = req.body
    const fromdate = from
    const todate = to
    const daterange = `SELECT * FROM uwatable WHERE DATE BETWEEN '${fromdate} 00:00:00' and '${todate} 00:00:00'`
    db.query(daterange, function (err, result, fields) {
        if (err) {
            return res.send(err)
        } else {
            return res.send(result)
        }
    });
})

router.get("/export", async (req, res) => {
    const vaccumeformdata = new Promise(async (resolve, reject) => {
        await db.query("SELECT * FROM uwatable", function (err, result, fields) {
            if (err) {
                return resolve(false)
            } else {
                return resolve(result)
            }
        });

    })
    const data = await vaccumeformdata
    var Excel = require('exceljs');
    var workbook = new Excel.Workbook();

    const url = await workbook.xlsx.readFile("./templates/uwa.xlsx")
        .then(async function () {
            var worksheet = workbook.getWorksheet(1);
            for (var i = 0; i < data.length; i++) {
                var row = await worksheet.getRow(Number(15) + Number(i));
                row.getCell(1).value = data[i].date;
                row.getCell(2).value = data[i].shift;
                row.getCell(3).value = data[i].checked_by;
                row.getCell(4).value = data[i].uwa1;
                row.getCell(5).value = data[i].uwa2;
                row.getCell(6).value = data[i].uwa3;
                row.getCell(7).value = data[i].uwa4;
                row.getCell(8).value = data[i].uwa5;
                row.getCell(9).value = data[i].uwa6;
                row.getCell(10).value = data[i].uwa7;
                row.getCell(11).value = data[i].uwa8;
                row.getCell(12).value = data[i].uwa9;
                row.getCell(13).value = data[i].uwa10;
                row.getCell(14).value = data[i].description;
                row.getCell(15).value = data[i].status;
            }

            row.commit();
            const path = `./download/uwa_${Date.now()}.xlsx`
            await workbook.xlsx.writeFile(`${path}`);
            const base64file = fs.readFileSync(path, { encoding: 'base64' })
            const contentType = "data:@file/octet-stream;base64,"
            const url = await `http://localhost:${4000}/${path}`
            return { url: url, filepath: path }
        })
    res.send(url.url)
    setTimeout(async () => { await removeFile(`${url.filepath}`) }, 2000)
})


router.get("/*", (req, res) => {
    return res.send("page not found")
})

module.exports = router