class QuillPedalPi {
    constructor(modes, dspTime, dspSpeed, dspAvs, dspMxs, dspDst) {
        this.running = false;
        this.timerId = null;
        this.measures = [];
        this.avs = 0;
        this.mxs = 0;
        this.dst = 0;

        this.modes = modes;
        this.mode = 0;
        this.dspTime = dspTime;
        this.dspSpeed = dspSpeed;
        this.dspAvs = dspAvs;
        this.dspMxs = dspMxs;
        this.dspDst = dspDst;

        // Chart
        this.line1 = new TimeSeries();
        this.line2 = new TimeSeries();
        this.speedChart = new SmoothieChart();
        this.speedChart.streamTo(document.getElementById('speed-chart'), 500);
        this.speedChart.addTimeSeries(this.line1,
            {strokeStyle: 'rgb(0, 255, 0)', fillStyle: 'rgba(0, 255, 0, 0.4)', lineWidth: 1});
        this.speedChart.addTimeSeries(this.line2,
            {strokeStyle: 'rgb(255, 0, 255)', fillStyle: 'rgba(255, 0, 255, 0.3)', lineWidth: 1});

        // The clock
        setInterval(this.setTime.bind(null, this.dspTime), 1000);

        this.switchMode(0);
    }

    reset() {
        this.stop();
        this.measures = [];
        this.avs = 0;
        this.mxs = 0;
        this.dst = 0;
        this.dspSpeed.html('00');
        this.dspAvs.html('00.00');
        this.dspMxs.html('00');
        this.dspDst.html('000.000');
    }

    start() {
        if (!this.running) {
            this.timerId = setInterval(this.update.bind(null, this), 500);
            this.running = true;
        }
    }

    stop() {
        clearInterval(this.timerId);
        this.running = false;
    }

    setTime(dsp) {
        dsp.html(new Date().toLocaleTimeString());
    }

    update(o) {
        // @todo dummy...
        let speed = Math.floor((Math.random() * 40) + 1);

        o.measures.push(speed);

        if (speed > o.mxs) {
            o.mxs = speed;
        }

        if (speed > 0) {
            o.dst += speed / 7200
        }

        let sum = 0, length = o.measures.length;

        for (let i = 0; i < length; i++) {
            sum += o.measures[i];
        }

        if (length > 1000) {
            o.measures = [];
        }

        o.avs = sum / length;

        o.dspSpeed.html(speed);
        o.dspAvs.html(o.avs.toFixed(2));
        o.dspMxs.html(o.mxs);
        o.dspDst.html(o.dst.toFixed(3));

        o.line1.append(new Date().getTime(), speed);
        o.line2.append(new Date().getTime(), o.avs);
    }

    switchMode(mode) {
        for (let i = 0; i < this.modes.length; i++) {
            $('#panel-' + this.modes[i]).hide();
            $('#buttons-' + this.modes[i]).hide();
            $('#mode-' + i).removeClass('glow');
        }

        $('#panel-' + this.modes[mode]).show();
        $('#buttons-' + this.modes[mode]).show();
        $('#mode-' + mode).addClass('glow');
        this.mode = mode;
    }

    changeMode() {
        if (this.mode === this.modes.length - 1) {
            this.mode = 0;
        } else {
            this.mode += 1;
        }

        this.switchMode(this.mode);
    }
}

//------

let dayMode = false;

document.getElementById('dark-css').disabled = dayMode;

$('#testThis').on('click', function () {
    dayMode = !dayMode;
    document.getElementById('dark-css').disabled = dayMode;
});

$('#closeThis').on('click', function () {
    window.open('', '_self', '');
    window.close();
});

let qpp = new QuillPedalPi(
    ['Travel', 'Stopw', 'Cam'],
    $('#dateTime'),
    $('#gauge-speed'),
    $('#dig-avs'),
    $('#dig-mxs'),
    $('#dig-dst')
    )
;
