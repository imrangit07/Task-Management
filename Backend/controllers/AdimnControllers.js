const nodemailer = require("nodemailer");
const AdminModel = require("../models/AdminModels");
const userModel = require("../models/UserModels")
const PasswordGen = require("../Utils/PasswordGen")

const adminLogin = async (req, res) => {
  console.log(req.body);
  const { admin, password } = req.body;
  const adminData = await AdminModel.findOne({ adminName: admin });
  console.log(adminData);

  try {
    if (!adminData) {
      res.status(401).send({ msg: "Invalid User Name!" })
    }
    if (adminData.password != password) {
      res.status(401).send({ msg: "Invalid Password!" })
    }
    res.status(200).send({ msg: "Login Successfully", adminData: { isAdminLogin: true, userName: admin } })

  } catch (error) {
    console.log(error);

  }
}

const CreateUser = async (req, res) => {
  const { userId, userName, userEmail, designation } = req.body;
  const password = PasswordGen();
  await userModel.create({
    userId,
    userName,
    userEmail,
    designation,
    password
  })


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: userEmail,
    subject: 'Sending Email by Admin',
    text: `Dear ${userName},

Welcome to our platform! Below are your login credentials:

Username: ${userEmail}
Password: ${password}

You can use these credentials to log in to your account. For security reasons, we recommend changing your password after your first login.

If you didn't request this or need any assistance, please contact our support team immediately.

Best regards,
[Imran/Imran hussain]`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email Succ sent: ' + info.response);
      res.send(info.response);
    }
  });

}
const getUserDetails = async (req, res) => {
  console.log("okkk");
  
  try {
    const userData = await userModel.find();
    console.log(userData);
    
     res.send(userData);
  } catch (error) {
    console.log(error);

  }
}

module.exports = {
  adminLogin,
  CreateUser,
  getUserDetails
}