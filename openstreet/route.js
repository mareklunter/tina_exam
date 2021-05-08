$(function () {
    var map = L.map('map', {
        center: [48.7, 19.7],
        zoom: 8,
    });
    const carUp = L.icon({
        iconUrl: 'car-up.png',
        iconSize: [24,24],
    });
    const carDown = L.icon({
        iconUrl: 'car-down.png',
        iconSize: [24,24],
    });
    const carLeft = L.icon({
        iconUrl: 'car-left.png',
        iconSize: [24,24],
    });
    const carRight = L.icon({
        iconUrl: 'car-right.png',
        iconSize: [24,24],
    });

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 17,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoid2VidGUtYnMiLCJhIjoiY2tvOTBkcTAwMG1nazJ2czJndXp1OGh4cSJ9.hbfxpNbBnzPxbv36oZfZeA'
    }).addTo(map);

    var route = L.polyline([], {color: 'red'}).addTo(map);
    var marker = null;
    var previousLocation = {timestamp: "", latitude: "", longitude: ""};
    var speed = null;

    var eventSource = new EventSource("http://vmzakova.fei.stuba.sk/tina/route1.php");
    eventSource.onmessage = function(event) {
        if (event.data === 'END-OF-STREAM'){
            eventSource.close();
            return;
        }

        let currentLocation = JSON.parse(event.data);
        if (!marker) {
            map.flyTo([currentLocation.latitude, currentLocation.longitude], 17);
            marker = L.marker([currentLocation.latitude, currentLocation.longitude], {icon: carUp}).addTo(map);
            previousLocation.longitude = currentLocation.longitude;
            previousLocation.latitude = currentLocation.latitude;
            previousLocation.timestamp = "" + (parseInt(currentLocation.timestamp)-1);
        } else {
            marker.remove();
            marker = addCarMarker(marker, currentLocation.latitude, currentLocation.longitude);
        }
        route.addLatLng([currentLocation.latitude, currentLocation.longitude]);

        speed = getActualSpeed(previousLocation, currentLocation);
        previousLocation = currentLocation;

        console.log(speed);

        if (!inBounds(map.getBounds(), route.getBounds()) && !inBounds(map.getBounds(), [currentLocation.latitude, currentLocation.longitude])){
            map.fitBounds(route.getBounds());
        }
    };


    function addCarMarker(marker, lat, lng) {
        let current = {lat: marker._latlng.lat, lng: marker._latlng.lng};

        if (Math.abs(current.lat - lat) > Math.abs(current.lng - lng)) {
            if (current.lat <= lat) {
                marker = L.marker([lat, lng], {icon: carUp}).addTo(map);
            } else {
                marker = L.marker([lat, lng], {icon: carDown}).addTo(map);
            }
        } else {
            if (current.lng <= lng) {
                marker = L.marker([lat, lng], {icon: carRight}).addTo(map);
            } else {
                marker = L.marker([lat, lng], {icon: carLeft}).addTo(map);
            }
        }
        return marker;
    }

    function inBounds(bounds1, bounds2){
        if (Array.isArray(bounds2)){
            return bounds1._northEast.lat > bounds2[0] && bounds1._northEast.lng > bounds2[1] && bounds1._southWest.lat < bounds2[0] && bounds1._southWest.lng < bounds2[1];
        } else {
            return bounds1._northEast.lat > bounds2._northEast.lat && bounds1._northEast.lng > bounds2._northEast.lng && bounds1._southWest.lat < bounds2._southWest.lat && bounds1._southWest.lng < bounds2._southWest.lng;
        }
    }

    // zdroj: https://stackoverflow.com/a/47029153
    function getDistance(point1, point2) {
        var degToRad = Math.PI / 180;
        let R = 6378000;
        return R * degToRad * Math.sqrt(Math.pow(Math.cos(point1.latitude * degToRad ) * (point1.longitude - point2.longitude) , 2) + Math.pow(point1.latitude - point2.latitude, 2)) / 1000;
    }

    function getActualSpeed(point1, point2){
        let distance = getDistance(point1, point2);
        let timeDiff = getTimeDiff(point1, point2);
        return (distance/timeDiff).toFixed(2);
    }

    function getTimeDiff(point1, point2){
        return (point2.timestamp - point1.timestamp) / 60 / 60;
    }

});

