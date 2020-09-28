const config = require('./config');

const refererWhitelister = (req, res, next) => {
    if (!config.whiteListedReferers.includes(req.headers.referer))
        next({ status: 403, message: 'Unauthorized' })
    else
        next();
}

const errorHandler = (err, req, res, next) => {
    res.status(err.status).send({ message: err.message })
}

module.exports = { refererWhitelister, errorHandler }