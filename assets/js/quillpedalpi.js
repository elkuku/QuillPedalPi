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

    let sum = 0, length = measures.length;

    for (let i = 0; i < length; i++) {
        sum += measures[i];
    }

    if (length > 1000) {
        measures = [];
    }

    let avs = sum / length;

    $('#gauge-speed').html(speed);
    $('#dig-avs').html(avs.toFixed(2));
    $('#dig-mxs').html(mxs);
}

let refreshId = setInterval(dateTime, 1000);
let refreshId2 = setInterval(setSpeed, 500);

let dayMode = false,
    mxs = 0,
    measures = [],
    mode = 0,
    modes = ['Travel', 'Stopw', 'Cam'],
    icons = ['send', 'time', 'camera'];

document.getElementById('dark-css').disabled = dayMode;
switchMode(0);

$('#testThis').on('click', function () {
    dayMode = !dayMode;
    document.getElementById('dark-css').disabled = dayMode;
});

$('#closeThis').on('click', function () {
    window.open('', '_self', '');
    window.close();
});

function switchMode(mode) {
    for (let i = 0; i < modes.length; i++) {
        $('#panel-' + modes[i]).hide();
        $('#buttons-' + modes[i]).hide();
        $('#mode-' + i).removeClass('glow');
    }

    $('#panel-' + modes[mode]).show();
    $('#buttons-' + modes[mode]).show();
    $('#mode-' + mode).addClass('glow');
}

function changeMode() {
    if (mode == modes.length - 1) {
        mode = 0;
    } else {
        mode += 1;
    }

    switchMode(mode);
}