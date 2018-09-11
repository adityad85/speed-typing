import React from 'react';
import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';

import ProgressState from '../../StyledComponents/ProgressState/ProgressState';
import ShowWord from '../../StyledComponents/ShowWord/ShowWord';


const ProgressBox = (props) => {
  const {
    time, showWord, gameState, gameOver,
  } = props;
  return (
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
    </ProgressState>);
};

ProgressBox.propTypes = {
  time: PropTypes.number.isRequired,
  showWord: PropTypes.string.isRequired,
  gameOver: PropTypes.bool.isRequired,
  gameState: PropTypes.string.isRequired,
};

export default ProgressBox;
