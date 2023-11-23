import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import {
  setCharacters,
  setPage,
  setTotalPages,
} from "modules/CharactersCards/characters.slice";
import CharCard from "components/CharCard";
import { ErrorHandler } from "utils/ErrorHandler";
import { classNames } from "utils/ClassNames";
import Pagination from "components/Pagination";
import { useGetAllCharactersQuery } from "services/Characters/characters.api";
import Spinner from "components/Spinner";
import { COLORS } from "constants/colors";

interface ICharactersCardsProps {
  classNames?: string[];
  onCardClick?: (value?: any) => void;
}

export const CharactersCards = (props: ICharactersCardsProps) => {
  const characters = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess, error, isError } =
    useGetAllCharactersQuery(characters.page);

  useEffect(() => {
    if (isSuccess && data?.results.length) {
      dispatch(setCharacters(data.results));
      dispatch(setTotalPages(data.info.pages));
    }

    if (isError) {
      ErrorHandler(error);
    }
  }, [data, error]);

  const onPagination = (e: React.MouseEvent) => {
    const page = Number(e.currentTarget.getAttribute("data-page"));
    dispatch(setPage(page));
  };

  return (
    <div className={classNames("characters-cards", props.classNames)}>
      {isLoading ? (
        <Spinner color={COLORS.PRIMARY} />
      ) : (
        <div className="characters-cards__cards">
          {characters.list.map((char) => (
            <div
              className="characters-cards__card-wrapper"
              key={char.id}
              onClick={() => props.onCardClick(char.id)}
            >
              <CharCard
                classNames={["characters-cards__card"]}
                name={char.name}
                from={char.origin.name}
                species={char.species}
                image={char.image}
                gender={char.gender}
                status={char.status}
              />
            </div>
          ))}
        </div>
      )}
      <Pagination
        totalPages={characters.totalPages}
        currentPage={characters.page}
        onClick={onPagination}
      />
    </div>
  );
};
