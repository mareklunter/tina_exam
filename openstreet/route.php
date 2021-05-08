<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>TINA Skuska</title>

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
            integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
            crossorigin=""></script>

    <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous"></script>
    <script src="route.js"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossorigin="anonymous" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="../assets/css/route.css">
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
<header>
    <div class="float-start">
        <a href="../index.html"><i class="fas fa-home"></i></a>
    </div>
    <h1>Záverečné zadanie</h1>
</header>

<div class="container-fluid">

    <div class="row">

        <div class="col-8">
            <div id="map"></div>
        </div>

        <div class="col-4 text-center bg-grey">
            <div id="speedometer" class="py-3 text-center">
                <div style="display: none;"><img id="sprite" src="../assets/images/icons.svg"></div>
                <canvas id="speedmeter-canvas" width="425" height="210"></canvas>
            </div>

            <div class="clockbox">
              <svg id="clock" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 600 600">
                  <g id="face">
                      <circle class="circle" cx="300" cy="300" r="253.9"/>
                      <path class="hour-marks" d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6"/>
                      <circle class="mid-circle" cx="300" cy="300" r="16.2"/>
                  </g>
                  <g id="hour">
                      <path class="hour-hand" d="M300.5 298V142"/>
                      <circle class="sizing-box" cx="300" cy="300" r="253.9"/>
                  </g>
                  <g id="minute">
                      <path class="minute-hand" d="M300.5 298V67"/>
                      <circle class="sizing-box" cx="300" cy="300" r="253.9"/>
                  </g>
                  <g id="second">
                      <path class="second-hand" d="M300.5 350V55"/>
                      <circle class="sizing-box" cx="300" cy="300" r="253.9"/>
                  </g>
              </svg>
          </div>
        </div>
    </div>

</div>
<script src="../speedmeter/fraction.min.js"></script>
<script src="../speedmeter/speedometer.js"></script>
</body>
</html>
