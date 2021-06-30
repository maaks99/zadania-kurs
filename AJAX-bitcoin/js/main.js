$(document).ready(function () {

    let buyExchange;
    let sellExchange;
  
    $('#btn').click(function () {
    
        $.ajaxSetup({ cache: false });
        $.getJSON('https://blockchain.info/pl/ticker')
            .done(function (data) {
                
                let buy = $('#buy');
                let sell = $('#sell');
                let up = $('.fa-arrow-up');
                let down = $('.fa-arrow-down');
                let up2 = $('#up2');
                let down2 = $('#down2');
                let equal = $('.linia');
                let equal2 = $('.linia2');
                let buynumber = $('<p></p>').attr('id', 'buy-number');
                let sellnumber = $('<p></p>').attr('id', 'sell-number');

                buy.empty();
                sell.empty();

                buynumber.text(`${data["PLN"].buy} `);
                sellnumber.text(`${data["PLN"].sell} `);

                buy.append(buynumber);
                sell.append(sellnumber);
              
                
                if (data["PLN"].buy > buyExchange) {
                    buynumber.append(up);
                    up.css("visibility", "visible");
                    up.css("display", "inline-block")

                } else {
                    buynumber.append(down);
                    down.css("visibility", "visible");
                    down.css("display", "inline-block");

                }

                if (data["PLN"].sell > sellExchange) {
                    sellnumber.append(up2);
                    up2.css("visibility", "visible");
                    up2.css("display", "inline-block");

                } else {
                    sellnumber.append(down2);
                    down2.css("visibility", "visible");
                    down2.css("display", "inline-block");

                }

                if (data["PLN"].buy === buyExchange) {
                    buynumber.append(equal);
                    equal.css("visibility", "visible");
                    up.css("display", "none");
                    down.css("display", "none");

                }

                if (data["PLN"].sell === sellExchange) {
                    sellnumber.append(equal2);
                    equal2.css("visibility", "visible");
                    down2.css("display", "none");
                    up2.css("display", "none");
                }

                buyExchange = data["PLN"].buy;
                sellExchange = data["PLN"].sell;
                
            })
            .fail(function (error) {
                console.error(error);
            });
        
    });

});