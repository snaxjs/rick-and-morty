import React, { useEffect, useState } from "react";

interface IPaginationProps {
  classNames?: string[];
  pages: number;
  currentPage: number;
  onClick?: (e: React.MouseEvent) => void;
}

const MAX_BUTTONS = 4;

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

  const fillElementsFromLast = (total: number, maxButtons: number) => {
    let elems = [];

    for (let i = 0; i <= maxButtons; i++) {
      total - i && elems.push(total - i);
    }

    return elems.reverse();
  };

  const fillElementsFromStart = (
    maxButtons: number,
    mayUpdateElems: boolean,
    pages: number,
    currentPage: number,
  ) => {
    let elems: number[] = [];

    for (let i = 0; i <= maxButtons; i++) {
      const isLast = i === maxButtons;

      if (!isLast && mayUpdateElems) {
        elems.push(i + currentPage);
      }

      if (isLast && mayUpdateElems) {
        elems.push(pages);
      }
    }

    return elems;
  };

  const isShowDots = (elements: number[]) => {
    return elements[elements.length - 1] - elements[elements.length - 2] !== 1;
  };

  const fillElements = () => {
    let elems: number[] = [];
    const maxButtons = props.pages < MAX_BUTTONS ? props.pages : MAX_BUTTONS;
    let mayUpdateElems =
      elements[0] < props.pages - maxButtons || !elements.length;

    elems = fillElementsFromStart(
      maxButtons,
      mayUpdateElems,
      props.pages,
      props.currentPage,
    );

    if (props.currentPage >= props.pages - maxButtons) {
      elems = fillElementsFromLast(props.pages, maxButtons);
    }

    mayUpdateElems = elements[0] < props.pages - maxButtons || !elements.length;

    if (isShowDots(elems)) {
      elems[elems.length - 2] = 0;
    }

    if (mayUpdateElems) {
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
