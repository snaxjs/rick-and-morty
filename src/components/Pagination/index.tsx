import React, { useEffect, useState } from "react";

interface IPaginationProps {
  classNames?: string[];
  pages: number;
  currentPage: number;
  onClick?: (e: React.MouseEvent) => void;
}

const MAX_BUTTONS = 5;

const Button = (
  page: number,
  onClick?: (e: React.MouseEvent) => void,
  className?: string,
) => {
  return (
    <button
      className={className}
      key={page}
      data-page={page}
      onClick={onClick}
      disabled={!page}
    >
      {page ? page : "..."}
    </button>
  );
};

const Pagination = (props: IPaginationProps) => {
  const [elements, setElements] = useState([]);

  const fillElements = () => {
    let elems: number[] = [];
    // flag - кол-во кнопок которые нужно отрендерить
    const flag = props.pages < MAX_BUTTONS ? props.pages : MAX_BUTTONS;
    const inc = props.currentPage > 1 ? props.currentPage - 1 : 1;

    for (let i = inc; i < flag + inc; i++) {
      if (i <= props.pages && i >= 1) {
        elems.push(i);
      }
    }

    elems[elems.length - 1] = props.pages;

    if (elems[elems.length - 1] - elems[elems.length - 2] !== 1) {
      elems[elems.length - 2] = 0;
    }

    if (
      elems.includes(0) ||
      (elems[elems.length - 1] - elems[elems.length - 2] === 1 &&
        elems.length === flag)
    ) {
      setElements(elems);
    }
  };

  useEffect(() => {
    fillElements();
  }, [props.pages, props.currentPage]);

  return (
    <div className="pagination">
      {elements.map((page) => {
        const isCurrent =
          page === props.currentPage ? " pagination__button_current" : "";
        const isDots = !page ? " pagination__button_dots" : "";
        const className = `pagination__button${isCurrent}${isDots}`;

        return Button(page, props.onClick, className);
      })}
    </div>
  );
};

export default Pagination;
