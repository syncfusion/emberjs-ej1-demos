import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return { 
       websiteCollection: [
{ text: "جوجل", url: "//www.google.com", frequency: 12 },
{ text: "كل الأشياء الرقمية", url: "//allthingsd.com/", frequency: 3 },
{ text: "الفنون تكنيكا", url: "//arstechnica.com/", frequency: 8 },
{ text: "بيزنس ويك", url: "//www.businessweek.com/", frequency: 2 },
{ text: "ياهو", url: "//in.yahoo.com/", frequency: 12 },
{ text: "مركز الشبكات", url: "//www.centernetworks.com/", frequency: 5 },
{ text: "حن", url: "//news.cnet.com/crave/", frequency: 8 },
{ text: "جير أزمة", url: "//techcrunch.com/gadgets/", frequency: 20 },
{ text: "يوميا تك", url: "//www.dailytech.com/", frequency: 1 },
{ text: "التقنية بلا حدود", url: "//www.engadget.com/", frequency: 5 },
{ text: "الأسبوع المعلومات", url: "//www.informationweek.com/", frequency: 0 },
{ text: "إستخدام آمن", url: "//www.pcworld.com/", frequency: 11 },
{ text: "جمهورية التكنولوجيا", url: "//techrepublic.com/", frequency: 3 },
{ text: "الثعبان", url: "//valleywag.gawker.com/", frequency: 6 },
{ text: "ريديف", url: "//in.rediff.com/", frequency: 9 }
],
       enableRTL: true,
       titleText: "مواقع التكنولوجيا"
	}
   }
});