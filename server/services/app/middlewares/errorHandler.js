
const errorHandler = (err, req, res, next) => {
    let errors;
    switch (err.name) {
        case "JsonWebTokenError":
            console.log(err);
            res.status(401).json({ message: 'JWT must be provided' })
            break;
        case "AuthenticationError":
            res.status(401).json({ message: err.message })
            break;
        case "AuthorizationError":
            res.status(403).json({ message: err.message })
            break;
        case "NotFound":
            res.status(404).json({ message: err.message })
            break;
        case "Bad Request":
            res.status(400).json({ message: err.message })
            break;
        case "SequelizeValidationError":
            errorMessage = err.errors.map(e => e.message)
            res.status(400).json({ message: errorMessage })
            break;
        case "SequelizeUniqueConstraintError":
            errorMessage = err.errors.map(e => e.message)
            res.status(400).json({ message: errorMessage })
            break;
        default:
            res.status(500).json({ message: 'Internal Server Error' })
            break;
    }

}

module.exports = errorHandler