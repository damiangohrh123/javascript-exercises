
const sumAll = function(min, max) {
    if (min < 0 || max < 0) return 'ERROR';
    if (!Number.isInteger(min)|| !Number.isInteger(max)) return 'ERROR';
    
    else if (max > min) {
        let sum = 0;
        for (i = min; i <= max; i++){
            sum += i;        
    }
    return sum;
    }else if (min > max){
        let sum = 0;
        for (i = max; i <= min; i++){
            sum += i;        
    }
    return sum;
}
    }


// Do not edit below this line
module.exports = sumAll;
