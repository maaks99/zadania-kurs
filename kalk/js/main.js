let liczby = document.querySelectorAll('.liczba')
let operatorbtn = document.querySelectorAll('.operator')
let clear = document.querySelector('.wyczysc');
let rownosc = document.querySelector('.rownosc');
let curNumber = document.querySelector('.currentNumber');
let prevNumber = document.querySelector('.previousNumber p');
let mathS = document.querySelector('.mathSign');


let result = '';

const displayNumber = (event) => {

    if(event.target.textContent === '.' && curNumber.innerHTML.includes('.')) {

        return;
    }

    if(event.target.textContent === '.' && curNumber.innerHTML === '') {

        return curNumber.innerHTML = '.0'
    }

    curNumber.innerHTML += event.target.textContent;
} 

const operate = (event) =>  {

    if(curNumber.innerHTML === '' && event.target.textContent === '-') {
        curNumber.innerHTML = '-';
        return;
    } else if (curNumber.innerHTML === '') {
        return;
    }
    if(mathS.innerHTML !== '') {
        showResult();
    }
    prevNumber.innerHTML = curNumber.innerHTML;
    mathS.innerHTML = event.target.textContent;
    curNumber.innerHTML = '';
}

const showResult = (event) => {
    if (prevNumber.innerHTML === '' || curNumber.innerHTML === '') {
        return;
    }

    let a = Number(curNumber.innerHTML);
    let b = Number(prevNumber.innerHTML);
    let oper = mathS.innerHTML;

    switch(oper) {
        case '+':
            result = a+b;
            break;
        case '-':
            result = b-a;
            break;
        case 'x':
            result = a*b;
            break;
        case '÷':
            result = b/a;
            break;
        case '%':
            result = a/100 * b;
            break;

    }

    curNumber.innerHTML = result;
    prevNumber.innerHTML = '';
    mathS.innerHTML = '';
}

const clearScreen = (event) => {
    curNumber.innerHTML = '';
    prevNumber.innerHTML = '';
    mathS.innerHTML = '';
    result = '';
}


 liczby.forEach((button) => {
     button.addEventListener('click',displayNumber)
 })

operatorbtn.forEach((button) => {
    button.addEventListener('click', operate)
}); 

rownosc.addEventListener('click', showResult);

clear.addEventListener('click',clearScreen);



