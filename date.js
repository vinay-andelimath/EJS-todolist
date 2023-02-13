//Refactor code
//getting day back to app.js
//no paranthesis when exporting module

//module.exports = getDate;
//calling using the properties..
//module.exports.getDate = getDate;
//refactor calling by var name
// function refactor  
//refactor module 
exports.getDate = function () {
    //changing let to const 
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    //refactor return
    return today.toLocaleDateString("en-GB", options);
    //return day;
}
exports.getDay = function () {
    const today = new Date();

    const options = {
        weekday: "long"
    };
    return today.toLocaleDateString("en-GB", options);
    //return day;
}