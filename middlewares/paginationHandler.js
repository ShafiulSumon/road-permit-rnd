const paginationHandler = (req, res, next) => {
  const limit = 2;
  const page_record = req.query.limit || limit;
  const current_page = req.query.page || null;
  console.log(page_record);
  console.log(current_page);
  req.pageInfo = {
    page_record,
    current_page: parseInt(current_page) ?? null,
  };
  if (current_page === null) {
    req.pageInfo = null;
  }
  next();
};

module.exports = paginationHandler;
