var express = require("express");

var router = express.Router();

const { getUserById, getUser, updateUser, userPurchaseList } = require("../controllers/user");

const { getproductById } = require("../controllers/product");

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
 
//all of param
router.param("userId", getUserById);
router.param("productId", getproductById);

//all of actual routes



module.exports =  router;