const myInput = document.querySelector('#validation-input');
const myDataLength = document.querySelector('[data-length="6"]');
const myDataLengthLength = myDataLength.dataset.length;//определяет параметр data-length

myInput.addEventListener('focus', () =>{
    console.log('получил фокус')
})
myInput.addEventListener('blur', () =>{
    if (myInput.value.length === myDataLengthLength) { 
        myInput.classList.add('valid');
      } else {        
        myInput.classList.add('invalid');
      }
      console.log(myInput.value.length);
      console.log(myInput)
      console.log(myDataLengthLength)
})


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
