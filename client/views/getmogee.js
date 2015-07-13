function getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
        {
          return 'iOS';
        }
        else if( userAgent.match( /Android/i ) )
        {
          return 'Android';
        }
        else
        {
          return 'unknown';
        }
      }

if (Meteor.isClient) {
  // counter starts at 0
  // Session.setDefault('counter', 0);


  Template.GetMogee.helpers({
    // counter: function () {
    //   return Session.get('counter');
    // }
  });

  Template.GetMogee.rendered = function () {
    var os = getMobileOperatingSystem();
      if(os==="iOS") {
        window.location="http://apple.co/1K2Oo74";
      } else if(os==="Android") {
        window.location="https://play.google.com/store/apps/details?id=com.phronesistechne.mogeeapp";
      } else {
        Router.go('/');
      }
  }

  Template.GetMogee.events({
  //   'click button': function () {
  //     // increment the counter when button is clicked
  //     Session.set('counter', Session.get('counter') + 1);
  //   }
   });
}
