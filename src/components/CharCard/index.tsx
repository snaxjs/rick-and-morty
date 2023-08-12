import React from "react";
import { CharGenderTypes } from "../../services/Characters/types";
import { classNames } from "../../utils/ClassNames";

interface ICharCardProps {
  classNames?: string[];
  image?: string;
  name?: string;
  status?: string;
  from?: string;
  species?: string;
  gender?: CharGenderTypes;
}

const CharCard = (props: ICharCardProps) => {
  const status: string = props.status
    ? ` char-card__char-status_${props.status.toLowerCase()}`
    : "";

  return (
    <div className={classNames("char-card", props.classNames)}>
      <section className="char-card__image-wrapper">
        <img className="char-card__image" src={props.image} alt={props.name} />
      </section>
      <section className="char-card__char-info">
        <div className="char-card__name-wrapper">
          <h3 className="char-card__char-name" title={props.name}>
            {props.name}
          </h3>
          <span className="char-card__char-species" title={props.species}>
            {props.species}
          </span>
          <span className="char-card__char-gender" title={props.gender}>
            {props.gender}
          </span>
          <span className="char-card__char-from" title={props.from}>
            {props.from}
          </span>
        </div>
        <span className={`char-card__char-status${status}`}>
          {props.status.toLowerCase()}
        </span>
      </section>
    </div>
  );
};

export default CharCard;
