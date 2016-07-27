'use strict';

const stdin = require('mock-stdin').stdin();
const Game = require('../src/game');
const AnswerGenerator = require('../src/answer-generator');//***************************

describe('Game', ()=> {
  beforeEach(()=> {
    spyOn(AnswerGenerator, 'generate').and.returnValue('1234');//****************************
    spyOn(console, 'log');
    spyOn(process, 'exit');

    new Game().start();
  });

  it('you win', ()=> {
    expect(console.log).toHaveBeenCalledWith('Welcome!\n');
    expect(console.log).toHaveBeenCalledWith('Please input your number(6):');
    stdin.send('1234');
    expect(console.log).toHaveBeenCalledWith('Congratulations!');
    expect(process.exit).toHaveBeenCalled();
  });


  it('you fail', ()=> {
    expect(console.log).toHaveBeenCalledWith('Welcome!\n');
    for (let i = 6; i > 0; i--) {
      expect(console.log).toHaveBeenCalledWith(`Please input your number(${i}):`);
      stdin.send('4356');

      expect(console.log).toHaveBeenCalledWith('0A2B');
    }

    expect(console.log).toHaveBeenCalledWith('Game Over\n');
    expect(console.log).toHaveBeenCalledWith('Answer:1234');
    expect(process.exit).toHaveBeenCalled();
  });


  it('duplicate number', ()=> {
    expect(console.log).toHaveBeenCalledWith('Welcome!\n');
    expect(console.log).toHaveBeenCalledWith('Please input your number(6):');
    stdin.send('1214');//*************************************************
    expect(console.log).toHaveBeenCalledWith('Cannot input duplicate numbers!');

  });
});