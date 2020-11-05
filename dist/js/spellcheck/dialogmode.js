import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      dictionarySettings: {
        dictionaryUrl: window.baseurl + "api/SpellCheck/CheckWords",
        customDictionaryUrl: window.baseurl + "api/SpellCheck/AddToDictionary"
      },
      contextMenuSettings: {
        enable: false
      },
      create: function () {
        Ember.$("#TextArea").attr("contenteditable", true);
      },
      click: function () {
        var spellObj = Ember.$("#TextArea").data("ejSpellCheck");
        spellObj.showInDialog();
      }
    };
  },
});
