import React, { useEffect } from "react";
import { useGetAllCharactersQuery } from "../../../../services/Characters/characters.endpoints";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { setCharacters } from "../../characters.slice";
import CharCard from "../../../../components/CharCard";

interface ICharactersCardsProps {
  classNames?: string[];
}

export const CharactersCards = (props: ICharactersCardsProps) => {
  const characters = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess } = useGetAllCharactersQuery({
    page: characters.page,
  });

  useEffect(() => {
    if (isSuccess && data?.characters.results.length) {
      dispatch(setCharacters(data.characters.results));
    }
  }, [data]);

  return (
    <div className="characters-cards">
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="characters-cards__cards">
          {data.characters.results.map((char) => (
            <CharCard
              key={char.id}
              name={char.name}
              from={char.origin.name}
              species={char.species}
              image={char.image}
              gender={char.gender}
              status={char.status}
            />
          ))}
        </div>
      )}
    </div>
  );
};
