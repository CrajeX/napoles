/// logging
console.log("sample log"); ///logging

//variable
const x = 1;
var y = 4;
let z = true;
let data = ["pogi", "ako", "jerson"];
let i = 0;
// console.log(typeof z); //knowing what type of data the variable is
console.log();
data.forEach((element) => {
  console.log(data[i]);
  i++;
});
// //array
// let arr1 = [1, 2, 3, 4, 5];
// let sum = arr1[0] + arr1[1] + arr1[2] + arr1[3] + arr1[4];
// let average = sum / arr1.length;
// console.log(average);

// let human = {
//   //object
//   name: "mark",
//   gender: "male",
//   age: "31",
//   minor: false,
//   subjects: ["english", "math"],
//   grades: {
//     english: 90,
//     science: 95,
//     filipino: 85,
//   },
// };
// console.log(human.grades.science); // dictionary name.the title. the contents

function addition() {
  let num1 = 100;
  let num2 = 50;
  let sum = num1 + num2;
  return sum;
}
console.log(addition());
