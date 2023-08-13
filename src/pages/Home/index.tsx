import React from "react";
import { CharactersCards } from "../../modules/CharactersCards";
import { classNames } from "../../utils/ClassNames";
import { MAX_CONTAINER_WIDTH } from "../../constants/media";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants/paths";

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
      <div style={{ maxWidth: MAX_CONTAINER_WIDTH }}>
        <CharactersCards onCardClick={onCharCardClick} />
      </div>
    </main>
  );
};

export default HomePage;
