import React from "react";
import { class_names } from "utils/class_names";
import Container from "components/Container";

interface IEpisodesProps {
  classNames?: string[];
}

const EpisodesPage = (props: IEpisodesProps) => {
  return (
    <main className={class_names("episodes-page", props.classNames)}>
      <Container>
        <h1 className="title episodes-page__title">Эпизоды</h1>
      </Container>
    </main>
  );
};

export default EpisodesPage;
