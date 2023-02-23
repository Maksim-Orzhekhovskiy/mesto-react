import { useState, useEffect } from 'react';
import { api } from "../utils/api";

function Main() {
    function handleEditAvatarClick() {
        const popup = document.querySelector('.popup_type_change-avatar');
        popup.classList.add('popup_opened');
      }
      function handleEditProfileClick() {
        const popup = document.querySelector('.popup_type_edit-block');
        popup.classList.add('popup_opened');
      }
      
      function handleAddPlaceClick() {
        const popup = document.querySelector('.popup_type_add-block');
        popup.classList.add('popup_opened');
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
            <div key={card._id} className="card">
              <img src={card.link} alt="#" className="card__image" style={{ backgroundImage: `url(${card.link})` }}/>
              <button type="button" className="card__delete" aria-label="Удалить"></button>
              <div className="card__wrapper">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-wrapper">
                  <button type="button" className="card__like" aria-label="Мне нравится"></button>
                  <p className="card__like-counter">{card.likes.length}</p>
                </div>
              </div>
            </div>
          ))}
          </section>
        <div className="popup popup_type_edit-block">
          <div className="popup__container">
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__form popup__form_edit-profile" name="edit-profile">
              <label className="popup__input-wrapper">
                <input type="text" className="popup__input popup__input_change_name" name="name" placeholder="Имя" maxLength="40" minlength="2" required id="name-input"/>
                <span className="name-input-error popup__input-error"></span>
              </label>
              <label className="popup__input-wrapper">
                <input type="text" className="popup__input popup__input_change_job" name="job" placeholder="Вид деятельности" maxLength="200" minlength="2" required id="job-input"/>
                <span className="job-input-error popup__input-error"></span>
              </label>
              <button type="submit" className="popup__submit" name="data-sender">Сохранить</button>
            </form>
            <button className="popup__close" type="button" aria-label="Закрыть"></button>
          </div>
        </div>
        <div className="popup popup_type_add-block">
      <div className="popup__container">
      <h2 class="popup__title">Новое место</h2>
      <form class="popup__form popup__form_add-card" name="add-card">
        <label class="popup__input-wrapper">
          <input type="text" class="popup__input popup__input_add_place-name" name="name" placeholder="Название" maxLength="30" minlength="2" required id="place-input"/>
          <span class="place-input-error popup__input-error"></span>
        </label>
        <label class="popup__input-wrapper">
          <input type="url" class="popup__input popup__input_add_place-link" name="link" placeholder="Ссылка на картинку" required id="place-url-input"/>
          <span class="place-url-input-error popup__input-error"></span>
        </label>
        <button type="submit" class="popup__submit" name="data-sender">Создать</button>
      </form>
      <button class="popup__close" type="button" aria-label="Закрыть"></button>
    </div>
        </div>
        <div className="popup popup_dark_theme popup_type_open-image">
          <div className="popup__image-container">
            <div className="popup__image-wrapper">
              <img src="#" alt="#" className="popup__image"/>
              <p className="popup__image-description"></p>
            </div>
            <button className="popup__close" type="button" aria-label="Закрыть"></button>
          </div>
        </div>
        <div className="popup popup_type_delete-card">
          <div className="popup__container">
            <h2 className="popup__title">Вы уверены?</h2>
            <form className="popup__form popup__form_delete-card" name="delete-card">
              <button type="submit" className="popup__submit" name="data-sender">Да</button>
            </form>
            <button className="popup__close" type="button" aria-label="Закрыть"></button>
          </div>
        </div>
        <div className="popup popup_type_change-avatar">
          <div className="popup__container">
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="popup__form popup__form_change-avatar" name="link">
              <label className="popup__input-wrapper">
                <input type="url" className="popup__input popup__input_change-avatar" name="avatar" placeholder="Ссылка на аватар" required id="avatar-url-input"/>
                <span className="avatar-url-input-error popup__input-error"></span>
              </label>
              <button type="submit" className="popup__submit" name="data-sender">Да</button>
            </form>
            <button className="popup__close" type="button" aria-label="Закрыть"></button>
          </div>
        </div>
        <template className="card-template">
          {cards.map((card) => (
            <div key={card._id} className="card">
              <img src={card.link} alt="#" className="card__image" style={{ backgroundImage: `url(${card.link})` }}/>
              <button type="button" className="card__delete" aria-label="Удалить"></button>
              <div className="card__wrapper">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-wrapper">
                  <button type="button" className="card__like" aria-label="Мне нравится"></button>
                  <p className="card__like-counter">{card.likes.length}</p>
                </div>
              </div>
            </div>
          ))}
        </template>
        </main>
      );
}

export default Main;

