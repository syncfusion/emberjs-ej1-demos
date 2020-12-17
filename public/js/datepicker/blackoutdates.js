import Ember from 'ember';

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();

export default Ember.Route.extend({
   model(){
    return {
            blackoutDates: [new Date(year,month, 4), new Date(year,month, 23),new Date(year,month, 14), new Date(year, month + 1, 15),
                new Date(this.year, this.month - 1, 22)]
        }
    }
});
