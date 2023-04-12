const ProductManager = require("./class/ProductManager");
const [Instruments,StratoCaster,LesPaul] =  require("./products/products.js");

// instaciar la clase

const newProductManager = new ProductManager('db/db.json')

//newProductManager.addProduct(LesPaul)
//newProductManager.getProducts()
//newProductManager.getProductsByID(4)
//newProductManager.updateProductByID(3,{stock:600})
newProductManager.deleteProductByID(2)


//console.log(Instruments)