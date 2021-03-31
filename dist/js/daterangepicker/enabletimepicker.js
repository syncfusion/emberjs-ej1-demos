import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
            timePickerEnabled: true,
            Width: 400
        }
    }
});
