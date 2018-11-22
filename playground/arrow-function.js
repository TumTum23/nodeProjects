var square = x => x * x;
console.log(square(4));

var user = {
  name: 'John',
  sayHi: () => {
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHiAlt(1,2);
