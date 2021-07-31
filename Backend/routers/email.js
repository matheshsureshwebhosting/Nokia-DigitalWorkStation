const router = require("express").Router()
// var nodemailer = require('nodemailer')
const {SMTPClient} = require('smtp-client')




let smtpTransport = new SMTPClient({
    host: process.env.EMAIL_HOST,
    secure: process.env.EMAIL_SECURE,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
});

router.post("/", async (req, res) => {
    const { name, testing, failurestep } = req.body
    const html =
        `
   <p><b>${name}</b><p>
   <p><b>${testing}</b><p>
   <p><b>${failurestep}</b><p>
   
   `
    mailOptions = {
        from: process.env.EMAIL_USER,
        to: "s.kalidas120799@gmail.com",
        subject: "Testing Information",
        text: "Hello world?",
        html: html,
    }
    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
            return res.send(false)
        } else {
            console.log(response)
            return res.send(true)

        }
    });
})


module.exports = router