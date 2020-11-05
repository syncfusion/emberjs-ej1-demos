import Ember from 'ember';
export default Ember.Route.extend({
   model(){
    return {
        slideWidth: "100%",
        frameSpace: "0px",
        slideHeight: "auto",
        displayItemsCount: "1",
        navigateSteps: "1",
        pagerPosition: ej.Rotator.PagerPosition.Outside,
        showThumbnail: true,
        thumbnailSourceID: "thumbElement",
        orientation: ej.Orientation.Horizontal,
        showPager: false,
        enabled: true,
        showCaption: false,
        allowKeyboardNavigation: true,
        showPlayButton: true,
        isResponsive:true,
        animationType: "slide",
        enableAutoPlay: false,
        
        }
    }
});


