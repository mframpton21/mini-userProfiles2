var app = angular.module('userProfiles');

//Service option
app.service('mainService', function($http) {
    this.getUsers = function() {
        return $http({
            method: 'GET',
            url: 'http://reqr.es/api/users?page=3'
        });
    };
});




// // Factory option - need to refactor out
// app.factory('mainService', function($http) {
// 	var api = 
//    return {
//    	getUsers: function() {
//    		return $http({
//             method: 'GET',
//             url: 'http://reqr.es/api/users?page=3'
//         })
//    	}
//    }
// });


	// var data = [
 //    {
 //        "id": 1,
 //        "first_name": "george",
 //        "last_name": "bluth",
 //        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
 //    },
 //    {
 //        "id": 2,
 //        "first_name": "lucille",
 //        "last_name": "bluth",
 //        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
 //    },
 //    {
 //        "id": 3,
 //        "first_name": "oscar",
 //        "last_name": "bluth",
 //        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
 //    }
 //  ];


