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
      controlsToValidate:"#control1,#control2,#control3",
      create: function () {
        Ember.$("#TextArea").attr("contenteditable", true);
      },
      targetUpdating:function(args){
        onUpdate(args.previousElement);
        Ember.$(args.currentElement)[0].style.border = "thin solid blue";
      },
      dialogClose:function(args){
        onUpdate(args.targetElement);
      },
      click: function () {
        var spellObj = Ember.$("#TextArea").data("ejSpellCheck");
        spellObj.showInDialog();
      }
    };
  },
});
