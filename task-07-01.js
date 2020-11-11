///// находит элемент 
const quantity = document.querySelectorAll(`.item`); 

///// считает количество категорий 
const result = (array) => `В списке ${array.length} категории`;
console.log (result(quantity));

///// распыляет массив
const array = [...quantity];

/////находит потомков
const item = (array) => array.map(element => element.childNodes);
console.log (item(array));

/////
const itemCategory = ;