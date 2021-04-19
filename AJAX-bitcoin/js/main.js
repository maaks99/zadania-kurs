$(document).ready(function(){

    let previousExchange;

    $('#btn').click(function(){
        

        

        $.getJSON('https://blockchain.info/pl/ticker')
        .done(function(data){
           console.log(previousExchange);
           
            let buy = $('#buy');
            let sell = $('#sell');
            let up = $('.fa-arrow-up');
            let down = $('.fa-arrow-down');
            let buynumber = $('<p></p>').attr('id','buy-number');
            let sellnumber = $('<p></p>').attr('id','sell-number');

            buynumber.text(`${data["PLN"].buy} `);
            sellnumber.text(`${data["PLN"].sell} `);
           
            buy.append(buynumber);
            sell.append(sellnumber);
           

            if(data["PLN"].buy >previousExchange) {
                //buynumber.append(up);
                console.log(data["PLN"].buy);
                console.log(previousExchange);
            }

          
           //sellnumber.append(down);
           previousExchange = data["PLN"].buy;
        })
        .fail(function(error){
            console.error(error);
        });
    });
});