var nameVar = 'Dam SamNang';
var nameVar = 'Mike'
console.log('nameVar', nameVar);

let nameLet = 'Samnang';
nameLet = 'let resign';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

var fullName = 'Dam SamNang';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
