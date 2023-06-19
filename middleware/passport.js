const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
    const User=require('../models/user')
    const passport = require("passport");
    const  opts = {
        jwtFromRequest :ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey : process.env.SecretOrKey
        }
        
        passport.use(
            new JwtStrategy(opts,async(jwt_payload,done)=>{
                try {
                    const user=await User.findOne({_id:jwt_payload._id}).select("-password")
                    
        
                        user?done(null,user):done(null,false)
                        // how client connecter 
                    // req.user=user  
                    // 
                     
                } catch (error) {
                    console.log(error)
                    
                }
        
        }))
        
        module.exports=isAuth=() =>
            passport.authenticate('jwt',{session:false})
        
        