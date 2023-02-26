import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
    >
      <label className="popup__input-wrapper">
        <input
          type="text"
          className="popup__input popup__input_change_name"
          name="name"
          placeholder="Имя"
          maxLength="40"
          minLength="2"
          required
          id="name-input"
        />
        <span className="name-input-error popup__input-error"></span>
      </label>
      <label className="popup__input-wrapper">
        <input
          type="text"
          className="popup__input popup__input_change_job"
          name="about"
          placeholder="Вид деятельности"
          maxLength="200"
          minLength="2"
          required
          id="job-input"
        />
        <span className="job-input-error popup__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
