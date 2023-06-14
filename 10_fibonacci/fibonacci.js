const fibonacci = function(value) {
    if (value < 0) return 'OOPS';
    let a = 1;
    let b = 0;
    for (let i = 0; i < value; i ++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
