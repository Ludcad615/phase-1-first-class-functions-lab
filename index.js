// Code your solution in this file!

//array= [1, 2, 3, 4,5 ]

//const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);

function returnFirstTwoDrivers(arr){
return arr.slice(0,2)
}

//const returnLastTwoDrivers = drivers => drivers.slice(-2);

function returnLastTwoDrivers(arr){
    return arr.slice(arr.length-2, arr.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//const createFareMultiplier = num => fare => fare * num

function createFareMultiplier(number){
    return function(fare){
        return fare * number
    }
}

/*const fareDoubler = fare => {
    let num = 2
    return createFareMultiplier(num)(fare)
}
*/

const fareDoubler = createFareMultiplier(2)

/*const fareTripler = fare => {
    let num = 3
    return createFareMultiplier(num)(fare)
}
*/

const fareTripler = createFareMultiplier(3)

//const selectDifferentDrivers = (drivers, fn) => fn(drivers)

function selectDifferentDrivers(list, aFunction){
    return aFunction(list)
}