import React, { Component } from 'react';
import './App.css';
import images from './hangmanImages/images.js'
import Image from './components/Image';
import GuessBox from './components/GuessBox';

const words = []

class App extends Component {

  state = {
    images,
    words,
    guesses: []
  }

  render() {
    return (
      <div className="App">
        <h1>Hangman</h1>
        <Image image={images[0]} />
        <GuessBox />
      </div>
    );
  }
}

export default App;
