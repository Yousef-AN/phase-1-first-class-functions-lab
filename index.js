// Code your solution in this file!


const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);};

const returnLastTwoDrivers = function(drivers) {
        return drivers.slice(2, 4);}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function  createFareMultiplier(n){
   return function () {
         return n*n //
}}

function fareDoubler(n){ 
    return n * 2
}

function fareTripler(n){
    return n * 3
}

function selectDifferentDrivers(drivers, func) {
    return func(drivers)
}
