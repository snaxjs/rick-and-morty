import React, { useEffect } from "react";
import { useGetAllCharactersQuery } from "../../../../services/Characters/characters.endpoints";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { setCharacters, setPage, setTotalPages } from "../../characters.slice";
import CharCard from "../../../../components/CharCard";
import { ErrorHandler } from "../../../../utils/ErrorHandler";
import { classNames } from "../../../../utils/ClassNames";
import Pagination from "../../../../components/Pagination";

interface ICharactersCardsProps {
  classNames?: string[];
}

export const CharactersCards = (props: ICharactersCardsProps) => {
  const characters = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess, error, isError } =
    useGetAllCharactersQuery({
      page: characters.page,
    });

  useEffect(() => {
    if (isSuccess && data?.characters.results.length) {
      dispatch(setCharacters(data.characters.results));
      dispatch(setTotalPages(data.characters.info.pages));
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
      <Pagination
        pages={9}
        currentPage={characters.page}
        onClick={onPagination}
      />
      {/*{isLoading ? (*/}
      {/*  <span>Loading...</span>*/}
      {/*) : (*/}
      {/*  <div className="characters-cards__cards">*/}
      {/*    {data?.characters.results.map((char) => (*/}
      {/*      <CharCard*/}
      {/*        key={char.id}*/}
      {/*        name={char.name}*/}
      {/*        from={char.origin.name}*/}
      {/*        species={char.species}*/}
      {/*        image={char.image}*/}
      {/*        gender={char.gender}*/}
      {/*        status={char.status}*/}
      {/*      />*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
};
