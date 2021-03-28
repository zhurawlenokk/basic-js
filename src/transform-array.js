const CustomError = require("../extensions/custom-error");

module.exports = function transform (arr) {
  let transformed = arr.forEach (function (item, i) {
    if (item == '--discard-next') {
      arr.splice(item[i + 1], 1);
    }

  })

  console.log(transformed);
};

console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));
