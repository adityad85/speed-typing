import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './App.css';

const wordList = [
  'aditya',
  'kumar',
  'khare',
  'is',
  'here',
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: '',
      time: 5,
      gameOver: false,
      showWord: wordList[Math.floor(Math.random() * wordList.length)],
      gameState: 'winning',
      buttonName: 'Start',
    };
    this.tick = this.tick.bind(this);
    this.start = this.start.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  tick() {
    const { words, time } = this.state;
    if (time === 0) {
      this.setState(() => ({ gameOver: true, gameState: 'lost' }));
      return;
    }
    this.setState(prev => ({ time: prev.time - 1 }));
    if (wordList.indexOf(words) !== -1) {
      this.setState(() => ({ time: 5 }));
      this.setState(() => ({ words: '', showWord: wordList[Math.floor(Math.random() * wordList.length)] }));
    }
    setTimeout(this.tick, 1000);
  }

  start() {
    this.setState({ buttonName: 'Reset' });
    this.tick();
  }

  reset() {
    this.setState(() => ({ time: 5 }));
    this.setState(() => ({ gameOver: false, gameState: 'winning' }));
    this.setState(() => ({ buttonName: 'Start' }));
  }

  buttonHandler() {
    const { buttonName } = this.state;
    console.log(buttonName);
    if (buttonName === 'Start') {
      this.start();
    } else {
      this.reset();
    }
  }

  render() {
    const {
      time, showWord, gameState, words, buttonName, gameOver,
    } = this.state;
    return (
      <div className="main-body">
        <div className="container">
          <h1>Speed Typing Game</h1>
          <div className="input-box">
            <input
              id="input"
              label="Type Words"
              placeholder="Enter the words quickly"
              // className="input-box"
              value={words}
              onChange={e => this.setState({ words: e.target.value })}
              margin="normal"
            />
          </div>
          <div>
            <button type="button" className="btn" onClick={this.buttonHandler}>
              <span>{buttonName}</span>
            </button>
          </div>
        </div>
        <div className="progressState">
          <div className="circle">
            <CircularProgress
          // className={progress}
              variant="static"
              value={time * 20}
            />
          </div>
          <span>{time}</span>
          <div className="show-word">
            <span>{showWord}</span>
          </div>
          <div className="show-word">
            <span>{gameState}</span>
          </div>
          <p>{gameOver}</p>
        </div>
      </div>
    );
  }
}

export default App;
