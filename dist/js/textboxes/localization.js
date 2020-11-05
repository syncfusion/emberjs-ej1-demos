import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
        numeric: 20,
        percent: 75,
        currency: 100,
        locale: ["en-US", "ar-AE", "vi-VN", "es-ES"],
        onActiveChange: function (args) {
        Ember.$("#numericLocale").ejNumericTextbox({ locale: args.value });
        Ember.$("#percentLocale").ejPercentageTextbox({ locale: args.value });
        Ember.$("#currencyLocale").ejCurrencyTextbox({ locale: args.value });
      },
    }
    },
});
