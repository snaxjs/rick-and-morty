import React from "react";
import { class_names } from "utils/class_names";
import { useGetCharacterQuery } from "services/Characters/characters.api";
import { useParams } from "react-router-dom";

const CharPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCharacterQuery(Number(id));

  return (
    <main className={class_names("char-page")}>
      {isLoading ? null : JSON.stringify(data, null, 2)}
    </main>
  );
};

export default CharPage;
