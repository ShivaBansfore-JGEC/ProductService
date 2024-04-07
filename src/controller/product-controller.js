const { StatusCodes } = require('http-status-codes')
const { ProductService } = require("../services/index");

const productService = new ProductService();


class ProductController {
    constructor() {
        // this.productService = new ProductService();
    }
    async getProducts(req, res) {
        try {
            const filters = req.body;
            const results = await productService.getProducts(filters);
            return res.status(StatusCodes.OK).json({
                data: results,
                success: true,
                status_code: 200,
                error: {}
            })

        } catch (error) {
            return res.status(500).json({
                data: [],
                error: {
                    message: "something went wrong"
                },
                status: false
            })
        }
    }
}

module.exports = ProductController;