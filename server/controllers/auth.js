const User = require('../models/user');
const {check, validationResult, Cookie} = require('express-validator');
const jwt = require('jsonwebtoken');
const e_jwt = require('express-jwt');

exports.signup = (req, res)=>{

    const errors = validationResult(req)
    
    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg,
            param: errors.array()[0].param
        })
    }
    

    const user = new User(req.body)

    const {email} = req.body

    const existingUser =  User.findOne({email})

    if(existingUser){
        res.status(401).send("User already exists")
    }
    
    
    user.save((err, user)=>{
        if(err){
            return res.status(400).json({
                err: "Not able to save user in DB"
            })
        }
        res.json({
            name: user.name,
            email: user.email,
            id: user._id
        });
    })
}


exports.signin = (req, res)=>{
    const {email, password} = req.body;    
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg,
            param: errors.array()[0].param
        })
    }

    User.findOne({email}, (err, user)=>{

        if(err || !user){
            return res.status(400).json({
                error: "Email not found"
            })
        }

        // Validating password
        if(!user.authenticate(password)){
            return res.status(401).json({
                error: "Email and password doesnot match"
            })
        }

        // create token
        const token = jwt.sign({_id: user._id}, process.env.SECRET)

        // put token in cookie
        res.cookie("token", token, {expire: new Date() + 9999})

        // send response to frontend

        const {_id, name,email, role} = user;

        return res.json({token, user:{_id, name, email, role}})
    });
}



exports.signout = (req,res)=>{
    
    res.clear(Cookie("token"));

    res.json({
        message: "User signout successfully"
    })
}

// Protected Routes

exports.isSignedIn = e_jwt({
    secret: process.env.SECRET,
    userProperty: "auth"
})

// custom middlewares
exports.isAuthenticated = (req, res, next)=>{
    let checker = req.profile && req.auth && req.profile._id == req.auth._id;

    if(!checker){
        return res.status(403).json({
            error: "ACCESS DENIED"
        })
    }

    next()
}


exports.isAdmin = (req, res, next)=>{

    if(req.profile.role === 0){
        res.status(403).json({
            error: "Access Denied: Only administrators are allowed to perform this action."
        })
    }

    next()
}
