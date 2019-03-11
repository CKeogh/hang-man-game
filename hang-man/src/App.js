import React, { Component } from "react";
import "./App.css";
import images from "./hangmanImages/images.js";
import Image from "./components/Image";
import GuessBox from "./components/GuessBox";
import { separateLetters } from "./utils/separateLettes";
import Answer from "./components/Answer";
import BadGuesses from "./components/BadGuesses";

const word = "testing";

class App extends Component {
  state = {
    images,
    word: { word, wordArr: separateLetters(word) },
    guesses: []
  };

  render() {
    console.log(word);
    return (
      <div className="App">
        <h1>Hangman</h1>
        <Image image={images[0]} />
        <BadGuesses guesses={this.state.guesses} />
        <GuessBox handleChange={this.handleChange} />
        <Answer word={this.state.word.wordArr} />
      </div>
    );
  }

  handleChange = event => {
    event.preventDefault();
    const input = event.target.value;
    console.log(event);
    // console.log(this.state.word.word.includes(input));
    // this.state.word.includes(input) ?
  };
}

export default App;
