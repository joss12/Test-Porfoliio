const express = require("express");
const router = express.Router();
// const nodemailer = require("nodemailer");
const projects = require('../projects.json');
const WebController = require('../Controller/WorkController');
require("dotenv").config();



router.get("/", (req, res) => {
  res.render("home.hbs");
});

router.get("/contact", (req, res) => {
  res.render("contact", { submitted: "no" });
});

router.get("/project", (req, res)=>{
    res.render("project", {projects: projects});
});

router.get('/about', (req, res)=>{
  res.render("about")
})



router.get("/work/:id", WebController.work );

router.post("/contact", WebController.contact);

module.exports = router;
