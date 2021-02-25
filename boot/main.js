jQuery(document).ready(function($) {
    "use strict";
    
    $('#slides section').hide();

    let FPS = 30, Period = 5, FPSsec_i = 0, percent = 0;
    let FPSperiod = Period * FPS;

    class Boot {
        constructor () {
            $('#slides section').hide();
            $('#boot .display').hide();
            $('#boot .display.one').show();
            $('#slides section#boot').show()
        }
        runDisplayOne () {
            setTimeout(function () {
                $('#boot .display.one').hide();
                $('#boot .display.two').show();
            }, 2000);
            return this
        }
        runDisplayTwo () {
            let FPS = 30, Period = 5; FPSsec_i = 0, percent = 0;
            let FPSperiod = Period * FPS;
            var loading;
            setTimeout(function () {
                loading = setInterval(loader, 1000/FPS)
            }, 2000)
            
            function loader () {
                if (percent >= 100) {
                    clearInterval(loading);
                    $('section').hide();
                    $('#slides section#menu').show()
                } else {
                    FPSsec_i += 1;
                    percent = Math.round((FPSsec_i / FPSperiod) * 100);
                    $('.loader .bar').css({"width": percent.toString() + '%'});
                }
            }
        }
    };

    let boot = new Boot();
    boot.runDisplayOne().runDisplayTwo();
  
});
