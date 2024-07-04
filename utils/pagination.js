const pagination = (limit, page_record, current_page, total_record) => {
  const total_page = Math.ceil(total_record / limit);

  return {
    totalRecord: total_record,
    pageRecord: page_record,
    totalPage: total_page,
    currentPage: current_page,
    nextPage: current_page >= total_page ? null : current_page + 1,
    prevPage: current_page <= 1 ? null : current_page - 1,
  };
};

module.exports = pagination;
