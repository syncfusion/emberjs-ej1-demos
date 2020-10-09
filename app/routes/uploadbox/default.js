import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      saveURL: window.baseurl + 'api/uploadbox/Save',
      removeURL: window.baseurl + 'api/uploadbox/Remove'
    }
  }
});