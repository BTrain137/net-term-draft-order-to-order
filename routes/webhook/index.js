const { Router } = require("express");
const draftOrder = require("./draft-order.js");

const router = Router();

// Test Route
// /webhook/
router.use("/draft-order", draftOrder);

module.exports = router;
