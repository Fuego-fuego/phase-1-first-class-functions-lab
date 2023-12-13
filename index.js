// Code your solution in this file!


/*Q1*//*    returnFirstTwoDrivers(),
    1. Accepts an array of drivers as an argument,
    2. Returns the first two drivers in the array.      
                                                    */
const returnFirstTwoDrivers = drivers => [drivers[0], drivers[1]];


/*Q2*//*    returnLastTwoDrivers()
1. The assigned function accepts an array of drivers
as an argument 
2. It returns the last two drivers in the array. 
                                                    */
const returnLastTwoDrivers = function (drivers) {
    
    return [drivers[drivers.length - 2],drivers[drivers.length - 1]];
}


/*Q3*//*    selectingDrivers
        1.Array containing two elements
        2.The two functions that we previously defined 
        (returnFirstTwoDrivers() and returnLastTwoDrivers()).
                                                    */
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


/*Q4*//*    createFareMultiplier()
        1.A higher-order function that takes in one argument, an integer.
        2.Returns a function that will multiply a fare for a ride accordingly.
                                                    */
 function createFareMultiplier(fairMultiple){
    const fairConstantFactor = 5;
    return () => fairMultiple * fairConstantFactor;
 }


/*Q5*//*    fareDoubler()
        1.is a function
        2.doubles fares
                                                    */

const fareDoubler = fair => fair * 2;
/*Q6*//*    fareTripler()
        1 is a function
        2 triples fares
                                                    */
    
    const fareTripler = fair => fair *3;

/*Q7*//*    selectDifferentDrivers(arrayOfDrivers, function)
        1.Returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
        2.Returns the last two drivers when passed returnLastTwoDrivers() as the second argument

*/

function selectDifferentDrivers(arrayOfDrivers, functionToBeExecuted){

    
    return functionToBeExecuted(arrayOfDrivers);

    }

