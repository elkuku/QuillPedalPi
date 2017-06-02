function dateTime() {
    $('#dateTime').html(new Date().toLocaleTimeString());
}

function setSpeed() {
    // @todo dummy...
    var speed = Math.floor((Math.random() * 40) + 1);

    $('#gauge-speed').html(speed);
}

var refreshId = setInterval(dateTime, 1000);
var refreshId2 = setInterval(setSpeed, 500);

var dayMode = false;

document.getElementById('dark-css').disabled = dayMode;
switchMode('Travel');

$('#testThis').on('click', function(){
    dayMode = !dayMode;
    document.getElementById('dark-css').disabled = dayMode;
});

$('#closeThis').on('click', function(){
    window.open('', '_self', '');
    window.close();
});

function switchMode(mode) {
    $('#panel-Travel').hide();
    $('#buttons-Travel').hide();
    $('#panel-Stopw').hide();
    $('#buttons-Stopw').hide();
    $('#panel-Cam').hide();
    $('#buttons-Cam').hide();

    $('#panel-'+mode).show();
    $('#buttons-'+mode).show();
    $('#mode').html(mode);
}
