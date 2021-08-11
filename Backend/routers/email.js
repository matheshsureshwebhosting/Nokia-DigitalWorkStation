const router = require("express").Router()
const email = require('emailjs')
const SMTPClient = email.SMTPClient 



router.post("/", async (req, res) => {
    const client = new SMTPClient({
      //    host: '10.130.128.30',
      host: "mailrelay.int.nokia.com",
    });
    
  
    client.send(
      {
        text: "Notification for Solder Tip Monitoring",
        from: "DWSAlerts@nokia.com",
        to: 'balachander.marimuthu@nokia.com',
        cc: 'agni.gnanamani@nokia.com',
        subject: "Notification for Solder Tip Monitoring",
      },
      (err, message) => {
          if(err){
              console.log(err)
          }else{
              res.status(200).send("mail Sent Successfully")
          }
        // console.log(err || message);
      }
  
    )
})


module.exports = router
