const userModel = require('../models/user.model')
const blackListTokenModel = require('../models/blacklistToken.model')
const userService = require('../services/user.service')
const {validationResult} = require('express-validator')


module.exports.registerUser = async(req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {fullname, email, password} = req.body

    const isUserAlreadyExist = await userModel.findOne({ email })
    if(isUserAlreadyExist){
        return res.status(400).json({message: 'User already exists'})
    }

    const hashedPassword = await userModel.hashPassword(password)
         
    const user = await userService.createUser({ 
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    })

    const token = user.generateAuthToken()
    res.status(200).json({token, user})

} 

module.exports.loginUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        // Find user and explicitly select the password field
        const user = await userModel.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate token and return success response
        const token = user.generateAuthToken();

        res.cookie('toekn', token)
        res.status(200).json({ token, user });
    } catch (err) {
        next(err); // Pass error to the next middleware (error handler)
    }
};


module.exports.getUserProfile = async (req, res, next)=>{
    res.status(200).json(req.user)
}

module.exports.logoutUser = async(req, res, next)=>{
    res.clearCookie('token')

    const token = req.cookies.token || req.headers.authorization.split(' ')[1]
    await blackListTokenModel.create({token})
    res.status(200).json({message: 'User logged out'})
}