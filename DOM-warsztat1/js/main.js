const setBackground = () => {
    let p1 = document.querySelector('.par1');
    let p2 = document.querySelector('.par2');
    
    p1.classList.add('bg-red');
    p2.classList.add('bg-yellow');
}

let btnButton = document.getElementById('button-background');

btnButton.addEventListener('click', setBackground);