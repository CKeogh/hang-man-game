import React, { Component } from "react";
import "./App.css";
import images from "./hangmanImages/images.js";
import Image from "./components/Image";
import GuessBox from "./components/GuessBox";
import { separateLetters } from "./utils/separateLetters";
import Answer from "./components/Answer";
import BadGuesses from "./components/BadGuesses";
import wordsList from "./utils/wordsList";
import Button from "./components/Button";

const word = wordsList[Math.floor(Math.random() * wordsList.length)];

class App extends Component {
  state = {
    images,
    wordData: { word: word.toUpperCase(), wordArr: separateLetters(word) },
    guesses: [],
    won: false
  };

  render() {
    console.log(word);
    return (
      <div className="App">
        <h1>Hangman</h1>
        <Image image={images.hangman[this.state.guesses.length]} won={this.state.won} wonImage={images.imageWinner} />
        <Answer word={this.state.wordData.wordArr} />
        <h4>Incorrect guesses:</h4>
        <BadGuesses guesses={this.state.guesses} />
        <GuessBox handleSubmit={this.handleSubmit} />
        <Button />
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    let guess = event.target.children[0].value.toUpperCase();
    console.log(guess)
    console.log(this.state.wordArr)
    if (this.state.wordData.word.includes(guess)) {
      const newWordArr = this.state.wordData.wordArr.map(letterObj => {
        if (letterObj.letter === guess) letterObj.hidden = false;
        return letterObj;
      })
      if (this.state.wordData.wordArr.every(letterObj => letterObj.hidden === false)) this.setState({ won: true });
      this.setState({ wordData: { word: word.toUpperCase(), wordArr: newWordArr } });
    } else {

      this.setState({ guesses: [...this.state.guesses, guess] })
    }
    event.target.children[0].value = '';
  };
}

export default App;
