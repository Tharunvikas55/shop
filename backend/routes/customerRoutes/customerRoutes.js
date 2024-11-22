const express = require("express");
const customerControllers = require("../../controllers/customerControllers/customercontroller"); // Correct path
const router = express.Router();

router.get("/fetchCustomerDetails", customerControllers.fetchCustomerDetails);

module.exports = router;
