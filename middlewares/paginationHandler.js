const paginationHandler = (limit) => {
  return (req, res, next) => {
    var total_record = null;
    var page_record = req.query.limit || limit;
    var total_page = null;
    var current_page = null;
    var next_page = null;
    var prev_page = null;

    if (req.query.page) {
      current_page = parseInt(req.query.page);

      req.pagination = {
        total_record,
        page_record,
        total_page,
        current_page,
        next_page,
        prev_page,
      };
    } else {
      req.pagination = null;
    }
    next();
  };
};

module.exports = paginationHandler;
