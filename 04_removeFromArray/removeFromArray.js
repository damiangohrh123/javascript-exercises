const removeFromArray = function(array, ...args) {
    const remove = array.filter(item => !args.includes(item));
    return remove;
};

// Do not edit below this line
module.exports = removeFromArray;
