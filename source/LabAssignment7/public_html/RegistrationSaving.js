

var registrationap = angular.module("register",[]);

registrationap.controller("RegistrationController", function($scope,$http, $httpParamSerializerJQLike,$window){
    
$scope.SaveRegistration = function(first,last,email,phone,user,pass) {
   console.log("inside login function");
$http({
    method: 'POST',
    url : 'https://api.mongolab.com/api/1/databases/lab7/collections/userdata?apiKey=t8UskUuN5mhOMEgXCfG4Bp06rKb_6h9C',
    data: JSON.stringify({
                FirstName: first,
                LastName: last,
                Emailid: email,
                Phone: phone,
                UserName: user,
                password: pass
            }),
    contentType: "application/json"
}).success(function() {
    $window.location = 'index.html';
        })
}
    
});