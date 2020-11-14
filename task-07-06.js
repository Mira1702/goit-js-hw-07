const myInput = document.querySelector('#validation-input');
const myDataLength = document.querySelector('[data-length="6"]');
const myDataLengthLength = myDataLength.dataset.length;//определяет параметр data-length

myInput.addEventListener('focus', () =>{
    console.log('получил фокус')
})
myInput.addEventListener('blur', () =>{
    if (myInput.value.length === Number(myDataLength.dataset.length)) { 
        myInput.classList.add('valid');
        myInput.classList.remove('invalid');
      } else { 
        myInput.classList.remove('valid');     
        myInput.classList.add('invalid');
      }
      console.log(myInput.value.length);
      console.log(myInput)
      console.log(myDataLengthLength)
})

//Задание
/* Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
} */


/* myInput.classList.add('valid');//добавляет класс valid
myInput.classList.add('invalid');//добавляет класс invalid

const vld = document.querySelector('.valid');
vld.style.borderColor = '#4caf50';

const invld = document.querySelector('.invalid');
invld.style.borderColor = '#f44336';

console.log(myInput)
console.log(myDataLengthLength)

document.getElementById("validation-input").onblur = function() {
    console.log(this.value.length);
    if (this.getAttribute('data-length') > this.value.length) { 
      this.classList.remove('valid');
      this.classList.add('invalid');
    } else {
      this.classList.remove('invalid');
      this.classList.add('valid');
    }
    console.log(this.value.length);
}; */
/* myInput.addEventListener('change', elem => {
    if (elem.target.value.length > 6){
        
    } else {
        
   }
})
 */

/* if (myInput.text === myDataLengthLength){
    console.log('yes')
} else {console.log('no')} */




/* myInput.style.border = '3px solid #bdbdbd';
 */
/* myInput.addEventListener('change', elem => {
if (elem.target.value.length === myInput.dataLength){
    myInput.classList.add('valid');
} else {myInput.classList.add('invalid')}
})

console.log(myInput)
console.log(myDataLengthLength) */
