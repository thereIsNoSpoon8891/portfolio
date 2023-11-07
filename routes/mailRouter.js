const express = require('express')
const mg = require('mailgun-js')
const mailRouter = express.Router()

mailRouter.route("/mail")
.post((req, res, next) => {

    const { name, org, number, email, message } = req.body
    
    const mailgun = mg({
        apiKey: process.env.MAIL_GUN_PRI_KEY,
        domain: process.env.MAIL_GUN_DOMAIN
    })

    const mail = {
        from: 'myPorfolioPage@shanerowland.com' ,
        to: process.env.MY_EMAIL,
        subject: "from your portfolio page",
        text: `
        Name: ${name}, 
        org: ${org},
        number: ${number},
        email: ${email},
        message: ${message}`
    }
    mailgun.messages().send(mail, (error, body) => {
        if(error) return next(error)
        res.status(200).json({messageFromShanesAPI: "IF you see this message, rest assured your message has been delivered!"})
    })
})



module.exports = mailRouter