import React from "react";
import { class_names } from "utils/class_names";
import Container from "components/Container";

interface ILocationsProps {
  classNames?: string[];
}

const LocationsPage = (props: ILocationsProps) => {
  return (
    <main className={class_names("locations-page", props.classNames)}>
      <Container>
        <h1 className="title locations-page__title">Локации</h1>
      </Container>
    </main>
  );
};

export default LocationsPage;
