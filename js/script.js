
var rotate_planets = (function() {
    function get_position(settings, ellapsedTime) {
        var angle = get_angle(settings, ellapsedTime);
        return {
            x: Math.round(settings.center.x + settings.radius * Math.cos(angle)),
            y: Math.round(settings.center.y + settings.radius * Math.sin(angle))
        };
    }

    function get_angle(settings, ellapsedTime) {
        return (ellapsedTime / settings.interval) * 2 * Math.PI * settings.direction - settings.startPositionRad;
    }

    function animate_planet(id, settings) {
        var el = document.getElementById(id),
            startTime = null;

        function animate(time) {
            if (!startTime) startTime = time;
            var elapsed = time - startTime;
            var pos = get_position(settings, elapsed);
            el.style.left = pos.x - Math.round(el.offsetWidth / 2) + 'px';
            el.style.top = pos.y - Math.round(el.offsetHeight / 2) + 'px';

            if (elapsed < settings.interval) {
                requestAnimationFrame(animate);
            } else if (settings.iterations === -1 || settings.iterations > 0) {
                startTime = null;
                if (settings.iterations > 0) settings.iterations--;
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

    function start(id, settings) {
        var el = document.getElementById(id);
        if (el['#rot:pl'] !== null) stop(id);
        el.style.position = settings.cssPosition || 'absolute';
        if (!settings.startPositionRad) settings.startPositionRad = (settings.startPositionDeg / 180) * Math.PI;
        animate_planet(id, settings);
    }

    function stop(id) {
        var el = document.getElementById(id);
        if (el['#rot:pl'] === null) return;
        el['#rot:pl'] = null;
    }

    return {
        start: start,
        stop: stop
    };
})();

rotate_planets.start('move-mercury', {
    radius: 60,
    center: {
        x: 60,
        y: 60
    },
    interval: 8000,
    direction: 1,
    iterations: -1,
    startPositionDeg: 175,
});

rotate_planets.start('move-venus', {
    radius: 85,
    center: {
        x: 85,
        y: 85
    },
    interval: 9000,
    direction: 1,
    iterations: -1,
    startPositionDeg: 350
});

rotate_planets.start('move-earth', {
    radius: 110,
    center: {
        x: 110,
        y: 110
    },
    interval: 10000,
    direction: 1,
    iterations: -1,
    startPositionDeg: 125
});

rotate_planets.start('move-mars', {
    radius: 135,
    center: {
        x: 135,
        y: 135
    },
    interval: 11000,
    direction: 1,
    iterations: -1,
    startPositionDeg: 200
});

rotate_planets.start('move-jupiter', {
    radius: 165,
    center: {
        x: 165,
        y: 165
    },
    interval: 14000,
    direction: 1,
    iterations: -1,
    startPositionDeg: 305
});

rotate_planets.start('move-saturn', {
    radius: 195,
    center: {
        x: 195,
        y: 195
    },
    interval: 15000,
    direction: 1,
    iterations: -1,
    startPositionDeg: 150
});

rotate_planets.start('move-uranus', {
    radius: 225,
    center: {
        x: 225,
        y: 225
    },
    interval: 16000,
    direction: 1,
    iterations: -1,
    startPositionDeg: 325
});
