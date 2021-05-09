var canvas = document.getElementById("myCanvas");
var outline = canvas.getContext("2d");
var ctx = canvas.getContext("2d");

ctx.beginPath(); // dlha ciara hore je o 75 od stredu
ctx.moveTo(0, 300);
ctx.lineTo(900, 300);
ctx.lineTo(900, 450);
ctx.lineTo(525, 450);
ctx.lineTo(525, 750);
ctx.lineTo(375, 750);
ctx.lineTo(375, 450);
ctx.lineTo(0, 450);
ctx.lineTo(0, 300);
ctx.stroke();



ctx.beginPath();
ctx.lineWidth = 5;
ctx.moveTo(450, 750); // vertikalna stredova ciara
ctx.lineTo(450, 730);

var y1 = 715;
var y2 = 665;

for (i = 0; i < 4; i++) {
    ctx.moveTo(450, y1);
    ctx.lineTo(450, y2);
    ctx.stroke();

    y1 -= 65;
    y2 -= 65;
}


ctx.beginPath(); // horizontalna stredova ciara
ctx.moveTo(0, 375);
ctx.lineTo(10, 375);
ctx.lineWidth = 5;

var x1 = 25;
var x2 = 60;

for (i = 0; i < 21; i++) {
    ctx.moveTo(x1, 375);
    ctx.lineTo(x2, 375);
    ctx.stroke();

    x1 += 50;
    x2 += 50;
}

let animation_blue_car = anime({
    targets: '#car_blue',
    translateX: 700,
    duration: 2000,
    easing: 'linear',
    autoplay: false,
    complete: function () {
        $('#car_blue').hide();
    }
});

let animation_red_car = anime.timeline({
    duration: 2000,
    easing: 'linear',
    autoplay: false,
    complete: function () {
        $('#car_red').hide();
    }
});

animation_red_car.add({
    targets: '#car_red',
    translateX: -120,
    translateY: -170,
    rotate: -90,
}).add({
    targets: '#car_red',
    translateX: -600
})

let animation_red_car_blinker = anime({
    targets: '#blinker_red',
    backgroundColor: 'rgb(255, 255, 0)',
    duration: 2000,
    easing: 'linear',
    autoplay: true,
    loop: true,
});

let animation_yellow_car = anime.timeline({
    duration: 2000,
    easing: 'linear',
    autoplay: false,
    complete: function () {
        $('#car_yellow').hide();
    }
});

let animation_yellow_car_blinker = anime({
    targets: '#blinker_yellow',
    backgroundColor: 'rgb(255, 255, 0)',
    duration: 2000,
    easing: 'linear',
    autoplay: true,
    loop: true,
})

animation_yellow_car.add({
    targets: '#car_yellow',
    translateX: -110,
}).add({
    targets: '#car_yellow',
    translateX: -170,
    translateY: 190,
    rotate: -90,
}).add({
    targets: '#car_yellow',
    translateY: 450
})

var order = 0;
var blue = false;
var red = false;
var yellow = false;

function blue_car() {
    animation_blue_car.play();
    order++;
    if (order == 2) {
        blue = true;
    } else {
        blue = false;
    }
    /*console.log(order);
    console.log(blue);
    console.log(red);
    console.log(yellow);*/
    result();
}

function red_car() {
    animation_red_car.play();
    $('#blinker_red').hide();
    order++;
    if (order == 1) {
        red = true;
    } else {
        red = false;
    }
    result();
}

function yellow_car() {
    animation_yellow_car.play();
    $('#blinker_yellow').hide();
    order++;
    if (order == 3) {
        yellow = true;
    } else {
        yellow = false;
    }
    result();
}

function result() {
    if (order == 3) {
        if (blue == true && red == true && yellow == true) {
            $('.alert-success').fadeIn("slow");
        } else {
            $('.alert-danger').fadeIn("slow");
        }
    }
}

let animation_demo = anime.timeline({
    easing: 'linear',
    autoplay: false,
});

animation_demo.add({
    targets: '#car_red',
    duration: 1000,
    translateX: -120,
    translateY: -170,
    rotate: -90
}).add({
    targets: '#car_red',
    translateX: -600,
    complete: function () {
        $('#car_red').hide();
    }
}).add({
    targets: '#car_blue',
    translateX: 700,
    duration: 1000,
    complete: function () {
        $('#car_blue').hide();
    }
}).add({
    targets: '#car_yellow',
    duration: 1000,
    translateX: -110,
}).add({
    targets: '#car_yellow',
    translateX: -170,
    translateY: 190,
    rotate: -90
}).add({
    targets: '#car_yellow',
    translateY: 450,
    complete: function () {
        $('#car_yellow').hide();
    }
})

function demo() {
    $('#blinker_yellow').hide();
    $('#blinker_red').hide();
    animation_demo.play();
}

