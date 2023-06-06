const convertToCelsius = function(fahrenheit) {
  let convertedCelcius = ((fahrenheit - 32) * (5/9));
  return parseFloat(convertedCelcius.toFixed(1));
};

const convertToFahrenheit = function(celcius) {
  let convertedFahrenheit = ((celcius * (9/5)) + 32);
  return parseFloat(convertedFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
