'use strict';

const stdin = require('mock-stdin').stdin();//*********************
const AnswerGenerator = require('../src/answer-generator');
const Game = require('../src/game');
describe('Guess Number', ()=> {
  beforeEach(()=> {
    spyOn(console, 'log');
    spyOn(process, 'exit');
    spyOn(AnswerGenerator,'generte').and.returnValue('1234');//*************
    new Game().start();
  });

  it('Congratulations', ()=> {
    expect(console.log).toHaveBeenCalledWith('Welcome!\n');
    expect(console.log).toHaveBeenCalledWith('Please input your number(6):');

    stdin.send('1234');

    expect(console.log).toHaveBeenCalledWith('Congratulations!');
    expect(process.exit).toHaveBeenCalled();
  });

  it('Game Over', ()=> {
    expect(console.log).toHaveBeenCalledWith('Welcome!\n');
    for (let i = 6; i > 0; i--) {
      expect(console.log).toHaveBeenCalledWith(`Please input your number(${i}):`);
      stdin.send('1235');
      expect(console.log).toHaveBeenCalledWith('3A0B');
    }
    expect(console.log).toHaveBeenCalledWith('Game Over\n');
    expect(console.log).toHaveBeenCalledWith(`Answer : 1234`);
    expect(process.exit).toHaveBeenCalled();
  });

  it('Input Error', ()=> {
    expect(console.log).toHaveBeenCalledWith('Welcome!\n');
    expect(console.log).toHaveBeenCalledWith('Please input your number(6):');

    stdin.send('1211');

    expect(console.log).toHaveBeenCalledWith('Cannot input duplicate numbers!');
  });

});