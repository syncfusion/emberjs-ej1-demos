import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
        liveTile3:{updateInterval: 3000, enabled: true, type: "flip", imageUrl:['//js.syncfusion.com/demos/web/content/images/tile/windows/alerts.png','//js.syncfusion.com/demos/web/content/images/tile/windows/bing.png','//js.syncfusion.com/demos/web/content/images/tile/windows/camera.png']},
        liveTile4:{updateInterval: 3500, enabled: true, type: "flip", imageUrl:['//js.syncfusion.com/demos/web/content/images/tile/windows/alerts.png','//js.syncfusion.com/demos/web/content/images/tile/windows/bing.png','//js.syncfusion.com/demos/web/content/images/tile/windows/camera.png']},
        badge1:{enabled: true, value: 10},
        liveTile6:{updateInterval: 5000, enabled: true, type: "slide", imageUrl:['//js.syncfusion.com/demos/web/content/images/tile/windows/people_1.png','//js.syncfusion.com/demos/web/content/images/tile/windows/people_2.png','//js.syncfusion.com/demos/web/content/images/tile/windows/people_3.png']},
        liveTile7:{updateInterval: 4000, enabled: true, type: "slide", imageUrl:['//js.syncfusion.com/demos/web/content/images/tile/windows/pictures.png','//js.syncfusion.com/demos/web/content/images/tile/windows/photo_1.png','//js.syncfusion.com/demos/web/content/images/tile/windows/photo_2.png','//js.syncfusion.com/demos/web/content/images/tile/windows/pictures.png','//js.syncfusion.com/demos/web/content/images/tile/windows/photo_1.png']},
        liveTile8:{updateInterval: 5000, enabled: true, type: "carousel", imageUrl:['//js.syncfusion.com/demos/web/content/images/tile/windows/weather.png','//js.syncfusion.com/demos/web/content/images/tile/windows/weather_1.png','//js.syncfusion.com/demos/web/content/images/tile/windows/weather_2.png']}
        }
    }
});
