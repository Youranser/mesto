let popup = document.querySelector('.popup');
let addButton = document.querySelector('.profile__edit-button');
let resetButton = document.querySelector('.popup__submit-button');
let formName = document.querySelector('.profile__title');
let formAbout = document.querySelector('.profile__subtitle');
let popupName = document.querySelector('.popup__input-area_name');
let popupAbout = document.querySelector('.popup__input-area_about');
let formElement = document.querySelector('.popup__elements');

function openPopup() {
    popup.classList.add('popup_opened');
    popupName.value = formName.textContent;
    popupAbout.value = formAbout.textContent;
};

function closePopup() {
    popup.classList.remove('popup_opened');
};

function formSubmitHandler (evt) {
    evt.preventDefault();
    formName.textContent = popupName.value;
    formAbout.textContent = popupAbout.value;
    closePopup();
}

addButton.addEventListener('click', openPopup);
resetButton.addEventListener('click', closePopup);
// не совсем понимаю: formElement - это форма, formSubmitHandler - обработчик,
// получается он и так висит на форме, разве нет?
formElement.addEventListener('submit', formSubmitHandler); 