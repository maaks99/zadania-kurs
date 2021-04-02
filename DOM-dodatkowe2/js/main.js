let btnLicz = document.getElementById('oblicz');

const check = ocena => {

    if(ocena > 6) {
        return 6;
        
    } else {

        return ocena;
    }
}

const licz = () => {

    let ucznie = document.getElementsByClassName('uczen');
    let matma = document.getElementsByClassName('matematyka');
    let pol = document.getElementsByClassName('polski');
    let biol = document.getElementsByClassName('biologia');
    let geo = document.getElementsByClassName('geografia');
    let fiz = document.getElementsByClassName('fizyka');
    let chem = document.getElementsByClassName('chemia');
    let inf = document.getElementsByClassName('informatyka');
    let zajD = document.getElementsByClassName('zajecia-dodatkowe');
    let srOcen = document.getElementsByClassName('srednia');

    for(let i=1; i<matma.length; i++) {
        
         let przedm = zajD[i].value;


         let matOcena = (przedm.includes(matma[i].className))? check(parseFloat(matma[i].value) + 0.5) : parseFloat(matma[i].value);

         let polOcena = (przedm.includes(pol[i].className))? check(parseFloat(pol[i].value) + 0.5) : parseFloat(pol[i].value);
         
         let biolOcena = (przedm.includes(biol[i].className))? check(parseFloat(biol[i].value) + 0.5) : parseFloat(biol[i].value);
         
         let geOcena = (przedm.includes(geo[i].className))? check(parseFloat(geo[i].value) + 0.5) : parseFloat(geo[i].value);
         
         let fizOcena = (przedm.includes(fiz[i].className))? check(parseFloat(fiz[i].value) + 0.5) : parseFloat(fiz[i].value);

         let cheOcena = (przedm.includes(chem[i].className))? check(parseFloat(chem[i].value) + 0.5) : parseFloat(chem[i].value);

         let infOcena = (przedm.includes(inf[i].className))? check(parseFloat(inf[i].value) + 0.5) : parseFloat(inf[i].value);

        
         let wynikSr = ( matOcena + polOcena + biolOcena + geOcena + fizOcena + cheOcena + infOcena ) / 7 ;

             srOcen[i].innerHTML = `${wynikSr}`;

       
        
             if(wynikSr >= 4.75) {

                ucznie[i].style.backgroundColor = "green";
             }else {

                ucznie[i].style.backgroundColor = "";
             }

             if(matma[i].value == 1|| pol[i].value == 1 || biol[i].value == 1 || geo[i].value == 1 || fiz[i].value == 1 || chem[i].value == 1 || inf[i].value == 1) {

                ucznie[i].style.backgroundColor = "red";
            }
    }
          
}

btnLicz.addEventListener('click', licz);