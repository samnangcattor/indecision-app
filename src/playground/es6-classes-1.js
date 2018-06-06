class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreating() {
    return `Hi. I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is  ${this.major}`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreating() {
    let greating = super.getGreating();

    if (this.homeLocation) {
      greating += ` I'm vistiong from ${this.homeLocation}`;
    }

    return greating;
  }
}

const me = new Traveler('Dam SamNang', 29, 'Hanoi');
console.log(me.getGreating());

const other = new Traveler();
console.log(other.getGreating());
