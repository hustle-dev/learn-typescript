const num: number = 123;

type MyNum = number;
const num2: MyNum = 123;

interface Person {
  name: string;
  age: number;
}

type Person2 = {
  name: string;
  age: number;
};

let jm: Person = {
  name: '정민',
  age: 25,
};

let jm2: Person2 = {
  name: '정민',
  age: 25,
};
