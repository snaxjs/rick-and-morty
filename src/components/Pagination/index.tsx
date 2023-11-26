import React, { useEffect, useState } from "react";
import RoundButton from "components/RoundButton";
import { COLORS } from "constants/colors";
import { useAppDispatch } from "hooks/redux";
import IconSwitch from "assets/icons/switch.svg";
import { PaginationSwitchEnum } from "./data_structures";
import { classNames } from "utils/class_names";
import Input from "components/Input";

interface IPaginationProps {
  classNames?: string[];
  totalPages: number;
  currentPage: number;
  onClick?: (e: React.MouseEvent) => void;
  setPage?: any;
}

// Кол-во кнопок с цифрами
const MAX_BUTTONS = 4;

const Pagination = (props: IPaginationProps) => {
  const [elements, setElements] = useState([]);
  //@ts-ignore
  const [type, setType] = useState<PaginationSwitchEnum>(
    PaginationSwitchEnum.numbers,
  );
  const dispatch = useAppDispatch();

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

  const onArrowClick = (e: React.MouseEvent) => {
    const isPrev = e.currentTarget.getAttribute("data-type") === "prev";

    if (isPrev && props.setPage) {
      const page = props.currentPage - 1 || props.currentPage;
      dispatch(props.setPage(page));
    }

    if (!isPrev && props.setPage) {
      const page =
        props.currentPage + MAX_BUTTONS >= props.totalPages - MAX_BUTTONS + 1
          ? props.totalPages - MAX_BUTTONS + 1
          : props.currentPage + MAX_BUTTONS;
      dispatch(props.setPage(page));
    }
  };

  const onSwitchClick = () => {
    setType((prev: PaginationSwitchEnum) =>
      prev === PaginationSwitchEnum.page
        ? PaginationSwitchEnum.numbers
        : PaginationSwitchEnum.page,
    );
  };

  useEffect(() => {
    fillElems();
  }, [props.currentPage, props.totalPages]);

  return (
    <div className={classNames("pagination", props.classNames)}>
      <div className="pagination__controls-wrapper">
        <div
          className={classNames("pagination__controls", [
            type === PaginationSwitchEnum.page
              ? "pagination__controls_show-page"
              : "",
          ])}
        >
          <div className={"pagination__numbers"}>
            {props.currentPage === 1 ? null : (
              <RoundButton
                color={COLORS.GRAYSCALE_LABEL}
                onClick={onArrowClick}
                attributes={[
                  {
                    name: "data-type",
                    value: "prev",
                  },
                ]}
              >
                {"<"}
              </RoundButton>
            )}
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
            <RoundButton
              color={COLORS.GRAYSCALE_LABEL}
              onClick={onArrowClick}
              attributes={[
                {
                  name: "data-type",
                  value: "next",
                },
              ]}
            >
              {">>"}
            </RoundButton>
          </div>
          <div className="pagination__page-input">
            <Input
              stylesContainer={{ paddingRight: 2, maxWidth: 88 }}
              type="text"
              actionElement={
                <RoundButton
                  styles={{
                    width: 25,
                    height: 25,
                    fontSize: 11,
                  }}
                >
                  Go!
                </RoundButton>
              }
            />
          </div>
        </div>
      </div>
      <RoundButton
        classNames={["pagination__switch"]}
        color={COLORS.GRAYSCALE_LABEL}
        onClick={onSwitchClick}
      >
        <IconSwitch width={14} height={14} fill="white" />
      </RoundButton>
    </div>
  );
};

export default Pagination;
