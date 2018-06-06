// arguments object - no longer bound with arrow functions

// const add = function(a, b) {
//   console.log(arguments);
//   return a + b;
// };

// console.log(add(1, 2, 1002));
const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(add(1, 2));

// this keyword - no longer bound

// const  user = {
//   name: 'Dam SamNang',
//   cities: ['Phnom Pench', 'Hanoi'],
//   printPlacesLived: function () {
//     const that = this;

//     this.cities.forEach(function(city) {
//       console.log(that.name + ' has lived in ' + city);
//     });
//   }
// };

const user = {
  name: 'Dam SamNang',
  cities: ['Phnom Pench', 'Hanoi'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city);
    // });
  }
};
console.log(user.printPlacesLived());

const multiplier =  {
  numbers: [1, 2, 3],
  multiplyBy: 4,
  multiply() {
    return this.numbers.map((number) => number + this.multiplyBy);
  }
};

console.log(multiplier.multiply());
