const Product = require("../models/product");

exports.getProductById = (req, res, next, id)=>{
Product.findById(id)
.populate("category")
.exec((err, product)=>{
    if(err){
        res.status(400).json({
            error:"product is not find"
        })
    }
    req.product = product
    next()
})
}