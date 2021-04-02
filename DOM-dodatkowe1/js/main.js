let btnoblicz = document.getElementById('oblicz');
let wyplac = document.getElementsByClassName('wyplata');
let osoba = document.getElementsByClassName('pracownik')
let czasPracy = document.getElementsByClassName('czas');
let stawkaa = document.getElementsByClassName('stawka');
let bestempl = document.getElementById('najlepsi-pracownicy');
let employeesArr = [];

const licz = () => {

    for (let i = 0; i < stawkaa.length; i++) {

        if (czasPracy[i].value > 160) {

            let podwyzka = parseFloat(czasPracy[i].value) - 160;

            let morehours = parseFloat(stawkaa[i].value) * parseFloat(czasPracy[i].value) + podwyzka * parseFloat(stawkaa[i].value) * 2;

            wyplac[i].innerHTML = `Wypłata ${morehours} zł`;

        } else {
            let allwyplata = parseFloat(stawkaa[i].value) * parseFloat(czasPracy[i].value);

            wyplac[i].innerHTML = `Wypłata ${allwyplata} zł`;
        }

        if (czasPracy[i].value < 100) {

            osoba[i].style.backgroundColor = "red";
        }

        let employeeObj = {};

        employeeObj.pracownik = osoba[i].innerText;
        employeeObj.czas = parseFloat(czasPracy[i].value);

        employeesArr.push(employeeObj);
    
    }

    employeesArr.sort(function(a, b){
        return b.czas-a.czas
    })
    
    let lista = document.createElement('ol');
    bestempl.appendChild(lista);

    for(let j= 0; j<employeesArr.length;j++){

        if(j < 3){
            let oLi = document.createElement('li');
            lista.appendChild(oLi);
            oLi.innerText = employeesArr[j].pracownik;
        }
   }
   
}

btnoblicz.addEventListener('click', licz);