import React from "react";
import { CharactersCards } from "../../modules/CharactersCards";
import { classNames } from "../../utils/ClassNames";

interface IHomePageProps {
  classNames?: string[];
}

const HomePage = (props: IHomePageProps) => {
  return (
    <div className={classNames("home-page", props.classNames)}>
      <CharactersCards />
    </div>
  );
};

export default HomePage;
