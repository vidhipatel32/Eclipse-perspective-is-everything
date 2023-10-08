const express = require("express");
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "qwertyuiopasdfghjklzxcvbnm123456"
router.post("/createuser", [
    body('name').isLength({ min: 5 }),
    body('email', 'Incorrect Email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 5 }),
    body('location').isLength({ min: 1 })

], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt)
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPassword,
            location: req.body.location
        })
        res.json({ success: true })


    } catch (error) {
        console.log(error)
        res.json({ success: false })

    }

})

router.post("/loginuser", [
    body('email', 'Incorrect Email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 5 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let email = req.body.email;
        try {
            let userdata = await User.findOne({ email });
            if (!userdata) {
                return res.status(400).json({ errors: "Invalid credentials" });
            }
            const pwdcompare = await bcrypt.compare(req.body.password, userdata.password)
            if (!pwdcompare) {
                return res.status(400).json({ errors: "Invalid credentials" });
            }

            const data = {
                user: {
                    id: userdata.id
                }
            }
            const authToken = jwt.sign(data,jwtSecret)
            return res.json({ success: true, authToken : authToken });


        } catch (error) {
            console.log(error)
            res.json({ success: false })

        }

    })

module.exports = router;