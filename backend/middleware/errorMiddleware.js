const notFound = (req, res, next) => {
  // for all routes that do not exist
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  // status code
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    // only stack for development
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
