import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <label className="popup__input-wrapper">
        <input
          type="text"
          className="popup__input popup__input_add_place-name"
          name="name"
          placeholder="Название"
          maxLength="30"
          minLength="2"
          required
          id="place-input"
        />
        <span className="place-input-error popup__input-error"></span>
      </label>
      <label className="popup__input-wrapper">
        <input
          type="url"
          className="popup__input popup__input_add_place-link"
          name="link"
          placeholder="Ссылка на картинку"
          required
          id="place-url-input"
        />
        <span className="place-url-input-error popup__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
