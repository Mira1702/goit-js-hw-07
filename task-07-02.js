const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const creatListRootRef = document.querySelector('#ingredients');
ingredients.forEach(element => {
    console.log(element);
    const linkRef = document.createElement(`li`); //создает элемент списка li
    linkRef.textContent = element; //добавляет в список текст-содержимое
    creatListRootRef.append(linkRef); //добавляет li в ul
    }
)

//Задание
/* В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement(). */