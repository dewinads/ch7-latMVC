const express = require('express');
const router = express.Router();
const produk = require("./controllers/produkController");

router.get("/produk", produk.index);
router.get("/produk/create", produk.create);
router.post("/produk", produk.store);
router.get("/produk/:id", produk.show);

module.exports = router;