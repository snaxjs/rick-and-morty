import React from "react";
import { CharactersCards } from "modules/CharactersCards";
import { classNames } from "utils/class_names";
import { useNavigate } from "react-router-dom";
import { PATHS } from "constants/paths";
import Container from "components/Container";

interface IHomePageProps {
  classNames?: string[];
}

const HomePage = (props: IHomePageProps) => {
  const navigate = useNavigate();
  const onCharCardClick = (charId: number) => {
    navigate(PATHS.CHAR.replace(":id", String(charId)));
  };

  return (
    <main className={classNames("home-page", props.classNames)}>
      <Container>
        <h1 className="title home-page__title">Персонажи</h1>
        <CharactersCards onCardClick={onCharCardClick} />
      </Container>
    </main>
  );
};

export default HomePage;
