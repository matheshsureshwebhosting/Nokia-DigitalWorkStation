const router = require("express").Router()
const db = require("../database/mySql")

const fs = require("fs")
const util = require("util")
const removeFile = util.promisify(fs.unlink)

router.post("/send", (req, res) => {
    const {date,station,shift,operator_name,thermal1,thermal2,thermal3,thermal4,thermal5,thermal6,thermal7,thermal8,thermal9,thermal10,thermal11,thermal12,thermal13,thermaltime1,thermaltime2,thermaltime3,thermaltime4,thermaltime5,thermaltime6,thermaltime7,thermaltime8,thermaltime9,thermaltime10,thermaltime11,thermaltime12,thermaltime13,description,status,avg,statuslists} = req.body
    var sql = `INSERT INTO thermaltable (date,machine_Sl_No,shift, checked_by, thermal1, thermal2, thermal3, thermal4, thermal5, thermal6, thermal7, thermal8,thermal9,thermal10,thermal11,thermal12,thermal13,thermaltime1,thermaltime2,thermaltime3,thermaltime4,thermaltime5,thermaltime6,thermaltime7,thermaltime8,thermaltime9,thermaltime10,thermaltime11,thermaltime12,thermaltime13,description,status,average,statuslists) VALUES ('${date}','${station}','${shift}','${operator_name}','${thermal3}','${thermal2}','${thermal3}','${thermal4}','${thermal5}','${thermal6}','${thermal7}','${thermal8}','${thermal9}','${thermal10}','${thermal11}','${thermal12}','${thermal13}','${thermaltime1}','${thermaltime2}','${thermaltime3}','${thermaltime4}','${thermaltime5}','${thermaltime6}','${thermaltime7}','${thermaltime8}','${thermaltime9}','${thermaltime10}','${thermaltime11}','${thermaltime12}','${thermaltime13}','${description}','${status}','${avg}','${statuslists}')`;
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
    db.query("SELECT * FROM thermaltable", function (err, result, fields) {
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
    const daterange = `SELECT * FROM thermaltable WHERE DATE BETWEEN '${fromdate} 00:00:00' and '${todate} 00:00:00'`
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
        await db.query("SELECT * FROM thermaltable", function (err, result, fields) {
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

    const url = await workbook.xlsx.readFile("./templates/thermal.xlsx")
        .then(async function () {
            var worksheet = workbook.getWorksheet(1);
            for (var i = 0; i < data.length; i++) {
                var row = await worksheet.getRow(Number(15) + Number(i));
                row.getCell(1).value = data[i].date;
                row.getCell(2).value = data[i].shift;
                row.getCell(3).value = data[i].checked_by;
                row.getCell(4).value = data[i].thermal1;
                row.getCell(5).value = data[i].thermal2;
                row.getCell(6).value = data[i].thermal3;
                row.getCell(7).value = data[i].thermal4;
                row.getCell(8).value = data[i].thermal5;
                row.getCell(9).value = data[i].thermal6;
                row.getCell(10).value = data[i].thermal7;
                row.getCell(11).value = data[i].thermal8;
                row.getCell(12).value = data[i].thermal9;
                row.getCell(13).value = data[i].thermal10; 
                row.getCell(14).value = data[i].thermal11; 
                row.getCell(15).value = data[i].thermal12; 
                row.getCell(16).value = data[i].thermal13; 
                row.getCell(17).value = data[i].description; 
                row.getCell(18).value = data[i].status;                          
            }

            row.commit();
            const path = `./download/thermal_${Date.now()}.xlsx`
            await workbook.xlsx.writeFile(`${path}`);
            const base64file = fs.readFileSync(path, { encoding: 'base64' })
            const contentType = "data:@file/octet-stream;base64,"
            const url = await `http://localhost:${4000}/${path}`
            return {url:url,filepath:path}
        })
    res.send(url.url)
    setTimeout(async()=>{ await removeFile(`${url.filepath}`)},2000)
})


router.get("/*", (req, res) => {
    return res.send("page not found")
})

module.exports = router