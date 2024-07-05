const pagination = (limit, page_record, current_page, total_record) => {
  const total_page = Math.ceil(total_record / limit);

  return {
    totalRecord: total_record, // whole database data count
    pageRecord: page_record, // current page data count
    totalPage: total_page,
    currentPage: current_page,
    nextPage: current_page >= total_page ? null : current_page + 1,
    prevPage: current_page <= 1 ? null : current_page - 1,
  };
};

// const customPagination = (totalRecord, currentPage, limit) => {
//   var pageRecord = totalRecord - (currentPage - 1) * limit;
//   var totalPage = Math.ceil(totalRecord / limit);
//   return {
//     totalRecord,
//     pageRecord,
//     totalPage,
//     currentPage,
//     nextPage: currentPage >= totalPage ? null : currentPage + 1,
//     prevPage: currentPage <= 1 ? null : currentPage - 1,
//   };
// };

module.exports = pagination;
