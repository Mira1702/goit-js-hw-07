const inputRef = document.querySelector('#name-input');
const inputNameRef = document.querySelector('span#name-output')

inputRef.addEventListener('input', event =>{
    inputNameRef.textContent = event.target.value;
})

//Задача
/* Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
подставляет его текущее значение в span#name-output. Если инпут пустой,
 в спане должна отображаться строка 'незнакомец'. */

 /* const ref = {
    inputRef: document.querySelector('#name-input'),
    spanRef: document.querySelector('#name-output')
};
ref.inputRef.addEventListener('input', handleTextInput);
function handleTextInput(event) {
    ref.inputRef.value
        ? ref.spanRef.textContent = event.target.value
        : ref.spanRef.textContent = 'незнакомец';
}; */