$(function () {
    const bluePath = anime.path('#blue-path');
    const redPath = anime.path('#red-path');
    const greenPath = anime.path('#green-path');

    let order = [];

    var blueRide = anime({
        targets: '#blue-car',
        translateX: bluePath('x'),
        translateY: bluePath('y'),
        rotate: bluePath('angle'),
        easing: 'linear',
        duration: 4000,
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
        duration: 5000,
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
        duration: 6000,
        loop: false,
        autoplay: false,
        complete: function(anim) {
            $('#green-car').hide();
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
    });

    $('#demo').click(function () {
        blueRide.play();
        redRide.play();
        setTimeout(function () {
            greenRide.play();
        }, 1500)
    });

    function result(){
        if (order.length === 3){
            if (order.indexOf('green') > order.indexOf('red')){
                $('.alert-success').removeClass('d-none');
            } else {
                $('.alert-danger').removeClass('d-none');
            }
        }
    }
});