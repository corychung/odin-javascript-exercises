
// turn string into Array
// create separate new array
// put the LAST element from that array onto the FIRST element of this array
// return array

const reverseString = function(string) {

    // return string.split("").reverse().join(""); <- one-line TOP solution
    // was not aware you could reverse arrays...

    let reversedArray = [];
    let stringArray = string.split("");
    for (let i = 0; i < string.length; i++) {
        reversedArray.push(stringArray.pop());
    }
    return reversedArray.join("");

};

// Do not edit below this line
module.exports = reverseString;
