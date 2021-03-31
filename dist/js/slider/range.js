import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
            width: "100%",
            value: "50",
			slidervalues: [30,60]
        }
    }
});
