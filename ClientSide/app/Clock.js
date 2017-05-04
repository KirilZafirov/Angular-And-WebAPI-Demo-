function getClockData() {
    var now = new Date();
    return [{
        dataName: 'hoursShadow',
        start: {
            fill: '#B3E5FC',
            outerRatio: .7,
            innerRatio: .55,
            angle: 0
        },
        finish: {
            fill: '#B3E5FC',
            outerRatio: .7,
            innerRatio: .55,
            angle: now.getHours() / 24
        },
        immediate: {
            angle: true
        }
    }, {
        dataName: 'minutesShadow',
        start: {
            fill: '#F0F4C3',
            outerRatio: .85,
            innerRatio: .7,
            angle: 0
        },
        finish: {
            fill: '#F0F4C3',
            outerRatio: .85,
            innerRatio: .7,
            angle: now.getMinutes() / 60
        },
        immediate: {
            angle: true
        }
    }, {
        dataName: "hours",
        start: {
            angle: now.getHours() / 24,
            outerRatio: .7,
            innerRatio: .55,
            fill: '#B3E5FC'
        },
        finish: {
            angle: 1 / 60 / 24 + (now.getHours() / 24),
            outerRatio: .7,
            innerRatio: .55,
            fill: '#B3E5FC'
        }
    }, {
        dataName: "minutes",
        start: {
            angle: now.getMinutes() / 60,
            outerRatio: .85,
            innerRatio: .7,
            fill: '#F0F4C3'
        },
        finish: {
            angle: 1 / 60 + (now.getMinutes() / 60),
            outerRatio: .85,
            innerRatio: .7,
            fill: '#F0F4C3'
        }
    }, {
        dataName: "seconds",
        start: {
            angle: now.getSeconds() / 60,
            outerRatio: 2,
            innerRatio: .85,
            fill: '#E1BEE7'
        },
        finish: {
            angle: 1 + (now.getSeconds() / 60),
            outerRatio: 2,
            innerRatio: .85,
            fill: '#FFEB3B'
        },
        values: {
            show: true
        },
    }

    ];
}

var clockOptions = {
    duration: 60 * 1000,
    values: {
        classes: "mu--text-caption",
        styles: "font-size:.7em;text-anchor:middle;",
        decorate: function (d) {
            return d3.time.format("%X")(new Date());
        }
    }
};

var timer = new DashTimer('#clock').init(clockOptions);
endless();
d3.select('#cancel').on("click", function () {
    timer.cancel();
});
d3.select('#pause').on("click", function () {
    timer.pause();
});
d3.select('#resume').on("click", function () {
    timer.resume();
});
d3.select('#start').on("click", function () {
    endless();
});

function endless() {
    timer.setData(getClockData());
    timer.start()
      .then(
        function (expired) {
            endless();
        },
        function (cancelled) {
            d3.select('#result').text('cancelled');
        }
      )
}