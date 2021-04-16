$(document).ready(function(){
    
    $.getJSON('https://danepubliczne.imgw.pl/api/data/synop')
    .done(function(data){
        console.log(data);

        for(let i=0; i<data.length; i++){

            let body = $('body');
            let div = $('<div></div>').attr('id','div-info');
            let city = $('<h3></h3>').attr('id','city-name');
            city.text(`${data.stacja}`)
            
        
            body.append(div);
            div.append(city);

        }
    })
    .fail(function(error){
        console.error(error);
    });
});
