const express = require ('express');
const Mac = require('../models/mac');
const macRouter = express.Router();




//add mac
macRouter.post("/add", async (req, res) => {
    try {
        let newmac = new Mac (req.body);
        let result = await newmac.save();
        res.send({mac : result, msg : "Mac is added"})
    } catch (error) {
        console.log(error)
    }
})


//get mac
macRouter.get("/", async (req, res) => {
    try {
        let result = await Mac.find();
        res.send({mac : result, msg : "All mac's"})
    } catch (error) {
        console.log(error)
    }
})

//get mac by id
macRouter.get("/:id", async (req, res) => {
    try {
        let result = await Mac.findById(req.params.id);
        res.send({mac : result, msg : "One mac"})
    } catch (error) {
        console.log(error)
    }
})



//delete mac
macRouter.delete("/:id", async (req, res) => {
    try {
        let result = await Mac.findByIdAndDelete(req.params.id);
        res.send({msg : "mac is deleted"})
    } catch (error) {
        console.log(error)
    }
})


//update mac
macRouter.put("/:id", async (req, res) => {
    try {
        let result = await Mac.findByIdAndUpdate({_id: req.params.id},{$set:{...req.body}});
        res.send({mac : result,msg : "mac is updated"})
    } catch (error) {
        console.log(error)
    }
})


module.exports = macRouter;