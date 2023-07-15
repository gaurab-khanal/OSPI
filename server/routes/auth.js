const express = require('express');
const router = express.Router();
const {signout, signup, signin, isSignedIn} = require('../controllers/auth')
const {check, validationResult} = require('express-validator');



router.post('/signup', [
    check("name", "name should be atleast 3 character").isLength({min: 3}),
    check("email", "Email is required").isEmail(),
    check('password', 'Password should be atleast 8 character').isLength({min: 8})
],signup)


router.post('/signin', [
    check("email", "Email is required").isEmail(),
    check('password', 'Password field is required').isLength({min: 8})
],signin)

router.get('/signout', signout);

router.get('/testroute', isSignedIn, (req,res)=>{
    res.json(req.auth);

});




module.exports = router;