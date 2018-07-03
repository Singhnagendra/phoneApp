angular.module('phoneList').
        component('phoneList', {
            templateUrl: '/app/phone-list/phone-list.template.html',

            // template:
            //  '<ul >'+
                        // '<li ng-repeat="phone in phones">'+

                        // '<span>{{phone.name}}</span>'+
                        // '<p>{{phone.snippet}}</p>'+

                        // '</li>'+
                        // '</ul>',
        //             '<ul>' +
        //   '<li ng-repeat="phone in $ctrl.phones">' +
        //     '<span>{{phone.name}}</span>' +
        //     '<p>{{phone.snippet}}</p>' +
        //   '</li>' +
        // '</ul>',

            controller:function plistController(){

                this.phones = [{
                name: "Moto",
                snippet: "Hello Moto"
            },

            {
                name: "Nokia",
                snippet: "Connecting People"
            },
            {
                name: "Sony",
                snippet: "Feel The Music"
            }];



            }

});

// angular.
//   module('phoneApp').
//   component('phoneList', {
//     template:
//         // '<ul>' +
//         //   '<li ng-repeat="phone in $ctrl.phones">' +
//         //     '<span>{{phone.name}}</span>' +
//         //     '<p>{{phone.snippet}}</p>' +
//         //   '</li>' +
//         // '</ul>',


//     controller: function PhoneListController() {
//       this.phones = [
//         {
//           name: 'Nexus S',
//           snippet: 'Fast just got faster with Nexus S.'
//         }, {
//           name: 'Motorola XOOM™ with Wi-Fi',
//           snippet: 'The Next, Next Generation tablet.'
//         }, {
//           name: 'MOTOROLA XOOM™',
//           snippet: 'The Next, Next Generation tablet.'
//         }
//       ];
//     }
// });