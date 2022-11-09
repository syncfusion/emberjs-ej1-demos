import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
            height: "400px",
			isResponsive: true,
			strokeWidth: 3
        }
    }
});
