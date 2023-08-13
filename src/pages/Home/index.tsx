import React from "react";
import { CharactersCards } from "../../modules/CharactersCards";
import { classNames } from "../../utils/ClassNames";

interface IHomePageProps {
  classNames?: string[];
}

const HomePage = (props: IHomePageProps) => {
  return (
    <main className={classNames("home-page", props.classNames)}>
      <div style={{ maxWidth: 1200 }}>
        <CharactersCards />
      </div>
    </main>
  );
};

export default HomePage;
