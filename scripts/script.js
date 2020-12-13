let popupInfo = document.querySelector('.popup_act_edit-info');
let editButton = document.querySelector('.profile__edit-button');
let resetButton = document.querySelector('.popup_closed');
let formName = document.querySelector('.profile__title');
let formAbout = document.querySelector('.profile__subtitle');
let popupName = document.querySelector('.popup__area_input_name');
let popupAbout = document.querySelector('.popup__area_input_about');

function openPopup() {
    popupInfo.classList.add('popup_opened');
    popupName.value = formName.textContent;
    popupAbout.value = formAbout.textContent;
};

function closePopup() {
    popupInfo.classList.remove('popup_opened');
};

function formSubmitHandler (evt) {
    evt.preventDefault();
    formName.textContent = popupName.value;
    formAbout.textContent = popupAbout.value;
    closePopup();
}

editButton.addEventListener('click', openPopup);
resetButton.addEventListener('click', closePopup);
popupInfo.addEventListener('submit', formSubmitHandler);

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 

const listContainerElement = document.querySelector('.elements');
const templateElement = document.querySelector('.template');
const popupImageElement = document.querySelector('.popup-photo__elements');

function renderList() {
    const listElements = initialCards.map(composeItem);
    listContainerElement.append(...listElements);
}

function composeItem({name, link}) {
    const newItem = templateElement.content.cloneNode(true);
    const headerElement = newItem.querySelector('.element__title');
    const imageElement = newItem.querySelector('.element__image');
    headerElement.textContent = name;
    imageElement.src = link;
    addRemoveListenersToItem(newItem);
    return newItem;
}

function addRemoveListenersToItem(item){       
    const deleteButton = item.querySelector('.element__delete-icon');
    deleteButton.addEventListener('click', removeItem);
}

function removeItem(event){
    const targetItem = event.target.closest('.element');
    targetItem.remove();
}

renderList();

let popupCards = document.querySelector('.popup_act_add-card');
let addButton = document.querySelector('.profile__add-button');
let resetSecButton = document.querySelector('.popup_closed_too');

function openSecPopup() {
    popupCards.classList.add('popup_opened');
};

function closeSecPopup() {
    popupCards.classList.remove('popup_opened');
};

function formSecSubmitHandler (evt) {
    evt.preventDefault();
    closeSecPopup();
}

addButton.addEventListener('click', openSecPopup);
resetSecButton.addEventListener('click', closeSecPopup);
popupCards.addEventListener('submit', formSecSubmitHandler);


function fullImagePopup({name, link}) {
    const popupItem = popupImageElement.content.cloneNode(true);
    const headerOfPopupElement = popupItem.querySelector('.popup-photo__title');
    const imageOfPopupElement = popupItem.querySelector('.popup-photo__image');
    headerOfPopupElement.textContent = name;
    imageOfPopupElement.src = link;
    popupItem.classList.add('popup_opened')
    return popupItem;
}