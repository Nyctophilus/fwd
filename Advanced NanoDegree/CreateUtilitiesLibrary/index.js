const { sum, concat } = require("./utilities/util1");
const util2 = require("./utilities/util2");

console.log(sum([1, 4, 22]));
console.log(concat([1, 4], [2, 22]));

console.log(util2.cut3([1, 2, 3, 4, 5]));
console.log(util2.lgNum([1, 99, 2, 3, 4, 5]));
