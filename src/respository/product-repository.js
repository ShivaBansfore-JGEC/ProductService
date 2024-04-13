const { Op } = require("sequelize");
const { Product } = require("../models/index");

class ProductRepository {
    async getProducts(filters) {
        try {
            const { page = 1, limit = 2, search, sortBY = "price", sortType = "DESC" } = filters || {};
            const offset = (page - 1) * limit;
            const whereClause = search ? { name: { [Op.like]: `%${search}%` } } : {}
            const { count, rows: data } = await Product.findAndCountAll({
                limit: limit,
                offset,
                where: whereClause,
                order: [[sortBY, sortType]]
            });
            return {
                total_items: count,
                data
            };
        } catch (error) {
            console.log({ error })
            throw (error);
        }

    }
}

module.exports = ProductRepository;