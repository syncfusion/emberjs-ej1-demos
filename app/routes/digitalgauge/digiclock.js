import Ember from 'ember';

setInterval((function () {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var orighour = hours;
    hours = ((hours + 11) % 12 + 1);
    var v = hours + ":" + minutes + ":" + seconds + " ";
    if (orighour > 11) {
        v += "PM";
    } else {
        v += "AM";
    }

    var digiclock = Ember.$("#DigitalClock").data("ejDigitalGauge");
    if (digiclock != undefined) {
        digiclock.setValue(0, v);
    }
}), 1);

export default Ember.Route.extend({
    model() {
        return {
            width: 525, isResponsive: true,
            height: 305,
            items: [{
                segmentSettings: {
                    width: 1,
                    spacing: 0,
                    color: "#8c8c8c"
                },
                characterSettings: {
                    opacity: 0.8,
                },
                value: "",
                position: { x: 52, y: 52 }
            }]
        }
    }
});
