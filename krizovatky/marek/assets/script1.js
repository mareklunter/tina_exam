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
  
  
  function pinkCar() {
    $("#case_pink .follow-path").css("top", "-55px");
    $("#case_pink .follow-path").css("left", "-31px");
  
    var path = anime.path('#case_pink .motion-path-demo path');
  
    anime({
      targets: '#case_pink .motion-path-demo #pinkCar',
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: 2500,
      complete: function() {
        $('#pinkCar').hide();
      }
    });
  }
  
  
  function greenCar() {
    $("#case_green .follow-path").css("top", "-35px");
    $("#case_green .follow-path").css("left", "-32px");
  
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
  $('#start').on('click', function () {
    let order = new Array();
    let correctOrder = ["pink", "blue", "green"]
  
    $('#demo').attr('disabled','disabled');
    $('#start').attr('disabled','disabled');
    $('.car').css('cursor', 'pointer');
  
    //blue
    $('#blueCar').on('click', function () {
      blueCar();
      order.push("blue");
      if (order.length >= 3) {
        result(order, correctOrder)
      }
  
      //remove this listener
      $(this).css('cursor', 'default');
      $(this).off('click');
    });
  
    //pink
    $('#pinkCar').on('click', function () {
      pinkCar();
      order.push("pink");
      if (order.length >= 3) {
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
      if (order.length >= 3) {
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
  
    pinkCar();
    
    setTimeout(
        function () {
            blueCar();
      }, 1300);
  
    setTimeout(
      function () {
        greenCar();
      }, 2600);
  
  
    setTimeout(
      function () {
        location.reload();
      }, 5000);
  
  });
  
  