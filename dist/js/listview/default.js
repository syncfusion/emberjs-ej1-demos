import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
            showHeader: true, 
			showHeaderBackButton: true, 
			headerTitle: "Favorite", 
			width: "400", 
			mouseDown: function(args){
				var listObj = Ember.$("#defaultListview").ejListView("instance");
                listObj.model.headerBackButtonText = args.text;
			},
        }
    }
});
