import React from "react";
import { classNames } from "../../utils/ClassNames";
import Container from "../../components/Container";

interface IEpisodesProps {
  classNames?: string[];
}

const EpisodesPage = (props: IEpisodesProps) => {
  return (
    <main className={classNames("episodes-page", props.classNames)}>
      <Container>
        <h1 className="title episodes-page__title">Эпизоды</h1>
      </Container>
    </main>
  );
};

export default EpisodesPage;
