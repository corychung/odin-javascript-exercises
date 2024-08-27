const repeatString = function(string, number) {
    // return number >= 0 ? string.repeat(number): "ERROR"; <- one-line solution, no using repeat() tho
    let word = "";
    if (number < 0) return "ERROR";
    for (let i = 0; i < number; i++) {
        word += string;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
