import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            reportServiceUrl: window.baseurl + "api/ReportViewer",
            reportPath: "GroupingAgg.rdl",
            processingMode: "Remote",
        }
    }
});
