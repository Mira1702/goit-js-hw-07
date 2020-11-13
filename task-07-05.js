const nameInput = document.querySelector('#name-input');
nameInput.addEventListener('keydown', element => {
    if (element.code === 'Enter') {
    console.log(element.target.value)        
    }    
    render()
})
function render () {
    ref.htmlValue.textContent = nameInput;
}
const ref = {
    htmlValue: document.querySelector('span#name-output')
}
console.log (nameInput)



/* nameInput.addEventListener('keypress', () => {
    console.log('keypress')
})
nameInput.addEventListener('keyup', {
        console.log('keyup', element)
    }    
}) */

