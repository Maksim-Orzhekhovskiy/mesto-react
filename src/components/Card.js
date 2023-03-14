import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <div className="card">
      <img
        src={props.card.link}
        alt={props.card.name}
        className="card__image"
        onClick={handleClick}
      />
      {isOwn && (
        <button
          type="button"
          className="card__delete"
          aria-label="Удалить"
          onClick={handleDeleteClick}
        ></button>
      )}
      <div className="card__wrapper">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-wrapper">
          <button
            type="button"
            className={`card__like ${
              props.card.likes.some((like) => like._id === currentUser._id)
                ? "card__like_active"
                : ""
            }`}
            aria-label="Мне нравится"
          ></button>
          <p className="card__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
