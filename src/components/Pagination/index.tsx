import React, { useEffect, useState } from "react";

interface IPaginationProps {
  classNames?: string[];
  totalPages: number;
  currentPage: number;
  onClick?: (e: React.MouseEvent) => void;
}

const MAX_BUTTONS = 4;

const Pagination = (props: IPaginationProps) => {
  const [elements, setElements] = useState([]);

  const elemsOutOfRange = (elems: number[], range: number) => {
    return !!elems.find((item) => item > range);
  };

  const generateElems = (count: number, increment: number): number[] => {
    let elems: number[] = [];

    Array.from(Array(count).keys()).map((page) => {
      const pageNumber: number = page + increment;
      elems.push(pageNumber);
    });

    return elems;
  };

  const fillElems = () => {
    let elems: number[] = generateElems(MAX_BUTTONS, props.currentPage);

    if (elemsOutOfRange(elems, props.totalPages)) {
      generateElems(MAX_BUTTONS, props.totalPages - MAX_BUTTONS);
    }

    setElements(elems);
  };

  useEffect(() => {
    fillElems();
  }, [props.currentPage]);

  return (
    <div className="pagination">
      {!!elements.length &&
        elements.map((page) => {
          return (
            <button key={page} onClick={props.onClick} data-page={page}>
              {page}
            </button>
          );
        })}
    </div>
  );
};

export default Pagination;
