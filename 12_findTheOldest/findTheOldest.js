
const findTheOldest = function (array) {
    return array.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfDeath,oldest.yearOfBirth);
        const currentAge = getAge(current.yearOfDeath,current.yearOfBirth);
        return oldestAge < currentAge ? current : oldest;
    });
};

const getAge = function (death, birth) {
    const currentYear = new Date().getFullYear();
    if (!death) {
        death = currentYear;
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
