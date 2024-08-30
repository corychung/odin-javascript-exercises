const palindromes = function (word) {

    alphanumerical = "qwertyyuiopasdfghjklzxcvbnm1234567890";

    wordAsArray = word.toLowerCase().split("")
    formattedWord = wordAsArray.filter((char) => alphanumerical.includes(char)).join()

    return formattedWord.split("").reverse().join("") == formattedWord;
    
};

// Do not edit below this line
module.exports = palindromes;
