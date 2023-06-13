const palindromes = function (string) {
    const regex = /[^a-zA-Z0-9]/g;
    const processedString = string.toLowerCase().replace(regex, '');
    return processedString.split('').reverse().join('') === processedString;
  };

// Do not edit below this line
module.exports = palindromes;
