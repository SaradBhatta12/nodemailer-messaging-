require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "saradbhatt2@gmail.com",
      pass: "zvqb gisn tcuz yrbi",
    },
  });

  const mailOptions = {
    from: email, // Sender's email address
    to: "saradbhatt2@gmail.com", // Recipient's email address
    subject: "Portfolio Contacts ",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error);
    }

    res.status(201).json({
      success: true,
      message: "email send successfully",
    });
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;
