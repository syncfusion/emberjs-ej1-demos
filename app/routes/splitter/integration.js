import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            height: 280, width: 454,
            properties: [{ paneSize: 250 }, {}],
            enableAutoResize: true,
            nodeSelect: function (sender) {
                if (sender.currentElement.hasClass('_child')) {
                    var content = Ember.$('.' + sender.currentElement[0].id).html();
                    Ember.$('._content').html(content);
                }
            },
        }
    }
});
