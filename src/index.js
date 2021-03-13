module.exports = function toReadable(number) {
    let basicNumbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let restNumbers = [
        " ",
        "hundred",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number < 20) {
        return(basicNumbers[number]);
      }
      if (number > 19 && number < 100) {
        if (number % 10 === 0) {
          return(restNumbers[number / 10]);
        } else {
          return(
            restNumbers[Math.floor(number / 10)] +
              restNumbers[0] +
              basicNumbers[number % 10]
          );
        }
      }

      if (number >= 100) {
        if (number % 100 === 0) {
          return(
            basicNumbers[number / 100] + restNumbers[0] + restNumbers[1]
          );
        } else if (number % 100 < 20) {
          return(
            basicNumbers[Math.floor(number / 100)] +
              restNumbers[0] +
              restNumbers[1] +
              restNumbers[0] +
              basicNumbers[Math.floor(number % 100)]
          );
        } else if (number % 10 === 0) {
          return(
            basicNumbers[Math.floor(number / 100)] +
              restNumbers[0] +
              restNumbers[1] +
              restNumbers[0] +
              restNumbers[Math.floor((number % 100) / 10)]
          );
        } else {
          return(
            basicNumbers[Math.floor(number / 100)] +
              restNumbers[0] +
              restNumbers[1] +
              restNumbers[0] +
              restNumbers[Math.floor((number % 100) / 10)] +
              restNumbers[0] +
              basicNumbers[number % 10]
          );
        }
      }

};
