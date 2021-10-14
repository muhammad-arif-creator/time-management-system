import React from "react";
import styles from "./Pagination.module.css";

const Pagination = (props) => {
  // let currentPage = props.currentPage;

  let totalpages = Math.ceil(props.totalpage / 10);
  // if (totalpages > 10) {
  //   totalpages = 10;
  // }
  const totalpagesArray = [];
  for (var i = 0; i < totalpages; i++) {
    if (i < 10) {
      totalpagesArray.push(i + 1);
    }
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li
          className="page-item"
          disabled={props.currentpage === 1 ? true : false}
        >
          <button
            className="page-link"
            onClick={() => props.clickpage(props.currentpage - 1)}
          >
            &laquo;
          </button>
        </li>

        {totalpagesArray.map((page, index) => {
          return (
            <li
              key={index}
              className={`page-item ${styles.pageItem} ${
                page === props.currentpage ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => props.clickpage(page)}
              >
                {page}
              </button>
            </li>
          );
        })}
        {totalpages > 10 ? (
          <>
            <li className={`page-item ${styles.pageItem} `}>
              <button className="page-link">...</button>
            </li>
          </>
        ) : (
          ""
        )}

        {props.currentpage > 10 ? (
          <li className={`page-item ${styles.pageItem} active `}>
            <button
              className="page-link"
              onClick={() => props.clickpage(props.currentpage)}
            >
              {props.currentpage}
            </button>
          </li>
        ) : (
          ""
        )}
        <li
          className="page-item"
          disabled={props.currentpage === totalpages ? true : false}
        >
          <button
            className="page-link"
            onClick={() => props.clickpage(props.currentpage + 1)}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
