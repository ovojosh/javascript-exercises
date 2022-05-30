const sumAll = function(min, max) {
    //typeof is finding out if min or max are numbers/integers
    if(typeof min !== 'number' || typeof max !== 'number') {
        return 'ERROR';
    }

    //If min and max are negatives, then return 'ERROR'
    if (min < 0 || max < 0) {
        return 'ERROR';
    }

    //If min is greater than max, swap them
    if (min > max) {
        [min, max] = [max, min];
    }

    let sum = 0;
    //Adding from min to max, and all numbers between min and max
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
