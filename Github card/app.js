(function(){


var app = angular.module("myApp",[]);
let Appfunc = function($scope,$http){
$scope.title = "My github card";

$scope.appName = "Github Card";
$scope.appdesc = "This is an app to show your details in github";
$scope.testData = [{name:"Dan Abramov", avatar_url:"https://avatars0.githubusercontent.com/u/810438?v=4",
company:"@Olatechbus",details: "work as software Engineer at Olatechbus"}, 


{name:"Stephen Mayeux",avatar_url:"https://avatars0.githubusercontent.com/u/510438?v=4", 
company:"Senior Software Engineer @ Olatechbus",
 details:"Senior Software Engineer. Node.js, PHP, Python, C++, JavaScript, React, React Native"},


 {name:"Stephen Mayeux",avatar_url:"https://avatars0.githubusercontent.com/u/310438?v=4", 
company:"Senior Software Engineer @ Olatechbus",
 details:"Senior Software Engineer. Node.js, PHP, Python, C++, JavaScript, React, React Native"}
]


$scope.addUser = function(x){

  
const spinner = document.getElementById('mySpinner');
spinner.style.display = "block";
  //http call
let onError = function(){
    alert(`there is a problem getting the data of ${x} `);
}
$http.get(`https://api.github.com/users/${x}`).then(function(response){


$scope.myUser = response.data;
spinner.style.display = "none";
$scope.user = {name:$scope.myUser.name,avatar_url:$scope.myUser.avatar_url, 
company:$scope.myUser.company,
 details:$scope.myUser.bio
    
};
$scope.testData.push($scope.myUser);
$scope.iUser = " ";
spinner.style.display = "none";
myModal.click();
},onError);
}


}
app.controller('myCtr',Appfunc);






}())