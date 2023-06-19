const express = require ('express');
const Mobile = require('../models/mobile');
const mobileRouter = express.Router();




//add mobile
mobileRouter.post("/add", async (req, res) => {
    try {
        let newmobile = new Mobile (req.body);
        let result = await newmobile.save();
        res.send({mobile : result, msg : "Mobile is added"})
    } catch (error) {
        console.log(error)
    }
})


//get mobiles
mobileRouter.get("/", async (req, res) => {
    try {
        let result = await Mobile.find();
        res.send({mobile : result, msg : "All mobiles"})
    } catch (error) {
        console.log(error)
    }
})

//get mobile by id
mobileRouter.get("/:id", async (req, res) => {
    try {
        let result = await Mobile.findById(req.params.id);
        res.send({mobile : result, msg : "One mobile"})
    } catch (error) {
        console.log(error)
    }
})



//delete mobile
mobileRouter.delete("/:id", async (req, res) => {
    try {
        let result = await Mobile.findByIdAndDelete(req.params.id);
        res.send({msg : "mobile is deleted"})
    } catch (error) {
        console.log(error)
    }
})


//update mobile
mobileRouter.put("/:id", async (req, res) => {
    try {
        let result = await Mobile.findByIdAndUpdate({_id: req.params.id},{$set:{...req.body}});
        res.send({mobile : result,msg : "mobile is updated"})
    } catch (error) {
        console.log(error)
    }
})


module.exports = mobileRouter;