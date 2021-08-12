const router = require("express").Router()
const email = require('emailjs')
const SMTPClient = email.SMTPClient 



router.post("/", async (req, res) => {  
const {name,testing,failurestep}=req.body 
    const client = new SMTPClient({
      //    host: '10.130.128.30',
      host: "mailrelay.int.nokia.com",
    });
    var text=`
    <p>${name}</p>
    <p>${testing}</p>
    <p>${failurestep}</p>

    `
  console.log(text);
    client.send(
      {
        text: text,
        from: "DWSAlerts@nokia.com",
        to: 'balachander.marimuthu@nokia.com', 
        cc: 'agni.gnanamani@nokia.com',
        subject: "Notification for Solder Tip Monitoring",
      },
      (err, message) => {
          if(err){
              console.log("mail Not Sent");
          }else{
            console.log("mail Sent Successfully");
              res.status(200).send("mail Sent Successfully")
          }        
      }
  
    )
})


module.exports = router
