import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
             width: 525,isResponsive:true,
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
                    value: "123456789",
                    position: { x: 52, y: 52 }
                }]
            }
    }
});
