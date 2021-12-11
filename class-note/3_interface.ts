interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
let jeongmin: User = {
  age: 25,
  name: '정민',
};

// 함수에 인터페이스 활용
const getUser = (user: User) => {
  console.log(user);
};
const capt = {
  name: '캡틴',
  age: 100,
};
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function (c: number, d: number) {
  return c + d;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10; // 'a'

// 딕셔너리 패턴
interface StringRegexpDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexpDictionary = {
  sth: /abc/,
  cssFile: /\.css$/,
  jssFile: /\.js$/,
};

// obj['cssFile'] = 'a' // 에러 감지

Object.keys(obj).forEach(value => {});

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

let captain: Developer = {
  language: 'ts',
  age: 100,
  name: '캡틴',
};
