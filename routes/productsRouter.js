const express = require("express");
const { getAllProducts, addProduct, getSingleProduct, removeProduct, updateProduct } = require("../controllers/productsController");

const router = express.Router();

router.route('/').get(getAllProducts).post(addProduct);
router.route('/:id').get(getSingleProduct).delete(removeProduct);

module.exports = router;