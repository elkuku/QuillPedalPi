function dateTime() {
    $('#dateTime').html(new Date().toLocaleTimeString());
}

function setSpeed() {
    // @todo dummy...
    let speed = Math.floor((Math.random() * 40) + 1);

    measures.push(speed);

    if (speed > mxs) {
        mxs = speed;
    }

    let sum = 0;

    for (let i = 0; i < measures.length; i++) {
        sum += measures[i];
    }

    let avs = sum / measures.length;

    $('#gauge-speed').html(speed);
    $('#dig-avs').html(avs.toFixed(2));
    $('#dig-mxs').html(mxs);
}

let refreshId = setInterval(dateTime, 1000);
let refreshId2 = setInterval(setSpeed, 500);

let dayMode = false;
let mxs = 0;
let measures = [];

document.getElementById('dark-css').disabled = dayMode;
switchMode('Travel');

$('#testThis').on('click', function () {
    dayMode = !dayMode;
    document.getElementById('dark-css').disabled = dayMode;
});

$('#closeThis').on('click', function () {
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

    $('#panel-' + mode).show();
    $('#buttons-' + mode).show();
    $('#mode').html(mode);
}
