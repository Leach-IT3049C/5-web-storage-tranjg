const getItems = document.getElementById(`items`);
const getForm = document.getElementById(`form`);
const getList = document.getElementById(`list`);
const addBtn = document.getElementById(`add`);

let itemsArray = localStorage.getItem(`items`) ? JSON.parse(localStorage.getItem(`items`)) : [] ;

