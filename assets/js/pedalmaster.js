function dateTime() {
    $('#dateTime').html(new Date().toLocaleTimeString());
}

function setSpeed() {
    var speed = Math.floor((Math.random() * 40) + 1);
    $('#gauge-speed').html(speed);
}

var refreshId = setInterval(dateTime, 1000);
var refreshId2 = setInterval(setSpeed, 500);

$('#testThis').on('click', function(){
    alert('HEY');
});

