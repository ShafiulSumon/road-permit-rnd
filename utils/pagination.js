const pagination = (limit, page_record, current_page, total_record) => {
  const total_page = Math.ceil(total_record / limit);

  return {
    total_record,
    page_record,
    total_page,
    current_page,
    next_page: current_page >= total_page ? null : current_page + 1,
    prev_page: current_page <= 1 ? null : current_page - 1,
  };
};

module.exports = pagination;
