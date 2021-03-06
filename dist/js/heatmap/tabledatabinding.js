import Ember from 'ember';

export default Ember.Route.extend({
model(){

    function getValue() {
        return Math.floor((Math.random() * 100) + 1);
    }

    var colorMappingCollection = [
        { value: 0, color: "#8ec8f8", label: { text: "0" } },
        { value: 100, color: "#0d47a1", label: { text: "100" } }
    ];

    var itemsSource = [];
    var rows = ["Vegie-spread", "Tofuaa", "Alice Mutton", "Konbu", "Fløtemysost", "Perth Pasties", "Boston Crab Meat", "Raclette Courdavault"];
    for (var i = 0; i < 8; i++) {
        itemsSource.push({
            ProductName: rows[i], Y2010: getValue(), Y2011: getValue(), Y2012: getValue(), Y2013: getValue(),
            Y2014: getValue(), Y2015: getValue(), Y2016: getValue(), Y2017: getValue(), Y2018: getValue()
        });
    }

    return{
        colorMappingCollection : colorMappingCollection,
        itemSource : itemsSource,
        itemsMapping: {
            headerMapping: { "propertyName": "ProductName", "displayName": "Product Name", columnStyle: { width: 140, textAlign: "right" } },
            columnMapping: [
                { "propertyName": "Y2010", "displayName": "Y2010" },
                { "propertyName": "Y2011", "displayName": "Y2011" },
                { "propertyName": "Y2012", "displayName": "Y2012" },
                { "propertyName": "Y2013", "displayName": "Y2013" },
                { "propertyName": "Y2014", "displayName": "Y2014" },
                { "propertyName": "Y2015", "displayName": "Y2015" },
                { "propertyName": "Y2016", "displayName": "Y2016" },
                { "propertyName": "Y2017", "displayName": "Y2017" },
                { "propertyName": "Y2018", "displayName": "Y2018" }
            ],
        },
        legendCollection: ["HeatMap_Legend"]
    }
}
});