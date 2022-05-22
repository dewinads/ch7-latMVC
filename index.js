const express = require ("express");
const { Produk } = require("./models");

const PORT = 3001;

const app = express();

app.use(
    express.urlencoded({ extended: false })
);

app.set("view engine", "ejs");

app.get("/produk", (req, res) => {
    Produk.findAll()
    .then(produk => {
        res.render("produk/index", {produk})
    })
});

app.get("/produk/create", (req, res) => {
    res.render("produk/create");
});

app.post("/produk", (req, res) => {
    Produk.create({
        nama_produk: req.body.nama_produk,
        deskripsi: req.body.deskripsi,
        varian: req.body.varian,
        harga: req.body.harga
    })
    .then(produk => {
        res.redirect("/produk")
    });
});

app.get("/produk/:id", (req, res) => {
    Produk.findOne({
        where: { id: req.params.id }
    })
    .then(produk => {
        res.render("produk/show", produk.dataValues)
    })
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});