import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
            Text:"SYNCFUSION",
			quietZone: {all: 20},
        }
    }
});
