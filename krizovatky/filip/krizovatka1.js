$(function () {
    const bluePath = anime.path('#blue-path');
    const redPath = anime.path('#red-path');
    const greenPath = anime.path('#green-path');
    const purplePath = anime.path('#purple-path');

    var order = [];

    var blueRide = anime({
        targets: '#blue-car',
        translateX: bluePath('x'),
        translateY: bluePath('y'),
        rotate: bluePath('angle'),
        easing: 'linear',
        duration: 3000,
        loop: false,
        autoplay: false,
        complete: function(anim) {
            $('#blue-car').hide();
        }
    });

    var redRide = anime({
        targets: '#red-car',
        translateX: redPath('x'),
        translateY: redPath('y'),
        rotate: redPath('angle'),
        easing: 'linear',
        duration: 3000,
        loop: false,
        autoplay: false,
        complete: function(anim) {
            $('#red-car').hide();
        }
    });

    var greenRide = anime({
        targets: '#green-car',
        translateX: greenPath('x'),
        translateY: greenPath('y'),
        rotate: greenPath('angle'),
        easing: 'linear',
        duration: 3000,
        loop: false,
        autoplay: false,
        complete: function(anim) {
            $('#green-car').hide();
        }
    });

    var purpleRide = anime({
        targets: '#purple-car',
        translateX: purplePath('x'),
        translateY: purplePath('y'),
        rotate: purplePath('angle'),
        easing: 'linear',
        duration: 3000,
        loop: false,
        autoplay: false,
        complete: function(anim) {
            $('#purple-car').hide();
        }
    });


    $('#start').click(function () {
        $('.car').css('cursor','pointer');

        $('#blue-car').click(function () {
            blueRide.play();
            order.push('blue');
            result();
        });

        $('#red-car').click(function () {
            redRide.play();
            order.push('red');
            result();
        });

        $('#green-car').click(function () {
            greenRide.play();
            order.push('green');
            result();
        });

        $('#purple-car').click(function () {
            purpleRide.play();
            order.push('purple');
            result();
        });
    });

    function result(){
        if (order.length === 4){
            if ((order[1] === 'green' && order[0] === 'red')||(order[0] === 'green' && order[1] === 'red')){
                $('.alert-success').removeClass('d-none');
            } else {
                $('.alert-danger').removeClass('d-none');
            }
        }
    }

    $('#demo').click(function () {
        greenRide.play();
        redRide.play();
        setTimeout(function () {
            purpleRide.play();
            blueRide.play();
        }, 2000);
    });


});