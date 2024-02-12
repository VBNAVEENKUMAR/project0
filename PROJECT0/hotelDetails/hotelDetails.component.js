angular.module("hotelDetails", ["core"]).component("hotelDetails", {
  templateUrl: "hotelDetails/hotelDetails.template.html",
  controller: [
    "hotelService",
    "$routeParams",
    "weatherService",
    function (hotelService, $routeParams,weatherService) {
        let obj = this;
        obj.hotel = hotelService.getId($routeParams.hotelId);
        //   console.log(obj.hotel)
        obj.weatherData = null;
        weatherService.getWeather(obj.hotel.city)
                .then(function(data){
                    obj.weatherData = data;
                }).catch(function(error){
                    alert("Provide Valid Input");
            })
    }
  ],
});
