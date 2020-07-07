import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
            dataSource: [
                   "Anemone Galilee", "Allium drumstick", "Artichoke thistle",
                   "Boronia ", "Bouvardia", "Blue lace flower", "Bird of paradise",
                   "Cone flower", "Cosmos", "Calla lily white", "Common Yarrow",
                   "Dahlia", "Daffodil", "Delphinium Belladonna",
                   "Eric John", "Eucalyptus seeded",
                   "Freesia", "Foxtail fern", "Feverfew",
                   "Godetia", "Gardenia", "Gayfeather",
                   "Heather", "Hydrangea",
                   "Ivy",
                   "Japhette orchid",
                   "Kangaroo paw yellow",
                   "Lace fern", "Lumex", "Lavender",
                   "Mimosa", "Moon orchid", "Ming fern",
                   "Nerine",
                   "Paper Reed", "Pincushion", "Phlox",
                   "Queen Anne's lace",
                   "Red Rover", "Rice flower", "Rose Lavanda",
                   "Strawberry banksia", "Saponaria", " Sunflower Sunbright",
                   "Thorow-wax", "Telstar", "Tuberose", "Tulip pink",
                   "Waxflower", "Willow curly", "Watsonia"
            ],
            width: "100%",
            placeholder: "Select a flower",
            autofill: true
        }
    }
});
