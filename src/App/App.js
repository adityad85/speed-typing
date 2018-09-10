import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './App.css';
import Button from '../StyledComponents/Button/Button';
import InputWrapper from '../StyledComponents/InputWrapper/InputWrapper';
import Heading from '../StyledComponents/Heading/Heading';
import InputBox from '../StyledComponents/InputBox/InputBox';
import ProgressState from '../StyledComponents/ProgressState/ProgressState';
import ShowWord from '../StyledComponents/ShowWord/ShowWord';

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
          <Heading>Speed Typing Game</Heading>
          <InputWrapper>
            <InputBox
              placeholder="Enter the words quickly"
              value={words}
              onChange={e => this.setState({ words: e.target.value })}
            />
          </InputWrapper>
          <Button onClick={this.buttonHandler}>
            <span>{buttonName}</span>
          </Button>
        </div>
        <ProgressState>
          <div className="circle">
            <CircularProgress
              variant="static"
              value={time * 20}
            />
          </div>
          <span>{time}</span>
          <ShowWord>
            <span>{showWord}</span>
          </ShowWord>
          <ShowWord>
            <span>{gameState}</span>
          </ShowWord>
          <p>{gameOver}</p>
        </ProgressState>
      </div>
    );
  }
}

export default App;
