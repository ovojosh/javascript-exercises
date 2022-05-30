const removeFromArray = function(...args) {
    //The first element in the removeFromArray function is an array.
    //So we separate args[0] into an array.
    const array = args[0];
    //Next, we filter out the elements that are included in the function arguments, but not in the array.
    return array.filter(el => !args.includes(el))
};

// Do not edit below this line
module.exports = removeFromArray;
