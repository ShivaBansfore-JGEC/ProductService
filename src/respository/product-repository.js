
const { Product } = require("../models/index");

class ProductRepository {

    async getProducts(filters) {
        try {
            const results = await Product.findAll();
            return results;
        } catch (error) {
            throw (error);
        }

    }

}

module.exports = ProductRepository;