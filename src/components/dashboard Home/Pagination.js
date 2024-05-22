// src/components/Pagination.js
import React from 'react';
import ReactPaginate from 'react-paginate';
import './dataTable.css'; 

const Pagination = ({ page, pageSize, totalRecords, setPage, setPageSize }) => {
  const pageCount = Math.ceil(totalRecords / pageSize);

  const handlePageChange = ({ selected }) => {
    setPage(selected + 1);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(Number(event.target.value));
    setPage(1); 
  };

  return (
    <div className="pagination-container">
      <ReactPaginate
        previousLabel={page === 1 ? null : 'Previous'}
        nextLabel={page === pageCount ? null : 'Next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        forcePage={page - 1}
      />
      <div className="select-container">
        <select value={pageSize} onChange={handlePageSizeChange}>
          {[10, 50, 100].map(size => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
