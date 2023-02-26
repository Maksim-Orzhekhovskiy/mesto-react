import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      name="change-avatar"
      title="Обновить аватар"
      buttonText="Да"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <label className="popup__input-wrapper">
        <input
          type="url"
          className="popup__input popup__input_change-avatar"
          name="avatar"
          placeholder="Ссылка на аватар"
          required
          id="avatar-url-input"
        />
        <span className="avatar-url-input-error popup__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
