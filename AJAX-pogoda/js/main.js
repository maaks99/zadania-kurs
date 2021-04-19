$(document).ready(function(){
    
    $.getJSON('https://danepubliczne.imgw.pl/api/data/synop')
    .done(function(data){
        console.log(data);

        for(let i=0; i<data.length; i++){

            let cont = $('#container');
            let div = $('<div></div>').attr('id','div-info');
            let city = $('<h3></h3>').attr('id','city-name');
            let temp = $('<p></p>').attr('id','p-temp');
            let wilWz = $('<p></p>').attr('id', 'wil-p');
            let cis = $('<p></p>').attr('id','cis-p');

            city.text(`${data[i].stacja}`);
            temp.text(`Temperatura: ${data[i].temperatura}°C`);
            wilWz.text(`Wilgotność względna: ${data[i].wilgotnosc_wzgledna}%`);
            cis.text(`Ciśnienie: ${data[i].cisnienie} hPa`);

            cont.append(div);
            div.append(city);
            div.append(temp);
            div.append(wilWz);
            div.append(cis);
            
        
            div.click(function(event){
                console.log('klik');
                
                $('.outer').fadeIn();
                $('#bgOff').fadeIn();

                let divText = $('.inner');
                let divPopup = $('.outer');
                
                let date = $('<span></span>').text(`Data pomiaru: ${data[i].data_pomiaru}`);
                let godz = $('<span></span>').text(`Godzina pomirau: ${data[i].godzina_pomiaru}`);
                let sumOp = $('<span></span>').text(`Suma opadu: ${data[i].suma_opadu}`);
                let prWi = $('<span></span>').text(`Predkosc wiatru: ${data[i].predkosc_wiatru}`);
                let kierW = $('<span></span>').text(`Kierunek wiatru: ${data[i].kierunek_wiatru}`);
               
                divPopup.append(divText);

                divText.append(date);
                divText.append(godz);
                divText.append(sumOp);
                divText.append(prWi);
                divText.append(kierW);
                
                
            });
            
            $('.close-button').click(function(){
                $('#bgOff').fadeOut();
                $('.outer').fadeOut();
                $('.inner').text('');
                
            });
        }

        
    })
    .fail(function(error){
        console.error(error);
    });
});
