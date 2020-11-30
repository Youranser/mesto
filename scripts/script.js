let popup = document.querySelector('.popup');
let addButton = document.querySelector('.profile__edit-button');
let resetButton = document.querySelector('.popup__submit-button');
let formName = document.querySelector('.profile__title');
let formAbout = document.querySelector('.profile__subtitle');
let popupName = document.querySelector('.popup__input-area_name');
let popupAbout = document.querySelector('.popup__input-area_about');
let formElement = document.querySelector('.popup__elements');

function openPopup() {
    popup.classList.remove('popup__condition');
    popupName.value = formName.textContent;
    popupAbout.value = formAbout.textContent;
};

addButton.addEventListener('click', openPopup);

function closePopup() {
    popup.classList.add('popup__condition');
};

resetButton.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
    evt.preventDefault();
    formName.textContent = popupName.value;
    formAbout.textContent = popupAbout.value;
}

formElement.addEventListener('submit', formSubmitHandler); 