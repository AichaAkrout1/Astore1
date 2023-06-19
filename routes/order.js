const express = require ('express');
const Order = require('../models/order');

const orderRouter = express.Router();




//add Order
orderRouter.post("/add", async (req, res) => {
    try {
        let neworder = new Order (req.body);
        let result = await neworder.save();
        res.send({order : result, msg : "Order is added"})
    } catch (error) {
        console.log(error)
    }
})


//get orders
orderRouter.get("/", async (req, res) => {
    try {
        let result = await Order.find();
        res.send({order : result, msg : "All Orders"})
    } catch (error) {
        console.log(error)
    }
})

//get order by id
orderRouter.get("/:id", async (req, res) => {
    try {
        let result = await Order.findById(req.params.id);
        res.send({order : result, msg : "One Order"})
    } catch (error) {
        console.log(error)
    }
})



//delete Order
orderRouter.delete("/:id", async (req, res) => {
    try {
        let result = await Order.findByIdAndDelete(req.params.id);
        res.send({msg : "Order is deleted"})
    } catch (error) {
        console.log(error)
    }
})


//update Order
orderRouter.put("/:id", async (req, res) => {
    try {
        let result = await Order.findByIdAndUpdate({_id: req.params.id},{$set:{...req.body}});
        res.send({order : result,msg : "Order is updated"})
    } catch (error) {
        console.log(error)
    }
})


module.exports = orderRouter;