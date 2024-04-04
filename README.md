# react-mastermind

> Build an [Mastermind](https://react-mastermind-7b8bc58e61f3.herokuapp.com/) single page application ground up with React, Express

![Page One](public/images/mastermind.png?raw=true "First page of game")
![Page Two](public/images/astermind2.png?raw=true "Setting page")

## Click to [play the page](https://react-mastermind-7b8bc58e61f3.herokuapp.com/)

### Introduction

Mastermind is a classic code-breaking board game for two players. The game was invented in 1970 by Mordecai Meirowitz, an Israeli postmaster and telecommunications expert. The objective of Mastermind is for one player, the codemaker, to create a secret code using colored pegs, and for the other player, the codebreaker, to decipher the code within a certain number of turns.

### How to play

Here's a brief overview of how the game is typically played:

1. Setup: The app generate a secret code consisting of a sequence of four colored pegs (the diffculies could be change at the setting page, from four colors to six). There can be duplicate colors in the code.

2. Gameplay: The codebreaker begins by making a guess at the secret code. The codemaker provides feedback after each guess by using a series of colored and white pegs.

3. A solid black peg indicates that a guessed peg is both the correct color and in the correct position.
A black circle peg indicates that a guessed peg is the correct color but in the wrong position.

Repeating Guesses: The codebreaker continues to make guesses based on the feedback received from the codemaker. Through a process of deduction and logic, the codebreaker refines their guesses to ultimately crack the secret code.

4. Winning the Game: The game ends when the codebreaker correctly deduces the entire secret code within the specified number of turns. If the codebreaker cannot crack the code within the allowed number of turns, the app wins.


#### Install Dependencies
```
npm install

```