const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.DEV_GMAIL_USER,
        password: process.env.DEV_GMAIL_PASSWORD,
       }
   });

let sendEmail = (mailOptions)=>{
  transporter.sendEmail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
  });
};



module.export = sendEmail;
