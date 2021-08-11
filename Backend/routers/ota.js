const router = require("express").Router()
const db = require("../database/mySql")
const moment=require("moment")
const fs = require("fs")
const util = require("util")
const removeFile = util.promisify(fs.unlink)

router.post("/send", (req, res) => {
    const {  shift,station, operator_name, ota1, ota2, ota3, ota4, ota5, ota6, ota7, ota8, ota9, ota10, Otatime1, Otatime2, Otatime3, Otatime4, Otatime5, Otatime6, Otatime7, Otatime8, Otatime9, Otatime10, description, status, avg, statuslists } = req.body
    var date = moment().format("YYYY-MM-DD")
    var sql = `INSERT INTO otatable (date,machine_Sl_No,shift, checked_by, ota1, ota2, ota3, ota4, ota5, ota6, ota7, ota8,ota9,ota10,Otatime1,Otatime2,Otatime3,Otatime4,Otatime5,Otatime6,Otatime7,Otatime8,Otatime9,Otatime10,description,status,average,statuslists) VALUES ('${date}','${station}','${shift}','${operator_name}','${ota1}','${ota2}','${ota3}','${ota4}','${ota5}','${ota6}','${ota7}','${ota8}','${ota9}','${ota10}','${Otatime1}','${Otatime2}','${Otatime3}','${Otatime4}','${Otatime5}','${Otatime6}','${Otatime7}','${Otatime8}','${Otatime9}','${Otatime10}','${description}','${status}','${avg}','${statuslists}')`;
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
    db.query("SELECT * FROM otatable", function (err, result, fields) {
        if (err) {
            return res.send(err)
        } else {
            return res.send(result)
        }
    });
})

router.post("/datefilter", (req, res) => {
    const { from, to } = req.body
    const fromdate = from
    const todate = to
    const daterange = `SELECT * FROM otatable WHERE DATE BETWEEN '${fromdate} 00:00:00' and '${todate} 00:00:00'`
    db.query(daterange, function (err, result, fields) {
        if (err) {
            return res.send(err)
        } else {
            return res.send(result)
        }
    });
})

router.post("/tempeview", async (req, res) => {
    const { date, shift } = req.body  

    var tempeview = new Promise((resolve, reject) => {
        const daterange11 = `SELECT * FROM otatable`
        db.query(daterange11, function (err, result, fields) {
            if (err) {
                return resolve(false)
            } else {
                return resolve(result)
            }
        });
    })
    var tempeviews = await tempeview
    var datefilters
    if (shift == null){
        datefilters = tempeviews.filter((data) => { return data.date == date })        
    } else{
        datefilters = tempeviews.filter((data) => { return data.date == date && data.shift == shift })
    }    
    var chartData = [['Machine', 'Total Points', 'No OK Points', 'No NOK Points']]
    for (var i = 0; i < datefilters.length; i++) {
        var allaverage = datefilters[i].average
        var nokp = allaverage.split("/")[0]
        var okp = Number(9) - Number(nokp)
        chartData.push([datefilters[i].machine_Sl_No, 9, okp, Number(nokp)])
    }
    var chartmachine = [['Machine', 'Total Points', 'No OK Points', 'No NOK Points']]
    for (var i = 0; i < datefilters.length; i++) {
        var allaverage = datefilters[i].average
        var nokp = allaverage.split("/")[0]
        var okp = Number(9) - Number(nokp)
        chartmachine.push([datefilters[i].machine_Sl_No, 9, okp, Number(nokp)])
    }  
    return res.json({chartData:chartData,chartmachine:chartmachine})
})

router.get("/export", async (req, res) => {
    const vaccumeformdata = new Promise(async (resolve, reject) => {
        await db.query("SELECT * FROM otatable", function (err, result, fields) {
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

    const url = await workbook.xlsx.readFile("./templates/ota.xlsx")
        .then(async function () {
            var worksheet = workbook.getWorksheet(1);
            for (var i = 0; i < data.length; i++) {
                var row = await worksheet.getRow(Number(15) + Number(i));
                row.getCell(1).value = data[i].date;
                row.getCell(2).value = data[i].shift;
                row.getCell(3).value = data[i].checked_by;
                row.getCell(4).value = data[i].ota1;
                row.getCell(5).value = data[i].ota2;
                row.getCell(6).value = data[i].ota3;
                row.getCell(7).value = data[i].ota4;
                row.getCell(8).value = data[i].ota5;
                row.getCell(9).value = data[i].ota6;
                row.getCell(10).value = data[i].ota7;
                row.getCell(11).value = data[i].ota8;
                row.getCell(12).value = data[i].ota9;
                row.getCell(13).value = data[i].ota10;
                row.getCell(14).value = data[i].description;
                row.getCell(15).value = data[i].status;
            }

            row.commit();
            const path = `./download/ota_${Date.now()}.xlsx`
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