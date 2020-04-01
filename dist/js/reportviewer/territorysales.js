import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            reportServiceUrl: window.baseurl + "api/ReportViewer",
            reportServerUrl: "http://104.207.134.201/reportserver",
            reportPath: "/SSRSSamples2/Territory Sales new",
            processingMode: "Remote",
        }
    }
});
