'use strict';
const CompareNumber = require('../src/compare-number');
describe('Compare Number',()=>{
  it('compare',()=>{
    [
      {
        input:'1234',
        answer:'1234',
        result:'4A0B'
      },
      {
        input:'4321',
        answer:'1234',
        result:'0A4B'
      },
      {
        input:'7890',
        answer:'1234',
        result:'0A0B'
      },
      {
        input:'1238',
        answer:'1234',
        result:'3A0B'
      }
    ].forEach((example)=>{
      const result = CompareNumber.compare(example.input,example.answer);
      expect(result).toEqual(example.result);
    });
  })
});