const express = require('express')
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req,res) =>{
    nodeMailer.createTestAccount((err, account ) =>{
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li> Name: ${req.body.name}</li>
            <li> Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <h4>${req.body.subject}</h4>
        <p>${req.body.message}</p>
        `

        var transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                   user: 'yungtrade34@gmail.com',
                   pass: 'Cardenas34'
               }
           });

           let mailOptions = {
               from: 'test@testaccount.com',
               to: 'yungtrade34@gmail.com',
               replyTo: 'test@testaccount.com',
               subject: 'New message',
               test: req.body.message,
               html: htmlEmail
           }
transporter.sendMail(mailOptions, (err, info) =>{
    if(err){
        return console.log(err)
    } 
    console.log('message sent: %s', info.message)
    console.log('message URL: %s', nodeMailer.getTestMessageUrl(info))
})

    })
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log('server listenning on ${PORT}')
})

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }