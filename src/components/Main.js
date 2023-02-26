import { useState, useEffect } from 'react';
import { api } from "../utils/api";
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  function handleEditAvatarClick() {
    onEditAvatar();
    }
    function handleEditProfileClick() {
    onEditProfile();
    }
    function handleAddPlaceClick() {
    onAddPlace();
    }
      
      const [userName, setUserName] = useState('');
      const [userDescription, setUserDescription] = useState('');
      const [userAvatar, setUserAvatar] = useState('');
      const [cards, setCards] = useState([]);
      
      useEffect(() => {
        api.getUserData()
          .then(data => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

      useEffect(() => {
        api.getInitialCards()
          .then((cards) => {
            setCards(cards);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      return (
        <main className="content page__content">
          <section className="profile">
            <div className="profile__edit-block">
              <div className="profile__avatar-wrapper">
                <img src={userAvatar} style={{ backgroundImage: `url(${userAvatar})` }} alt="Ваш аватар" className="profile__avatar" />
                <button className="profile__avatar-edit-button" onClick={handleEditAvatarClick}></button>
              </div>
              <div className="profile__info">
                <div className="profile__info-wrapper">
                  <h1 className="profile__title">{userName}</h1>
                  <button type="button" className="profile__edit-button" aria-label="Редактировать" onClick={handleEditProfileClick}></button>
                </div>
                <p className="profile__subtitle">{userDescription}</p>
              </div>
            </div>
            <button className="profile__add-button" type="button" aria-label="Добавить" onClick={handleAddPlaceClick}></button>
          </section>
          <section className="cards">
            {cards.map((card) => (
              <Card 
              key={card._id} card={card}
              onCardClick={onCardClick}
              />
            ))}
          </section>
        </main>
      );
}

export default Main;

