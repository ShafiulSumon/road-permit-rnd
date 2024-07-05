const paginationHandler = (req, res, next) => {
  const limit = req.query.limit || 5;
  const current_page = req.query.page || 1;
  req.pageInfo = {
    limit,
    current_page: parseInt(current_page) ?? null,
  };
  if (current_page === null) {
    req.pageInfo = null;
  }
  next();
};

module.exports = paginationHandler;
