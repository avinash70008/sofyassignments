
const express = require("express");
const router = express.Router();

const Product = require("../models/product.model");

router.post("",async(req,res)=>{

    try {
        let product = await Product.create(req.body);
        return res.status(200).send(product)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.get("",async(req,res)=>{

    try {
        let product = await Product.find().lean().exec();
        return res.status(200).send(product)


    } catch (e) {
        return res.status(500).send(e.message)
    }
})
router.get("/:id",async(req,res)=>{

    try {
        let product = await Product.findById({_id:req.params.id}).lean().exec();
        return res.status(200).send(product)


    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.patch("/:id",async(req,res)=>{

    try {
        let product = await Product.findByIdAndUpdate(req.params.id , req.body ,{new : true}).lean().exec();
        return res.status(200).send(product)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.delete("/:id",async(req,res)=>{

    try {
        let product = await Product.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(product)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

module.exports = router;