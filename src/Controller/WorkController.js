const projects = require("../projects.json");
const nodemailer = require("nodemailer");

const WebController = {
  async work(req, res) {
    const id = req.params.id;
    const thisProject = projects[id.toString()];
    res.render("work", { project: thisProject });
  },

  async contact(req, res, next){
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.DEV_GMAIL_USER,
          pass: process.env.DEV_GMAIL_PASSWORD,
        },
      });
      const name = req.body.fullname;
  const email = req.body.email;
  const note = req.body.note;
  const subject = req.body.subject;

  //step 2
  let mailOption = {
    from: process.env.DEV_GMAIL_USER,
    to: process.env.DEV_GMAIL_USER,
    subject: req.body.subject,
    note: `${note}`,
    html:
      "<b>Full Name </b>" +
      name +
       "<br/> <b>Email </b>" +
      email +
       "<br/> <b>Message </b>" + 
      note,
  };

  //step 3
  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log("Error sending email.");
    } else {
      console.log("Email sent successfully!");
      res.render("contact", { submitted: "yes" });
    }
  });

  }
};

module.exports = WebController;
