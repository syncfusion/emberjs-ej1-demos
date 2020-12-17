import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
            value:"#ec2024",
            type:"palette",
            palette:"custompalette",
            switcher: false,
            custom:['ffffff', 'ffccff', 'ff99ff', 'ff66ff', 'ff33ff', 'ff00ff', 'ccffff', 'ccccff', 'cc99ff', 'cc66ff',
            'cc33ff', 'cc00ff', '99ffff', '99ccff', '9999ff', '9966ff', '9933ff', '9900ff', 'ffffcc', 'ffcccc']
        }
    }
});
