const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');


//create an user using POST "/api/auth/"
router.post('/',[
    body('name','Name should be minimum 3 characters').isLength({min:3}),
    body('email','Enter a valid Email').isEmail(),
    body('password','Passoword should be minimum 5 charcters').isLength({min:5}),
],(req,res)=>{ 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    }).then(user => res.json(user))
    .catch(err=> {console.log(err)})
    res.json({error: 'Please enter a unique email.',message: err.message})
})

module.exports = router;