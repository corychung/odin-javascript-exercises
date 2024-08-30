const findTheOldest = function(array) {

    // let max = 0;
    // newone = array.filter((person) => {
    //     let currentAge = (person.yearOfDeath ? person.yearOfDeath:new Date().getFullYear()) - person.yearOfBirth;
    //     max = currentAge > max ? currentAge : max;
    // })
    // return array.find((person) => max == (person.yearOfDeath ? person.yearOfDeath:new Date().getFullYear()) - person.yearOfBirth)

    return array.reduce((old, cur) => {
        const oldAge = (old.yearOfDeath ? old.yearOfDeath : new Date().getFullYear()) - old.yearOfBirth;
        const currentAge = (cur.yearOfDeath ? cur.yearOfDeath : new Date().getFullYear()) - cur.yearOfBirth;
        return oldAge > currentAge ? old : cur
    })

};

// Do not edit below this line
module.exports = findTheOldest;
  