const { StatusCodes } = require('http-status-codes');
const Error = require('./error');
class ServiceError extends Error {
    constructor(name, message, explaination, statusCode) {
        super(name, message, explaination, statusCode)
        this.name = "Service Error";
        this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    }
}

module.exports = ServiceError;