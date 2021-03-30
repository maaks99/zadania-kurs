let form = document.getElementById('form-main');
let allagreeChx = document.getElementById('allagree');

const validate = (event) => {
    let txtname = document.getElementById('name');
    let txtemail = document.getElementById('email');
    let agree1 = document.getElementById('agree1');
    let errors = document.getElementById('errors');
    
    errors.innerHTML = '';

    if(txtname.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imie i nazwisko!';
        errors.appendChild(liError);
        
    }

    if(txtemail.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres email!';
        errors.appendChild(liError);
        
    }

    if(!txtemail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Adres email musi zawierać znak @';
        errors.appendChild(liError);
        
    }

    if(!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Zgoda numer 1 nie została zaznaczona!';
        errors.appendChild(liError);
        
    }

    if(errors.children.length > 0){
        event.preventDefault();
    }
    
    
} 

const allagree = (event) => {
    let agree1 = document.getElementById('agree1');
    let agree2 = document.getElementById('agree2');
    
    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
}

form.addEventListener('submit', validate);
allagreeChx.addEventListener('change', allagree);