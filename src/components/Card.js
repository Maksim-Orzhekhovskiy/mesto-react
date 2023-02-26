import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="card">
      <img src={props.card.link} alt="#" className="card__image" onClick={handleClick} />
      <button type="button" className="card__delete" aria-label="Удалить"></button>
      <div className="card__wrapper">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-wrapper">
          <button type="button" className="card__like" aria-label="Мне нравится"></button>
          <p className="card__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;