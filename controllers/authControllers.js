const jwt = require("jwt-simple");
const User = require("../models/user");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const bcrypt = require("bcrypt");

// const {
//     sendConfirmationEmail,
//     generateUniqueUsername,
// } = require('../utils/validation');
const {
  validateEmail,
  validateFullName,
  validateUsername,
  validatePassword,
} = require("../utils/validation");
const Otp = require("../models/otp");

module.exports.verifyJwt = (token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const id = jwt.decode(token, process.env.JWT_SECRET).id;
      const user = await User.findOne(
        { _id: id },
        "email username avatar bookmarks bio fullName confirmed website"
      );
      if (user) {
        return resolve(user);
      } else {
        reject("Not authorized.");
      }
    } catch (err) {
      return reject("Not authorized.");
    }
  });
};

module.exports.requireAuth = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) return res.status(401).send({ error: "Not authorized." });
  try {
    const user = await this.verifyJwt(token);
    // Allow other middlewares to access the authenticated user details.
    res.locals.user = user;
    return next();
  } catch (err) {
    return res.status(401).send({ error: err });
  }
};

module.exports.optionalAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    try {
      const user = await this.verifyJwt(authorization);
      // Allow other middlewares to access the authenticated user details.
      res.locals.user = user;
    } catch (err) {
      return res.status(401).send({ error: err });
    }
  }
  return next();
};

module.exports.loginAuthentication = async (req, res, next) => {
  const { usernameOrEmail, password } = req.body;

  if (!usernameOrEmail || !password) {
    return res
      .status(400)
      .send({ error: "Please provide both a username/email and a password." });
  }

  try {
    const user = await User.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });
    if (!user || !user.password) {
      return res.status(401).send({
        error: "The credentials you provided are incorrect, please try again.",
      });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return next(err);
      }
      if (!result) {
        return res.status(401).send({
          error:
            "The credentials you provided are incorrect, please try again.",
        });
      }

      res.send({
        user: {
          _id: user._id,
          email: user.email,
          username: user.username,
          avatar: user.avatar,
        },
        token: jwt.encode(
          { id: user._id, username: user.username },
          process.env.JWT_SECRET
        ),
      });
    });
  } catch (err) {
    res.send(err);
  }
};

// nodemailer
var transporter = nodemailer.createTransport(
  smtpTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.MAILPASS,
    },
  })
);

module.exports.genrateOtp = async (req, res) => {
  const { userId } = req.params;
  let otp = Math.floor(100000 + Math.random() * 900000);

  const user = await User.findById(userId).populate("profileId");

  if (!user) {
    return res.stauts(404).send("User not found!");
  }

  if (!user.profileId.email) {
    return res.status(404).send("email is not registered");
  }

  let expire = new Date();
  let now = new Date();
  expire.setMinutes(expire.getMinutes() + 10);

  const resotp = new Otp({
    otp,
    userId,
    createdAt: now,
    expiredAt: expire,
  });

  await resotp.save();

  let mailOptions = {
    from: process.env.EMAIL,
    to: user.profileId.email,
    subject: "OTP for Validation of Email ID of the applicant",
    html: `
      <p>Dear Applicant/ Taxpayer,</p>
      <br>
      <p>This is to inform you that you are in the process of submitting the Application for Amendment of Non-Core fields in Registration Particulars (For all types of registered persons) & GST REG-14. In this regard you have given the e-mail ID for accessing the GST Portal for the first time for submitting this application form.
      Your One Time Password for validation of your E-mail ID is ${otp} Please note this password will expire in 10 minutes. </p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.send(error.message);
    }
    return res.send({
      message: "OTP is sent ot your registed email!",
      otpId: resotp._id,
    });
  });
};

module.exports.verifyOtp = async (otp, otpId) => {
  // const { otp, userId, otpId } = req.body;

  const checkotp = await Otp.findById(otpId);

  if (checkotp.otp != otp) {
    throw new Error("Wrong OTP Provided");
  }
  const now = new Date();
  if (checkotp.expiredAt < now) {
    throw new Error("OTP is Expired!");
  }

  return "Verified!";
};

module.exports.register = async (req, res, next) => {
  const { username, fullName, email, password } = req.body;
  let user = null;
  let confirmationToken = null;

  const usernameError = validateUsername(username);
  if (usernameError) return res.status(400).send({ error: usernameError });

  const fullNameError = validateFullName(fullName);
  if (fullNameError) return res.status(400).send({ error: fullNameError });

  const emailError = validateEmail(email);
  if (emailError) return res.status(400).send({ error: emailError });

  const passwordError = validatePassword(password);
  if (passwordError) return res.status(400).send({ error: passwordError });

  try {
    const document = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });
    if (document)
      return res.status(400).send("Username or email already register");
    user = new User({ username, fullName, email, password });

    await user.save();
    // await confirmationToken.save();
    res.status(201).send({
      user: {
        email: user.email,
        username: user.username,
      },
      token: jwt.encode(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET
      ),
    });
  } catch (err) {
    return res.send(err);
  }
  //   sendConfirmationEmail(user.username, user.email, confirmationToken.token);
};

module.exports.getUserById = async (req, res, next) => {
  const user = await User.findById(req.params.id).select("-password");
  res.send(user);
};

module.exports.changePassword = async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  const user = res.locals.user;
  let currentPassword = undefined;

  try {
    const userDocument = await User.findById(user._id);
    currentPassword = userDocument.password;

    const result = await bcrypt.compare(oldPassword, currentPassword);
    if (!result) {
      return res.status("401").send({
        error: "Your old password was entered incorrectly, please try again.",
      });
    }

    const newPasswordError = validatePassword(newPassword);
    if (newPasswordError)
      return res.status(400).send({ error: newPasswordError });

    userDocument.password = newPassword;
    await userDocument.save();
    return res.send("Password Updated");
  } catch (err) {
    return res.send(err);
  }
};
