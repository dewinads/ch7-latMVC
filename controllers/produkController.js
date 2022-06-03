const { Produk } = require("./models");

module.exports = {
    index: (req, res) => {
    Produk.findAll().then((produk) => {
        res.render("produk/index", {
            produk,
        });
    });
    },

    create: (req, res) => {
        res.render("produk/create");
    },

    store: (req, res) => {
    Produk.create({
        nama_produk: req.body.nama_produk,
        deskripsi: req.body.deskripsi,
        varian: req.body.varian,
        harga: req.body.harga
        })
        .then(produk => {
        res.redirect("/produk")
        });
    },

    show: (req, res) => {
    Produk.findOne({
        where: { id: req.params.id }
        })
        .then(produk => {
        res.render("produk/show", produk.dataValues)
        });
    },
};