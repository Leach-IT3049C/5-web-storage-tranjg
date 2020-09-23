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

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i=0; i < close.length; i++) {
        close[i].onclick=function () {
            let div = this.parentElement;
            div.style.display = `none`;
        }
    }
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

data.forEach(item => {
    liMaker(getItems);
});

const myNodelist = document.getElementsByTagName(`LI`);
let i;
for (i = 0; i < myNodelist.length; i++) {
    const span = document.createElement(`SPAN`);
    const txt = document.createTextNode(`\u00d7`);
    span.className = `close;`
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}