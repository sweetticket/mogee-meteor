Router.configure({
  layoutTemplate: 'Layout',
//   'preload': {

//     /*
//      | Parameters can be a string (file path) or an array of strings
//      */

//     // Added in v1.2.1 - this one works only in Router.Configure!
//     'verbose': true,  // Show loading messages in console

//     // Custom time-out to replace internal 2 seconds
//     'timeOut': 5000,    // milliseconds

//     // CSS style(s) to load
//     'styles' : '',  // or []

//     // File(s) to be loaded asynchronously (non-blocking)
//     'async'  : '',  // or []

//     // File(s) to be loaded synchronously (blocking)
//     'sync'   : '',  // or []

//     // (optional) User-defined method called BEFORE each asynchronously
//     // loaded library to allow additional processing
//     'onBeforeAsync': function ( fileName ) {
//         // Return 'true' to continue normally, otherwise skip library
//         return true;
//     },

//     // (optional) User-defined method called on each asynchronously
//     // loaded library to check whether it finished initialization
//     'onAsync': function ( error, result ) {
//         // Check if library finished initialization
//         // and have your way with it

//          error:
//         {
//             file      : <full path of the file being loaded>,
//             jqxhr     : <jqxhr object returned from AJAX call>,
//             status    : <textual status returned from AJAX call>,
//             exception : <exception object returned from AJAX call>,
//             counter   : <current file counter>,
//             totalFiles: <total number of files being loaded>
//         }

//         // result:
//         {
//             file      : <full path of the file being loaded>,
//             script    : <file content returned from AJAX call>,
//             status    : <textual status returned from AJAX call>,
//             counter   : <current file counter>,
//             totalFiles: <total number of files being loaded>
//         }
        
//     },

//     // (optional) User-defined method called AFTER each asynchronously
//     // loaded library to allow additional processing
//     'onAfterAsync': function ( fileName ) {
//         // Return 'true' to continue normally,
//         // otherwise don't mark library as loaded
//         return true;
//     },

//     // (optional) User-defined method called BEFORE each synchronously
//     // loaded library to allow additional processing
//     'onBeforeSync': function ( fileName ) {
//         // Return 'true' to continue normally, otherwise skip library
//         return true;
//     },

//     // (optional) User-defined method called on each synchronously
//     // loaded library to check whether it finished initialization
//     'onSync' : function ( fileName ) {
//         // Check and return `true` if `fileName` finished initialization
//         return true;
//     },

//     // (optional) User-defined method called AFTER each synchronously
//     // loaded library to allow additional processing
//     'onAfterSync': function ( fileName ) {
//         // Return 'true' to continue normally,
//         // otherwise don't mark library as loaded
//         return true;
//     }
// }
});

// HomeController = PreloadController.extend();

Router.route('/',function () {
  // render the Post template into the "main" region
  // {{> yield}}
  this.render('Main', {to: 'content'}); // Yield Main template to where {{> yield "content"}} is in layout.html
  
});

// Router.route('/upload', function () {
//   this.render('Upload', {to: 'content'});
// });

// Router.route('/login', function () {
//   this.render('Login', {to: 'content'});
// })

// Router.route('/logout', function () {
//   Meteor.logout(function() {
//     Router.go('/');
//   });
// });

// Router.route('/signup', function () {
//   this.render('Signup', {to: 'content'});
// });

// Router.route('/products/:_id', function () {
//   this.render('ProductDetail', {
//     to: 'content',
//     data: function () {
//       return Products.findOne({_id: this.params._id}); // should it be inside Products.js?
//     }
//   });
// });

// Router.route('/cart', function () {
//   this.render('Cart', {to: 'content'});
// });

// Router.route('/checkout', function () {
//   this.render('Checkout', {to: 'content'});
// });

// Router.route('/pay', function () {
//   var req = this.request;
//   AppServer.Pay.makeCharge(req);
//   var res = this.response;
//   // res.end('hello from the server\n');
//   console.log("pay route");
  
// }, {where: 'server'});


