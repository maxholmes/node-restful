const express = require("express");
const router = express.Router();
const ProductsController = require("../controllers/products");
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb){
cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + ' ' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || filemimetype ==='image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({storage: storage,
  limits: {
    //filesize limit upto 5 mb
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.get("/", ProductsController.products_get_all);

router.post("/", upload.single('productImage'), ProductsController.products_create_product);

router.get("/:productId", ProductsController.products_get_product);

router.patch("/:productId", ProductsController.products_update_product);

router.delete("/:productId", ProductsController.products_delete_product);

module.exports = router;
