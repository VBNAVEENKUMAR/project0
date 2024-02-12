var weatherService= angular.module('weatherService', ["hotelService"]);

   weatherService.service('weatherService', ['$http', function($http) { 
        var apiKey= 'dbd1aa3e4722621d7c98f1e6987e0836';
        this.getWeather = function(city){
            var apiUrl= 'https://api.openweathermap.org/data/2.5/weather';
            var temperatureUnit = 'metric';
            var params= {
                q:city,
                appid:apiKey,
                units: temperatureUnit
            };
            return $http.get(apiUrl, {params:params})
                .then(function (response){
                    return response.data;
                })
                .catch(function(error){
                    console.error('Error while fetching data ', error);
                    throw error; 
                });

        };
    }]);