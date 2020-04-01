import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            serviceUrl: window.baseurl + "api/PdfViewer"
        }
    }
});
