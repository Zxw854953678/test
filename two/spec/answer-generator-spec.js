'use strict';

const AnswerGenerator = require('../src/answer-generator');
describe('Answer Generator',()=>{
  it('generate answer',()=>{
    const isUnique = (digit,index,array)=>{
      return array.lastIndexOf(digit)===index;
    };

    const answer = AnswerGenerator.generate();
    expect(answer.length).toEqual(4);
    expect(answer.split('').every(isUnique)).toBeTruthy();
    expect(answer).not.toEqual(AnswerGenerator.generate());
  });
});