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
        input:'1234',
        answer:'4321',
        result:'0A4B'
      },
      {
        input:'6789',
        answer:'1234',
        result:'0A0B'
      },
      {
        input:'1234',
        answer:'1235',
        result:'3A0B'
      },
    ].forEach((example)=>{
      const result = CompareNumber.compare(example.input,example.answer);
      expect(result).toEqual(example.result);
    })
  });
});