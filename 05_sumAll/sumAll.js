const sumAll = function(one,two) {
    if (typeof(one) != "number" || 
        typeof(two) != "number" ||
        one < 0 || 
        two < 0 ||
        one % 1 != 0 || 
        two % 1 != 0
        ) return "ERROR";

        let counter = 0;

        if (two > one) {
            for (let i = one; i <= two; i++) {
                counter += i;
            }
        }  

        else if (two <= one) {
            for (let i = two; i <= one; i++) {
                counter += i;
            }
        }

    return counter;
};

// Do not edit below this line
module.exports = sumAll;
