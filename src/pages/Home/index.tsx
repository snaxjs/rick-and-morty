import React from "react";
import { CharactersCards } from "../../modules/CharactersCards";
import { classNames } from "../../utils/ClassNames";
import { MAX_CONTAINER_WIDTH } from "../../constants/media";

interface IHomePageProps {
  classNames?: string[];
}

const HomePage = (props: IHomePageProps) => {
  return (
    <main className={classNames("home-page", props.classNames)}>
      <div style={{ maxWidth: MAX_CONTAINER_WIDTH }}>
        <CharactersCards />
      </div>
    </main>
  );
};

export default HomePage;
