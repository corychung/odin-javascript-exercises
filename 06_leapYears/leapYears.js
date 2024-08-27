const leapYears = function(year) {
    const byFour = year % 4 === 0;
    const byHundred = year % 100 === 0;
    const byFourHundred = year % 400 === 0;
    
    return (byFour && (!byHundred || byFourHundred))

    // if (year % 4 === 0) {
    //     if (year % 100 === 0 && year % 400 !== 0) {
    //         return false;
    //     }
    //     return true;
    // }
    // return false;

};

// Do not edit below this line
module.exports = leapYears;


// if DIV BY FOUR then...
    // if DIV BY 100 AND NOT DIV BY 400 THEN NOT LEAP YEAR
    // else LEAP YEAR