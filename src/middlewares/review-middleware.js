
const { ClientErrorsCodes } = require("../utils/error-code");
const validateReview = (req, res, next) => {
    if (
        !req?.body.id ||
        !req.body.content ||
        !req.body.product_id ||
        !req?.body?.rating
    ) {
        return res.status(ClientErrorsCodes.BAD_REQUEST).json({
            data: {},
            message: 'Invalid body properties!',
            status: false,
            error: {
                message: 'Mandatory fields are missing!'
            },

        })
    }
    next();
}

module.exports = {
    validateReview
}