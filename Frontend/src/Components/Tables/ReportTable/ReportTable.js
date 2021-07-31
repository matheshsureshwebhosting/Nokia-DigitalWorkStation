import React from 'react'
import { Table } from 'react-bootstrap'

function ReportTable() {
    const date = "Today"
    const dataa = [
        {
            date: date,
            val1: "Shift A",
            val2: "Vacuum Lifter",
            val3: "Operator A",
            val4: "1123FAS",
            val5: "OK",
            val6: "-"
        },
        {
            date: date,
            val1: "Shift A",
            val2: "Vacuum Lifter",
            val3: "Operator B",
            val4: "ASDFA23",
            val5: "Issue",
            val6: "Damage"
        },
        {
            date: date,
            val1: "Shift A",
            val2: "Vacuum Lifter",
            val3: "Operator C",
            val4: "SRFE323",
            val5: "-",
            val6: "-"
        },
        {
            date: date,
            val1: "Shift A",
            val2: "Vacuum Lifter",
            val3: "Operator D",
            val4: "GEG245q",
            val5: "issue",
            val6: "cleaning"
        }
    ]
    return (
        <>
            <Table striped bordered hover dir="ltr" border="1" cellspacing="0" cellpadding="0"><colgroup><col width="100" /><col width="100" /><col width="128" /><col width="100" /><col width="100" /><col width="117" /><col width="100" /></colgroup>
                <tbody>
                    <tr style={{ height: "24px", backgroundColor: "#124191", color: "#fff" }}>
                        <td style={{ height: "24px", textAlign: "center" }} data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Date&quot;}">Date</td>
                        <td style={{ height: "24px", textAlign: "center" }} data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Shift&quot;}">Shift</td>
                        <td style={{ height: "24px", textAlign: "center" }} data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Type of Equipment&quot;}">Type of Equipment</td>
                        <td style={{ height: "24px", textAlign: "center" }} data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Operator&quot;}">Operator</td>
                        <td style={{ height: "24px", textAlign: "center" }} data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Machine ID&quot;}">Machine ID</td>
                        <td style={{ height: "24px", textAlign: "center" }} data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Status&quot;}">Status</td>
                        <td style={{ height: "24px", textAlign: "center" }} data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Issue Stage&quot;}">Issue Stage</td>
                    </tr>
                    {dataa.map((value, index) => (
                        <tr style={{ height: "13px" }} key={index}>
                            <td style={{ height: "13px", textAlign: "center" }}>{value.date}</td>
                            <td style={{ height: "13px", textAlign: "center" }}>{value.val1}</td>
                            <td style={{ height: "13px", textAlign: "center" }}>{value.val2}</td>
                            <td style={{ height: "13px", textAlign: "center" }}>{value.val3}</td>
                            <td style={{ height: "13px", textAlign: "center" }}>{value.val4}</td>
                            <td style={{ height: "13px", textAlign: "center" }}>{value.val5}</td>
                            <td style={{ height: "13px", textAlign: "center" }}>{value.val6}</td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </>
    )
}

export default ReportTable
