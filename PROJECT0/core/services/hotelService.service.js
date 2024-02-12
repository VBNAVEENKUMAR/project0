var hotelService = angular.module('hotelService',[]);
hotelService.service('hotelService',[function(){
        var hotels=[
            {
                id: 1,
                name: "Germanus 7⭐",
                city:"Madurai",
                address: "Bye Pass Road Madurai",
                price: '$4000',
                img:"",
                details: "first hotel"

            
            },
            {
                id: 2,
                city:"Mumbai",
                name: "Paradise 5⭐",
                address: "456 John Road, Erode, Mumbai",
                price: '$5000',
                img:"",
                details: "second hotel"

            },
            {
                id: 3,
                city:"Madurai",
                name: "Manish jkans Hotel",
                address: "90/43 Permbalur India",
                price: '$10000',
                img:"",
                details: "third hotel"

            },
            {
                id: 4,
                city:"Coimbatore",
                name: "Orbito",
                address: "89 Avinashi Coimbatore",
                price: '$3000',
                img:"",
                details: "fourth hotel"

            },
            {
                id: 5,
                city:"Rajasthan",
                name: "JOY",
                address: "43 bye pass road Rajasthan",
                price: '$7000',
                img:"",
                details: "fifth hotel"

            },
            {
                id: 6,
                city:"Bengaluru",
                name: "Vajra",
                address: "23 dollors colony Bengaluru",
                price: '$8000',
                img:"",
                details: "sixth hotel"

            },
            {
                id: 7,
                city:"Madurai",
                name: "Agrini",
                address: "Umachikulam Anaiyur, New Delhi",
                price: '$804300',img:"",

                details: "seventh hotel"

            },
            {
                id: 8,
                city:"Pondicherry",
                name: "Vajara Aparna",
                address: "23/32 French colony Pondicherry",
                price: '$83000',
                img:"",
                details: "eight hotel"

            },
            {
                id: 9,
                city:"Kerala",
                name: "Osi Aparna",
                address: "23/32 Dollors colony Kerala",
                price: '$3000',
                img:"",
                details: "nine hotel"

            },
            {
                id: 10,
                city:"Ooty",
                name: "Ellis Aparna",
                address: "23/32 Osu colony Ooty",
                price: '$84000',
                img:"",
                details: "ten hotel"

            }
        ];
        this.getHotels= function(){
            return hotels;
        }
        this.getId= function(id){
            return hotels.find(function(hotel){
                return hotel.id == id;
            });
        };
        this.getCity= function(id){
            return hotels.find(function(hotel){
               if(hotel.id == id) {
                    return hotel.city;
               }
            });
        };
    }]);