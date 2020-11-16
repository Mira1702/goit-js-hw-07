let counterValue = 0;
function increment () {
    counterValue +=1;
    render()
}
function decrement () {
    counterValue -=1;
    render()
}
function render () {
    ref.htmlValue.textContent = counterValue;
}

//создает объект со ссылками
const ref ={
    buttonDecrement: document.querySelector('[data-action="decrement"]'), //ищет по data-action
    buttonIncrement: document.querySelector('[data-action="increment"]'), //ищет по data-action
    htmlValue: document.querySelector('#value') //ищет по id
}
ref.buttonDecrement.addEventListener('click', decrement);
ref.buttonIncrement.addEventListener('click', increment);

//Задание
/* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса */