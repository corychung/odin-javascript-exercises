// const removeFromArray = function(array, one, two, three, four) {
    // while (array.includes(one)) {
    //     array.splice(array.indexOf(one),1);
    // }
    // while (array.includes(two)) {
    //     array.splice(array.indexOf(two),1);
    // }
    // while (array.includes(three)) {
    //     array.splice(array.indexOf(three),1);
    // }
    // while (array.includes(four)) {
    //     array.splice(array.indexOf(four),1);
    // }
    // return array;

    //instead of REMOVING, make a NEW array exclusing tho other guys.
// };

const removeFromArray = function(array, ...toRemove) {
    let newArray = [];
    for (item of array) {
        if (!toRemove.includes(item)) {
            newArray.push(item);
        }
    }
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
 