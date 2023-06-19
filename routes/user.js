const express = require ('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const {registerRules, loginRules, validation} = require("../middleware/validator");
const isAuth = require("../middleware/passport");




//Register user
userRouter.post("/register", registerRules(), validation, async (req, res) => {
    const{email} = (req.body);

    try {
        const newUser =  new User({...req.body});

// check if the email exist
const searchedUser = await User.findOne({email})
if (searchedUser){
    return res.send({msg:'email already exist'});
}
// hash password
        const salt = 10;
        const genSalt = await bcrypt.genSalt(salt);
        const hashedPassword = await bcrypt.hash(newUser.password, genSalt);
        // console.log(hashedPassword);
        newUser.password = hashedPassword;

//generate a token


// save user

const newUsertoken =  await newUser.save();
const payload = {
    _id : newUsertoken._id,
    name : newUsertoken.name,
};
const token = jwt.sign(payload, process.env.SecretOrKey, {
    expiresIn: 3600,
});
        res.send({newUsertoken, msg : "User is saved", token:`Bearer ${token}`})
    } catch (error) {
        console.log(error)
    }
});

// login 

userRouter.post("/login", loginRules(), validation, async(req, res) => {
    const {email, password} = req.body;
    try {
        //find if the user exist
        const searchedUser = await User.findOne({email});
        // if the email not exist
        if (!searchedUser)
        return res.send({msg :'bad credential'});
        // password are equals
        const match = await bcrypt.compare(password, searchedUser.password);
        if (!match)
        return res.send({msg:'bad credencial'});
        // create token
        const payload = {
            _id : searchedUser._id,
            name : searchedUser.name,
        };
        const token = jwt.sign(payload, process.env.SecretOrKey, {
            expiresIn: 3600,
        });
        console.log(token);
        //send the user
        res.send({user: searchedUser, msg:'success', token :`Bearer ${token}`})

    } catch (error) {
        console.log(error)
    }
})
//add user
userRouter.post("/add", async (req, res) => {
    try {
        let newuser = new User (req.body);
        let result = await newuser.save();
        res.send({user : result, msg : "user is added"})
    } catch (error) {
        console.log(error)
    }
})
// Get  user
userRouter.get('/current', isAuth(), (req, res) => 
   res.status(200).send({user:req.user})
)

//get user
userRouter.get("/", async (req, res) => {
    try {
        let result = await User.find();
        res.send({users : result, msg : "All users"})
    } catch (error) {
        console.log(error)
    }
})

//get user by id
userRouter.get("/:id", async (req, res) => {
    try {
        let result = await User.findById(req.params.id);
        res.send({user : result, msg : "One user"})
    } catch (error) {
        console.log(error)
    }
})



//delete user
userRouter.delete("/:id", async (req, res) => {
    try {
        let result = await User.findByIdAndDelete(req.params.id);
        res.send({msg : "user is deleted"})
    } catch (error) {
        console.log(error)
    }
})


//update user
userRouter.put("/:id", async (req, res) => {
    try {
        let result = await User.findByIdAndUpdate({_id: req.params.id},{$set:{...req.body}});
        res.send({USER : result,msg : "USER is updated"})
    } catch (error) {
        console.log(error)
    }
})
// Delete all user 
userRouter.delete('/delete', async (req, res) => {

    try {
        const result= await User.findByIdAndDelete() 
        
        
        res.send({  message: ' users are Deleted' })

        
    } catch (error) {
        console.log(error)
    }

}
)


module.exports = userRouter;
