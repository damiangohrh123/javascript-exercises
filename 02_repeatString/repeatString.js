const repeatString = function(word, times) {
    let string = '';
    if (times < 0) {
        return string = 'ERROR';
    }
    for (i = 0; i < times; i++) {
        string += word;
    }
    return string;
};
repeatString();
console.log(repeatString);

// Do not edit below this line
module.exports = repeatString;

