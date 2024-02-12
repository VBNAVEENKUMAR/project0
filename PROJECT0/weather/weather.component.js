angular.module('weather')
   .component('weather', {
        templateUrl:'weather/weather.template.html',
        controller: ['weatherService', function(weatherService){
            let obj = this;
            obj.city = '';
            obj.weatherData = null;
            obj.error = null;
        
            obj.getWeather = function(){
                weatherService.getWeather(obj.city)
                    .then(function(data){
                        obj.weatherData = data;
                    }).catch(function(error){
                        alert("Provide Valid Input");
                    })
            };
        }]
        
    });