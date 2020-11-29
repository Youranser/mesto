let popup = document.querySelector('.popup');
let addButton = document.querySelector('.profile__edit-button');
let resetButton = document.querySelector('.popup__submit-button');
let popupSave = popup.querySelector('.popup__save');
let formName = document.querySelector('.profile__title');
let formAbout = document.querySelector('.profile__subtitle');
let popupName = document.querySelector('.popup__name');
let popupAbout = document.querySelector('.popup__about');

function openPopup() {
    popup.setAttribute('style', 'display: block');
    popupName.value = formName.textContent;
    popupAbout.value = formAbout.textContent;
};

addButton.addEventListener('click', openPopup);

function closePopup() {
    popup.setAttribute('style', 'display: none');
    formName.textContent = popupName.value;
    formAbout.textContent = popupAbout.value;
};

let formElement = document.querySelector('.popup__elements');

function formSubmitHandler (evt) {
    evt.preventDefault();
    popupName.value = formName.textContent;
    popupAbout.value = formAbout.textContent;
}

formElement.addEventListener('submit', formSubmitHandler); 

resetButton.addEventListener('click', closePopup);

popupSave.addEventListener('click', closePopup);
