let numOrString: number | string;

const logMessage = (value: string | number) => {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
};

logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

const askSomeone = (someone: Developer | Person) => {
  //   someone.name;
  //   someone.skill;
  //   someone.age;
};
askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
askSomeone({ name: '디벨로퍼', age: 100 });

// let nev: string & number & boolean;

const askSomeone2 = (someone: Developer & Person) => {
  someone.name;
  someone.skill;
  someone.age;
};

askSomeone2({ name: '디벨로퍼', skill: '웹 개발', age: 100 });
