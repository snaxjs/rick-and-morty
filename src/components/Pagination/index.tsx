import React, { useEffect, useState } from "react";
import RoundButton from "components/RoundButton";

interface IPaginationProps {
  classNames?: string[];
  totalPages: number;
  currentPage: number;
  onClick?: (e: React.MouseEvent) => void;
}

const MAX_BUTTONS = 5;

const Pagination = (props: IPaginationProps) => {
  const [elements, setElements] = useState([]);

  const elemsOutOfRange = (elems: number[], range: number) => {
    return !!(elems.find((item) => item > range) && elems.length !== range);
  };

  const generateElems = (count: number, increment: number): number[] => {
    let elems: number[] = [];

    Array.from(Array(count).keys()).forEach((page) => {
      const pageNumber: number = page + increment;
      elems.push(pageNumber);
    });

    return elems;
  };

  const fillElems = () => {
    const increment = props.totalPages > MAX_BUTTONS ? props.currentPage : 1;
    const count =
      props.totalPages > MAX_BUTTONS ? MAX_BUTTONS : props.totalPages;
    let elems: number[] = generateElems(count, increment);

    if (elemsOutOfRange(elems, props.totalPages)) {
      const staticInc = props.totalPages - MAX_BUTTONS + 1;
      elems = generateElems(MAX_BUTTONS, staticInc);
    }

    setElements(elems);
  };

  useEffect(() => {
    fillElems();
  }, [props.currentPage, props.totalPages]);

  return (
    <div className="pagination">
      {!!elements.length &&
        elements.map((page) => {
          return (
            <RoundButton
              key={page}
              onClick={props.onClick}
              attributes={[{ name: "data-page", value: page }]}
            >
              {page}
            </RoundButton>
          );
        })}
    </div>
  );
};

export default Pagination;
