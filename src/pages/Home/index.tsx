import React from "react";
import { CharactersCards } from "../../modules/CharactersCards";

interface IHomePageProps {
  classNames?: string[];
}

const HomePage = (props: IHomePageProps) => {
  return (
    <div className="home-page">
      <CharactersCards />
    </div>
  );
};

export default HomePage;
