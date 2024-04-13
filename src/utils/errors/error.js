
class Error {
    constructor(name, message, explaination, statusCode) {
        this.name = name;
        this.message = message;
        this.explaination = explaination;
        this.statusCode = statusCode;
    }
}

module.exports = Error;