import React from 'react';
import Styles from './Pagination.module.css';

const Pagination = ({ activePage, perPage, posts, updatePage }) => {
  const totalPages = Math.ceil(posts.length / perPage);

  const handlePageChange = (updatedPage) => {
    updatePage(updatedPage);
  };

  return (
    <div className={Styles.paginationWrapper} data-testid='paginationWrapper'>
      {activePage > 1 && (
        <button
          className={Styles.prevBtn}
          onClick={() => handlePageChange(activePage - 1)}
        >
          Prev
        </button>
      )}

      {/* render the buttons here, directly. Ensure, each button has the "data-testid='btn'" prop. Add the className, activeBtn, if the current button is the activePage*/}
      {posts.length > 0 &&
        [...Array(totalPages)].map((ele, index) => (
          <button
            key={index}
            className={activePage === index + 1 ? Styles.activeBtn : ''}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      {activePage < totalPages && (
        <button
          className={Styles.nextBtn}
          onClick={() => handlePageChange(activePage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
