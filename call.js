// what are the callback functions in javascript?

function  x(y){

    console.log("when x is called it will print this")
    y()

}
x(function y(){

    console.log("when y is invoked inside x this will be printed")

})// y is a call back function as it is upto the x when to call the function in the code.

setTimeout( function l () {
    console.log("callback function called after 5 sec until then it stored inside the space created by js ")
    
}, 5000);// here the function l is a call back function as it is called inside the settimeout function and can be called back sometime in the code using the timer .