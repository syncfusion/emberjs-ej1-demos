import Ember from 'ember';
export default Ember.Route.extend({
   model(){
    return {
        position:{x:"40%",y:"30%"},
        autoOpen:true
         }
    }
});
