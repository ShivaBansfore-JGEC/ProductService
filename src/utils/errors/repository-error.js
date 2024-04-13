const { StatusCodes } = require('http-status-codes');
const Error = require("./error");

class RepositoryError extends Error {
    constructor(name, error) {
        super(name);
        let explainations = [];
        if (error?.length)
            explainations = error.map(err => err.message);
        this.message = "Validation Error";
        this.explaination = explainations;
        this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    }
}

module.exports = RepositoryError;