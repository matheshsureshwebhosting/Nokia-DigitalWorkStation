const router = require("express").Router()
const db = require("../database/mySql")

const fs = require("fs")
const util = require("util")
const removeFile = util.promisify(fs.unlink)

router.post("/send", (req, res) => {
    const { date, shift, operator_name,pressure_guage_value, pva1, pva2, pva3, pva4, pva5, pva6, pva7, pva8, pva9, pva10,pva11,pva12,pva13, pvatime1, pvatime2, pvatime3, pvatime4, pvatime5, pvatime6, pvatime7, pvatime8, pvatime9, pvatime10,pvatime11,pvatime12,pvatime13, description, status, avg, statuslists } = req.body
    var sql = `INSERT INTO pvatable (date,machine_Sl_No,shift, checked_by,pressure_guage_value, pva1, pva2, pva3, pva4, pva5, pva6, pva7, pva8,pva9,pva10,pva11,pva12,pva13,pvatime1,pvatime2,pvatime3,pvatime4,pvatime5,pvatime6,pvatime7,pvatime8,pvatime9,pvatime10,pvatime11,pvatime12,pvatime13,description,status,average,statuslists) VALUES ('${date}','Not Provide','${shift}','${operator_name}','${pressure_guage_value}','${pva1}','${pva2}','${pva3}','${pva4}','${pva5}','${pva6}','${pva7}','${pva8}','${pva9}','${pva10}','${pva11}','${pva12}','${pva13}','${pvatime1}','${pvatime2}','${pvatime3}','${pvatime4}','${pvatime5}','${pvatime6}','${pvatime7}','${pvatime8}','${pvatime9}','${pvatime10}','${pvatime11}','${pvatime12}','${pvatime13}','${description}','${status}','${avg}','${statuslists}')`;
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
    db.query("SELECT * FROM pvatable", function (err, result, fields) {
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
    const daterange = `SELECT * FROM pvatable WHERE DATE BETWEEN '${fromdate} 00:00:00' and '${todate} 00:00:00'`
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
        await db.query("SELECT * FROM pvatable", function (err, result, fields) {
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

    const url = await workbook.xlsx.readFile("./templates/pva.xlsx")
        .then(async function () {
            var worksheet = workbook.getWorksheet(1);
            for (var i = 0; i < data.length; i++) {
                var row = await worksheet.getRow(Number(22) + Number(i));
                row.getCell(1).value = data[i].date;
                row.getCell(2).value = data[i].shift;
                row.getCell(3).value = data[i].pressure_guage_value;
                row.getCell(4).value = data[i].machine_Sl_No;

                row.getCell(5).value = data[i].pvatime1;
                row.getCell(6).value = data[i].pva1;

                row.getCell(7).value = data[i].pvatime2;
                row.getCell(8).value = data[i].pva2;

                row.getCell(9).value = data[i].pvatime3;
                row.getCell(10).value = data[i].pva3;

                row.getCell(11).value = data[i].pvatime4;
                row.getCell(12).value = data[i].pva4;

                row.getCell(13).value = data[i].pvatime5;
                row.getCell(14).value = data[i].pva5;

                row.getCell(15).value = data[i].pvatime6;
                row.getCell(16).value = data[i].pva6;
                
                row.getCell(17).value = data[i].pvatime7;
                row.getCell(18).value = data[i].pva7;

                row.getCell(19).value = data[i].pvatime8;
                row.getCell(20).value = data[i].pva8;

                row.getCell(21).value = data[i].pvatime9;
                row.getCell(22).value = data[i].pva9;

                row.getCell(23).value = data[i].pvatime10;
                row.getCell(24).value = data[i].pva10;

                row.getCell(25).value = data[i].pvatime11;
                row.getCell(26).value = data[i].pva11;

                row.getCell(27).value = data[i].pvatime12;
                row.getCell(28).value = data[i].pva12;

                row.getCell(29).value = data[i].pvatime13;
                row.getCell(30).value = data[i].pva13;

                row.getCell(31).value = data[i].checked_by;
                row.getCell(32).value = data[i].description;
                row.getCell(33).value = data[i].status;
                row.getCell(34).value = data[i].average;
            }

            row.commit();
            const path = `./download/pva_${Date.now()}.xlsx`
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