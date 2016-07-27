'use strict';

class AnswerGenerator {
  static generte() {
    const answer = [];
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < 4; i++) {
      const random = parseInt(Math.random() * digits.length);
      answer.push(digits.splice(random,1)[0]);
    }

    return answer.join('');
  }
}

module.exports = AnswerGenerator;