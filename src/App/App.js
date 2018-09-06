import React from 'react';

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
      time: 0,
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
    this.setState(prev => ({ time: prev.time + 1 }));
    if (wordList.indexOf(words) !== -1) {
      this.setState(() => ({ time: 0 }));
      this.setState(() => ({ words: '', showWord: wordList[Math.floor(Math.random() * wordList.length)] }));
    }
    if (time === 5) {
      this.setState(() => ({ gameOver: true, gameState: 'lost' }));
      return;
    }
    setTimeout(this.tick, 1000);
  }

  start() {
    this.setState({ buttonName: 'Reset' });
    this.tick();
  }

  reset() {
    this.setState(() => ({ time: 0 }));
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
      <div className="root-container">
        <input type="text" value={words} onChange={e => this.setState({ words: e.target.value })} />
        <button type="button" onClick={this.buttonHandler}>
          {buttonName}
        </button>
        <p>{time}</p>
        <p>{showWord}</p>
        <p>{gameState}</p>
        <p>{gameOver}</p>
      </div>
    );
  }
}

export default App;
