
const { ClientErrorsCodes } = require("../utils/error-code");
const validateReview = (req, res, next) => {
    if (
        !req.body.content ||
        !req.body.productId ||
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