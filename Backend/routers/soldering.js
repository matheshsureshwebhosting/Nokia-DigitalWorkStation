const router = require("express").Router()
const db = require("../database/mySql")
const fs = require("fs")
const util = require("util")
const removeFile = util.promisify(fs.unlink)
const moment = require('moment')

router.post("/send", (req, res) => {
    const { time, shift,defaultTemp, machine_Sl_No, station, catridge_used, temperature, checked_by, status } = req.body
    var date = moment().format("YYYY-MM-DD")
    var sql = `INSERT INTO solderingtable (date,time,shift,defaultTemp,machine_Sl_No,station,catridge_used,temperature,checked_by,description,status) VALUES ('${date}','${time}','${shift}','${defaultTemp}','${machine_Sl_No}','${station}','${catridge_used}','${temperature}','${checked_by}','Not Provided','${status}')`;
    db.query(sql, function (err, result) {
        if (err) {
            return res.send(err)
        } else {
            return res.send("Data Inserted")
        }
    });
})

router.get("/", (req, res) => {
    db.query("SELECT * FROM solderingtable", function (err, result, fields) {
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
    const daterange = `SELECT * FROM solderingtable WHERE DATE BETWEEN '${fromdate} 00:00:00' and '${todate} 00:00:00'`
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
        await db.query("SELECT * FROM solderingtable", function (err, result, fields) {
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

    const url = await workbook.xlsx.readFile("./templates/soldering.xlsx")
        .then(async function () {
            var worksheet = workbook.getWorksheet(1);
            for (var i = 0; i < data.length; i++) {
                var row = await worksheet.getRow(Number(15) + Number(i));
                row.getCell(1).value = data[i].date;
                row.getCell(2).value = data[i].shift;
                row.getCell(3).value = data[i].machine_Sl_No;
                row.getCell(4).value = data[i].station;
                row.getCell(5).value = data[i].catridge_used;
                row.getCell(6).value = data[i].temperature;
                row.getCell(7).value = data[i].checked_by;
                row.getCell(8).value = data[i].description;
                row.getCell(9).value = data[i].status;
            }

            row.commit();
            const path = `./download/soldering_${Date.now()}.xlsx`
            await workbook.xlsx.writeFile(`${path}`);
            const base64file = fs.readFileSync(path, { encoding: 'base64' })
            const contentType = "data:@file/octet-stream;base64,"
            const url = await `http://localhost:${4000}/${path}`
            return { url: url, filepath: path }
        })
    res.send(url.url)
    setTimeout(async () => { await removeFile(`${url.filepath}`) }, 2000)
})


router.post("/tempeview", async (req, res) => {
    const { date } = req.body
    
    var tempeview = new Promise((resolve, reject) => {
        const daterange11 = `SELECT * FROM solderingtable WHERE date=?`
        db.query(daterange11, [date], function (err, result, fields) {
            if (err) {
                return resolve(false)
            } else {
                return resolve(result)
            }
        });
    })
    var chartdata = [['Stations', 'Standard Temp', 'Measured']], countdata = [['Count', 'Count']]
    var tempView = await tempeview
    for (var i = 0; i < tempView.length; i++) {
        chartdata.push([tempView[i].station, tempView[i].defaultTemp, tempView[i].temperature])
    }            
    countdata.push([date, tempView.length])       
    return res.json({ chartdata: chartdata, countdata: countdata })

})

router.get("/*", (req, res) => {
    return res.send("page not found")
})

module.exports = router