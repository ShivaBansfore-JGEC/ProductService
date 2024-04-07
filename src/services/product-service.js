const { ProductRepository } = require("../respository/index");
class ProductService {
    constructor() {
        this.productRepository = new ProductRepository();
    }

    async getProducts(filters) {
        try {
            const results = await this.productRepository.getProducts(filters);
            return results;
        } catch (error) {
            throw (error);
        }
    }
}

module.exports = ProductService;

