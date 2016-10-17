angular.module('starter.services', [])

.service('UserService', function() {

//for the purpose of this example I will store user data on ionic local storage but you should save it on a database

  var setUser = function(user_data) {
    window.localStorage.userProfile = JSON.stringify(user_data);
  };

  var getUser = function(){
    return JSON.parse(window.localStorage.userProfile || '{}');
  };

  return {
    getUser: getUser,
    setUser: setUser
  };
});
