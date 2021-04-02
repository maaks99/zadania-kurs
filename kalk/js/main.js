let liczby = document.querySelectorAll('.liczba')
let operatorbtn = document.querySelectorAll('.operator')
let clear = document.querySelector('.wyczysc');
let rownosc = document.querySelector('.rownosc');
let curNumber = document.querySelector('.currentNumber');
let prevNumber = document.querySelector('.previousNumber p');
let mathS = document.querySelector('.mathSign');


let result = '';

const displayNumber = () => {

    if(this.textContent === '.' && curNumber.innerHTML.includes('.')) {

        return;
    }

    if(this.textContent === '.' && curNumber.innerHTML === '') {

        return curNumber.innerHTML = '.0'
    }

    curNumber.innerHTML += this.textContent;
    console.log(curNumber);
} 

const operate = () =>  {

    if(curNumber.innerHTML === '' && this.textContent === '-') {
        curNumber.innerHTML = '-';
        return;
    }
}

const showResult = () => {
    
}

const clearScreen = () => {
    
}

 liczby.forEach((button) => {
     button.addEventListener('click',displayNumber)
 })

operatorbtn.forEach((button) => {
    button.addEventListener('click', operate)
}); 

rownosc.addEventListener('click', showResult);

clear.addEventListener('click',clearScreen);



