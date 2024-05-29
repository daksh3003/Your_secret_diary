const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

//create an user using POST "/api/auth/"
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
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      res.json(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occured");
    }
  }
);

module.exports = router;
