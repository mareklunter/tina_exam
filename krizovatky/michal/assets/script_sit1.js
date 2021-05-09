/*DEMO*/

function blueCar() {
    $("#case_blue .follow-path").css("top", "-38px");
    $("#case_blue .follow-path").css("left", "-30px");
  
    var path = anime.path('#case_blue .motion-path-demo path');
  
    anime({
      targets: '#case_blue .motion-path-demo #blueCar',
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: 2500,
      complete: function() {
        $('#blueCar').hide();
      }
    });
  }
  
  
  function redCar() {
    $("#case_red .follow-path").css("top", "-45px");
    $("#case_red .follow-path").css("left", "-30px");
  
    var path = anime.path('#case_red .motion-path-demo path');
  
    anime({
      targets: '#case_red .motion-path-demo #redCar',
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: 2500,
      complete: function() {
        $('#redCar').hide();
      }
    });
  }
  
  
  function greenCar() {
    $("#case_green .follow-path").css("top", "-45px");
    $("#case_green .follow-path").css("left", "-35px");
  
    var path = anime.path('#case_green .motion-path-demo path');
  
    anime({
      targets: '#case_green .motion-path-demo #greenCar',
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: 2500,
      complete: function() {
        $('#greenCar').hide();
      }
    });
  }
  
  //show result div
  $('#start').on('click', function () {
  function result(order, correctOrder) {
    console.log(order);
    console.log(correctOrder);
    for (let i = 0; i < order.length; i++) {
      if (order[i] != correctOrder[i]) {
        $('.alert-danger').fadeIn( "slow" );
        return;
      }
    }
    $('.alert-success').fadeIn( "slow" );
  }
  
  //start button
  
    let order = new Array();
    let correctOrder = ["blue","green", "red"]
  
    $('#demo').attr('disabled','disabled');
    $('#start').attr('disabled','disabled');
    $('.car').css('cursor', 'pointer');

      //blue
  $('#blueCar').on('click', function () {
    blueCar();
    order.push("blue");
    if (order.length == 3) {
      result(order, correctOrder)
    }

    //remove this listener
    $(this).css('cursor', 'default');
    $(this).off('click');
  });
  
    //red
    $('#redCar').on('click', function () {
      redCar();
      order.push("red");
      if (order.length == 3) {
        result(order, correctOrder)
      }
  
      //remove this listener
      $(this).css('cursor', 'default');
      $(this).off('click');
    });
  
    //green
    $('#greenCar').on('click', function () {
      greenCar();
      order.push("green");
      if (order.length == 3) {
        result(order, correctOrder)
      }
  
      //remove this listener
      $(this).css('cursor', 'default');
      $(this).off('click');
    });
  });
  
  
  
  //DEMO
  $('#demo').on('click', function () {
    $('#start').attr('disabled','disabled');
    $('#demo').attr('disabled','disabled');
  
  
    blueCar();
    
    setTimeout(
        function () {
            greenCar();
      }, 2300);
  
    setTimeout(
      function () {
        redCar();
      }, 3900);
  
  
    setTimeout(
      function () {
        location.reload();
      }, 7000);
  
  });
  
  