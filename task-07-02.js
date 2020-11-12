const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const creatList = ingredients =>{
const containerRef = document.createElement(`ul`); //создает элемент ul
const linkRef = document.createElement(`li`); //создает элемент списка li
linkRef.textContent = ingredients; //добавляет в список текст-содержимое
containerRef.append(linkRef); //добавляет li в ul
return containerRef;
}

const creatListRootRef = document.querySelector('#ingredients');//добавляет созданный элемент в DOM

creatListRootRef.appendChild(creatList(ingredients[0]));
creatListRootRef.appendChild(creatList(ingredients[1]));
creatListRootRef.appendChild(creatList(ingredients[2]));
creatListRootRef.appendChild(creatList(ingredients[3]));
creatListRootRef.appendChild(creatList(ingredients[4]));
creatListRootRef.appendChild(creatList(ingredients[5]));