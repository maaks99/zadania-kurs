$(document).ready(function(){
    
    $('#btn').click(function(){
        
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .done(function(data){

            let pComp = $('<p></p>').text(`Firma: ${data.firma}`);
            let pName = $('<p></p>').text(`Imie: ${data.imie}`);
            let pLname = $('<p></p>').text(`Nazwisko: ${data.nazwisko}`);
            let pOcc = $('<p></p>').text(`Zawod: ${data.zawod}`);
            let hr = $('<hr />');
            
            let div = $('<div></div>').attr('id','dane-programsity');

            let body = $('body');

            body.append(div);

            div.append(pComp);
            div.append(pName);
            div.append(pLname);
            div.append(pOcc);
            div.append(hr);
            
        })
        .fail(function(error){
            console.error(error);
        });

    });
});