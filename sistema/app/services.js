(function(){
  var app = angular.module('services', []);
  //Servicios
  
  app.value('user', getUser());
  
  app.factory('userData', function($http){
    var data = [];
    return{
      //USER
      isLogged: function(){
        if (sessionStorage.user){
          return true;
        }
        else{
          return false;
        }
      },
      getUsers: function(){
        if (localStorage.VCusers){
          data = JSON.parse(localStorage.VCusers);
        }
        else{
          $http.get('data/users.json')
            .success(function(result){
              data = result;
              localStorage.VCusers = JSON.stringify(data); 
            })
            .error(function(){
              console.log('error loading users');
              return false;
            });
        }
      },

      findByUsername: function(username){
        return data.filter(function(obj) { return obj.username === username; });
      },
      addUser: function(name, user, pass){
        var newUser = {
          "id": data.length,
          "username": user,
          "password": pass,
          "name": name,
          "history": [],
          "admin": 0
        }
        data.push(newUser);
        this.persistUsers();
        return true;
      },
      addRent: function(user, rent){
        var index = data.map(function(x) {return x.id; }).indexOf(user.id);
        
        data[index].history.push(rent);
        this.persistUsers();
        sessionStorage.user = JSON.stringify(data[index]);
      },
      updateUserProfile: function(user){
        var index = data.map(function(x) {return x.id; }).indexOf(user.id);
        data[index] = user;
        sessionStorage.user = JSON.stringify(user);
        this.persistUsers();
      },
      persistUsers: function(){
        localStorage.VCusers = JSON.stringify(data); 
      }
      
    };
  });
  
  app.factory('sharedBooks', ['$http', '$rootScope', function($http, $rootScope){
    var data = [];
    return{
      addSubject: function(){},
      editSubject: function(){},
      removeSubject: function(){},
      listSubjects: function(){},
    
      getBooks: function() {
        return $http.get(base_url + 'json/get_books_json').then(function(response) {
          books = response.data;
          $rootScope.$broadcast('handleSharedBooks',books);
          return books;
        })
      },
      saveBooks: function($params) {
        return $http({
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          url: base_url + 'json/save_book',
          method: "POST",
          data: $params,
        })
          .success(function(addData) {
            books = addData;
            $rootScope.$broadcast('handleSharedBooks',books);
          });
      }

    }
  });

})();