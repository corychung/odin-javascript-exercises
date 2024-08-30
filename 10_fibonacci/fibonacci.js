const fibonacci = function(num) {
    num = parseInt(num);
    if (num ===0) return 0;
    if (num < 0) return "OOPS";

    let sum = 1;
    let prevSum = 1;
    
    for (let i = 2; i < parseInt(num); i++) {
        let temp = sum;
        sum = sum + prevSum;
        prevSum = temp;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
