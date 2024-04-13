const { StatusCodes } = require('http-status-codes');
const Error = require("./error")
class ValidationError extends Error {
    constructor(name, message, explaination) {
        super(name, message, explaination);
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

module.exports = ValidationError;