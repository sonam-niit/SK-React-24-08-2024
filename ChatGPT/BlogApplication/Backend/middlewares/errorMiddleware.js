// middlewares/errorMiddleware.js
const errorMiddleware = (err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message || "An unexpected error occurred."
        }
    });
};

module.exports = errorMiddleware;
