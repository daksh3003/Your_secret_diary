const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
//create an user using POST "/api/auth/"

const JWT_SECRET = "unagiisasalmonskinroll";//any string will work

router.post(
  "/createuser",
  [
    body("name", "Name should be minimum 3 characters").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Passoword should be minimum 5 charcters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    //handling errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //checking for existing user
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry the email is already in use" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password,salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user:{
          id:user.id,
        }
      }
      const authToken = jwt.sign(data,JWT_SECRET);
      res.json({authToken});
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occured");
    }
  }
);

module.exports = router;
