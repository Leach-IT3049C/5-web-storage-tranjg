const getItems = document.getElementById(`items`);
const getForm = document.getElementById(`form`);
const getList = document.getElementById(`list`);
const addBtn = document.getElementById(`add`);

let itemsArray = localStorage.getItem(`items`) ? JSON.parse(localStorage.getItem(`items`)) : [] ;

localStorage.setItem(`items`, JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem(`items`));

const liMaker = (text) => {
    const li = document.createElement(`li`);
    li.textContent = text;
    getList.appendChild(li);
}

getForm.addEventListener(`submit`, function (e) {
    e.preventDefault();

    itemsArray.push(getItems.value);
    localStorage.setItem(`item`, JSON.stringify(itemsArray));
    liMaker(getItems.value);
    getItems.value="";
});

addBtn.addEventListener(`click`, function () {

    itemsArray.push(getItems.value);
    localStorage.setItem(`item`, JSON.stringify(itemsArray));
    liMaker(getItems.value);
    getItems.value="";
});

