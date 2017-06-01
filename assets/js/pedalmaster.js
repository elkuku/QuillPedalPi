function dateTime() {
    $('#dateTime').html(new Date().toLocaleTimeString());
}

function setSpeed() {
    var speed = Math.floor((Math.random() * 40) + 1);
    $('#gauge-speed').html(speed);
}

var refreshId = setInterval(dateTime, 1000);
var refreshId2 = setInterval(setSpeed, 500);
var dayMode = true;

document.getElementById('dark-css').disabled = dayMode;

$('#testThis').on('click', function(){
    dayMode = !dayMode;
    document.getElementById('dark-css').disabled = dayMode;
});

$('#closeThis').on('click', function(){
    window.open('', '_self', '');
    window.close();
});

