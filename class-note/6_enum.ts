enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스',
}

let myShoes = Shoes.Nike;
console.log(myShoes); // '나이키'

enum Answer {
  YES = 'Y',
  NO = 'N',
}

// 예제
const askQuestion = (answer: Answer) => {
  if (answer === Answer.YES) {
    console.log('정답입니다.');
  }
  if (answer === Answer.NO) {
    console.log('오답입니다.');
  }
};

askQuestion(Answer.YES);
askQuestion(Answer.NO);
