import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
            width: "16",
            value: "50",
            value1: "60",
			values: [30,60],
            height:"200"
        }
    }
});
