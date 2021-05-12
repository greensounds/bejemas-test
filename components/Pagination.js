import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage, paginatePrev, paginateNext}) => {
    const pageNumbers = [];
    for(let i = 1; i<= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className="paginationWrap">
            { currentPage > 1 ? <a onClick={() => paginatePrev(currentPage)} className="arrow">&lt;</a> : null }
            {pageNumbers.map((number) => (
                <a className={currentPage === number ? 'active' : ''} key={number} onClick={() => paginate(number)}>{number}</a>
            ))}
            { currentPage !== pageNumbers.slice(-1)[0] ? <a onClick={() => paginateNext(currentPage)} className="arrow">&gt;</a> : null  }
        </div>
    );
};

export default Pagination;